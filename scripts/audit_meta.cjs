const fs = require('fs');
const path = require('path');

function getHtmlFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(getHtmlFiles(file));
    } else if (file.endsWith('.html')) {
      results.push(file);
    }
  });
  return results;
}

const files = getHtmlFiles('./dist');
console.log('Total HTML files:', files.length);

let alertCount = 0;
files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const match = content.match(/<meta name="description" content="([^"]+)"/);
  if (match) {
    const desc = match[1];
    const len = desc.length;
    const rel = path.relative('./dist', f);
    if (len > 160 || len < 120) {
      alertCount++;
      console.log(`[ALERT] (${len} chars) ${rel}: "${desc}"`);
    } else {
      console.log(`[OK] (${len} chars) ${rel}`);
    }
  }
});
console.log(`\nAudit complete: ${alertCount} alerts found.`);
