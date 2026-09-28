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
console.log(`Found ${files.length} HTML files.`);

let schemaTotal = 0;
let errors = 0;
const typesFound = new Set();

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const regex = /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    schemaTotal++;
    try {
      const parsed = JSON.parse(match[1]);
      const items = Array.isArray(parsed) ? parsed : [parsed];
      items.forEach(item => {
        if (item['@type']) {
          if (Array.isArray(item['@type'])) {
            item['@type'].forEach(t => typesFound.add(t));
          } else {
            typesFound.add(item['@type']);
          }
        }
      });
    } catch (err) {
      console.error(`[JSON ERROR] in ${f}: ${err.message}`);
      errors++;
    }
  }
});

console.log(`Total JSON-LD blocks parsed: ${schemaTotal}`);
console.log(`Parse errors: ${errors}`);
console.log(`Schema Types active across site:`, Array.from(typesFound).sort());
