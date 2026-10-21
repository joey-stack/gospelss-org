const https = require('https');
const fs = require('fs');

const url = 'https://framerusercontent.com/sites/6p0zmsmDGFbQlJ5SGG7KXa/searchIndex-zLWsTNqZH1Ho.json';

https.get(url, (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => {
    try {
      const parsed = JSON.parse(data);
      console.log('Search Index Keys:', Object.keys(parsed));
      fs.writeFileSync('scripts/morrow_search_index.json', JSON.stringify(parsed, null, 2));
      console.log('Saved to scripts/morrow_search_index.json');
      if (Array.isArray(parsed)) {
        console.log('Indexed pages:', parsed.map(p => ({ title: p.title || p.heading, url: p.url, desc: p.description })));
      } else {
        console.log('Data sample:', JSON.stringify(parsed).slice(0, 1000));
      }
    } catch (e) {
      console.error('Parse error:', e.message);
      fs.writeFileSync('scripts/morrow_raw.txt', data);
    }
  });
}).on('error', (err) => {
  console.error('Fetch error:', err.message);
});
