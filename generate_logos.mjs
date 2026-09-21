import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const inputPath = 'C:/Users/H_N/.gemini/antigravity/brain/abe9e50e-f267-4153-a8c0-7db56ed7e146/.user_uploaded/media_1789941881180.png';
const outDir = 'd:/cairoairporttransfers.com/public/images/logo';

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

async function processLogos() {
  const { data, info } = await sharp(inputPath).raw().toBuffer({ resolveWithObject: true });
  const width = info.width;
  const height = info.height;

  // Colors:
  const NAVY = [20, 18, 56];       // #141238
  const AMBER = [245, 158, 11];     // #f59e0b
  const WHITE = [255, 255, 255];   // #ffffff

  function createVariant(colorFunc) {
    const out = Buffer.alloc(width * height * 4);
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const inIdx = (y * width + x) * info.channels;
        const outIdx = (y * width + x) * 4;

        const r = data[inIdx];
        const g = data[inIdx + 1];
        const b = data[inIdx + 2];
        const lum = 0.299 * r + 0.587 * g + 0.114 * b;

        // Smooth anti-aliased transparency curve
        let alpha = 0;
        if (lum < 240) {
          if (lum <= 55) {
            alpha = 255;
          } else {
            alpha = Math.round(255 * Math.pow((240 - lum) / (240 - 55), 1.25));
          }
        }

        if (alpha > 0) {
          const col = colorFunc(x, y);
          out[outIdx] = col[0];
          out[outIdx + 1] = col[1];
          out[outIdx + 2] = col[2];
          out[outIdx + 3] = alpha;
        } else {
          out[outIdx] = 0;
          out[outIdx + 1] = 0;
          out[outIdx + 2] = 0;
          out[outIdx + 3] = 0;
        }
      }
    }
    return out;
  }

  // 1. Variant A: Original Navy with Transparent background
  console.log('Generating logo-navy.png...');
  const navyBuf = createVariant(() => NAVY);
  await sharp(navyBuf, { raw: { width, height, channels: 4 } })
    .trim()
    .png()
    .toFile(path.join(outDir, 'logo-navy.png'));

  // 2. Variant B: Brand Colors (Amber airplane + Navy text)
  console.log('Generating logo-brand.png...');
  const brandBuf = createVariant((x, y) => {
    if (y <= 615 || y >= 705) {
      return AMBER;
    }
    return NAVY;
  });
  await sharp(brandBuf, { raw: { width, height, channels: 4 } })
    .trim()
    .png()
    .toFile(path.join(outDir, 'logo-brand.png'));

  // 3. Variant C: Pure White with Transparent background (for dark footers)
  console.log('Generating logo-white.png...');
  const whiteBuf = createVariant(() => WHITE);
  await sharp(whiteBuf, { raw: { width, height, channels: 4 } })
    .trim()
    .png()
    .toFile(path.join(outDir, 'logo-white.png'));

  // 4. Variant D: White + Gold (Gold icon/transfers + White text) for Dark backgrounds
  console.log('Generating logo-white-gold.png...');
  const whiteGoldBuf = createVariant((x, y) => {
    if (y <= 615 || y >= 705) {
      return AMBER;
    }
    return WHITE;
  });
  await sharp(whiteGoldBuf, { raw: { width, height, channels: 4 } })
    .trim()
    .png()
    .toFile(path.join(outDir, 'logo-white-gold.png'));

  // 5. Variant E: Icon Only (Amber)
  console.log('Generating logo-icon.png...');
  const iconOnlyBuf = createVariant((x, y) => {
    if (y > 615) return [0, 0, 0]; // ignore text
    return AMBER;
  });
  // Mask out text pixels
  for (let y = 615; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * 4;
      iconOnlyBuf[idx + 3] = 0;
    }
  }
  await sharp(iconOnlyBuf, { raw: { width, height, channels: 4 } })
    .trim()
    .png()
    .toFile(path.join(outDir, 'logo-icon.png'));

  // Favicon PNG
  await sharp(path.join(outDir, 'logo-icon.png'))
    .resize(64, 64, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile('d:/cairoairporttransfers.com/public/favicon.png');

  // 6. Variant F: Horizontal Lockup (Icon on Left + Text on Right)
  // Extract Text block
  const textOnlyNavyBuf = createVariant((x, y) => {
    if (y < 640) return [0, 0, 0];
    if (y >= 705) return AMBER;
    return NAVY;
  });
  for (let y = 0; y < 640; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * 4;
      textOnlyNavyBuf[idx + 3] = 0;
    }
  }
  const textImg = await sharp(textOnlyNavyBuf, { raw: { width, height, channels: 4 } })
    .trim()
    .png()
    .toBuffer();

  const iconImg = await sharp(path.join(outDir, 'logo-icon.png'))
    .resize({ height: 90 })
    .toBuffer();

  const textResized = await sharp(textImg)
    .resize({ height: 60 })
    .toBuffer();

  const iconMeta = await sharp(iconImg).metadata();
  const textMeta = await sharp(textResized).metadata();

  const hWidth = iconMeta.width + 24 + textMeta.width + 20;
  const hHeight = 100;

  console.log('Generating logo-horizontal.png...');
  await sharp({
    create: {
      width: hWidth,
      height: hHeight,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    }
  })
  .composite([
    { input: iconImg, left: 10, top: Math.round((hHeight - iconMeta.height) / 2) },
    { input: textResized, left: 10 + iconMeta.width + 20, top: Math.round((hHeight - textMeta.height) / 2) }
  ])
  .trim()
  .png()
  .toFile(path.join(outDir, 'logo-horizontal.png'));

  // Horizontal for dark footer (White + Gold)
  const textOnlyWhiteBuf = createVariant((x, y) => {
    if (y < 640) return [0, 0, 0];
    if (y >= 705) return AMBER;
    return WHITE;
  });
  for (let y = 0; y < 640; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * 4;
      textOnlyWhiteBuf[idx + 3] = 0;
    }
  }
  const textWhiteImg = await sharp(textOnlyWhiteBuf, { raw: { width, height, channels: 4 } })
    .trim()
    .resize({ height: 60 })
    .png()
    .toBuffer();

  const textWhiteMeta = await sharp(textWhiteImg).metadata();
  const hWhiteWidth = iconMeta.width + 24 + textWhiteMeta.width + 20;

  console.log('Generating logo-horizontal-white.png...');
  await sharp({
    create: {
      width: hWhiteWidth,
      height: hHeight,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    }
  })
  .composite([
    { input: iconImg, left: 10, top: Math.round((hHeight - iconMeta.height) / 2) },
    { input: textWhiteImg, left: 10 + iconMeta.width + 20, top: Math.round((hHeight - textWhiteMeta.height) / 2) }
  ])
  .trim()
  .png()
  .toFile(path.join(outDir, 'logo-horizontal-white.png'));

  console.log('ALL LOGOS GENERATED SUCCESSFULLY!');
}

processLogos().catch(console.error);
