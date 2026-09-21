import sharp from 'sharp';
import { readdir, stat, mkdir } from 'fs/promises';
import { join, extname, basename } from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const PUBLIC_IMAGES = join(__dirname, '..', 'public', 'images');

// Config: directory → max width
const DIR_CONFIG = {
  '': 1920,            // root images (hero-banner, route images)
  'fleet': 800,
  'luggage': 800,
  'ancillaries': 800,
  'logo': null          // skip logos — already tiny PNGs
};

async function getJpegFiles(dir) {
  const files = [];
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...await getJpegFiles(fullPath));
    } else if (/\.(jpe?g)$/i.test(entry.name)) {
      files.push(fullPath);
    }
  }
  return files;
}

async function optimizeImage(filePath, maxWidth) {
  const webpPath = filePath.replace(/\.(jpe?g)$/i, '.webp');
  const originalStat = await stat(filePath);
  const originalKB = (originalStat.size / 1024).toFixed(1);

  let pipeline = sharp(filePath);
  const meta = await pipeline.metadata();

  // Resize if wider than maxWidth
  if (meta.width > maxWidth) {
    pipeline = pipeline.resize(maxWidth, null, { withoutEnlargement: true });
  }

  // Convert to WebP quality 80
  await pipeline
    .webp({ quality: 80 })
    .toFile(webpPath);

  const newStat = await stat(webpPath);
  const newKB = (newStat.size / 1024).toFixed(1);
  const saving = ((1 - newStat.size / originalStat.size) * 100).toFixed(0);

  console.log(`  ✓ ${basename(filePath)} → ${basename(webpPath)}  |  ${originalKB} KB → ${newKB} KB  (${saving}% saved)`);
  return { original: originalStat.size, optimized: newStat.size };
}

async function run() {
  console.log('\n🖼️  Optimizing images to WebP...\n');
  let totalOriginal = 0;
  let totalOptimized = 0;
  let count = 0;

  for (const [subdir, maxWidth] of Object.entries(DIR_CONFIG)) {
    if (maxWidth === null) continue;

    const dir = subdir ? join(PUBLIC_IMAGES, subdir) : PUBLIC_IMAGES;
    
    try {
      await stat(dir);
    } catch {
      console.log(`  ⏭️  Skipping ${subdir || 'root'} (not found)`);
      continue;
    }

    // Only get direct JPEG files (not in subdirs) for root
    let jpegFiles;
    if (!subdir) {
      const entries = await readdir(dir, { withFileTypes: true });
      jpegFiles = entries
        .filter(e => !e.isDirectory() && /\.(jpe?g)$/i.test(e.name))
        .map(e => join(dir, e.name));
    } else {
      jpegFiles = await getJpegFiles(dir);
    }

    if (jpegFiles.length === 0) continue;

    console.log(`📁 ${subdir || 'root'} (max ${maxWidth}px):`);
    for (const file of jpegFiles) {
      const result = await optimizeImage(file, maxWidth);
      totalOriginal += result.original;
      totalOptimized += result.optimized;
      count++;
    }
    console.log('');
  }

  const savedMB = ((totalOriginal - totalOptimized) / (1024 * 1024)).toFixed(1);
  const totalSaving = ((1 - totalOptimized / totalOriginal) * 100).toFixed(0);
  console.log(`✅ Done! ${count} images optimized.`);
  console.log(`   Total: ${(totalOriginal / (1024 * 1024)).toFixed(1)} MB → ${(totalOptimized / (1024 * 1024)).toFixed(1)} MB  (${savedMB} MB saved, ${totalSaving}% reduction)\n`);
}

run().catch(console.error);
