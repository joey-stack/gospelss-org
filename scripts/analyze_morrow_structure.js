const fs = require('fs');
const index = JSON.parse(fs.readFileSync('scripts/morrow_search_index.json', 'utf8'));

console.log('=== HOMEPAGE (/) ===');
const home = index['/'];
console.log('Title:', home.title);
console.log('Description:', home.description);
console.log('H1:', home.h1);
console.log('H2:', home.h2);
console.log('H3:', home.h3);
console.log('All paragraphs/text blocks:');
console.log(home.p.join('\n - '));

console.log('\n=== VISIT (/visit) ===');
const visit = index['/visit'];
console.log('H1:', visit.h1);
console.log('H2:', visit.h2);
console.log('P:', visit.p.slice(0, 10).join('\n - '));

console.log('\n=== EVENTS (/events) ===');
const events = index['/events'];
console.log('H1:', events.h1);
console.log('H2:', events.h2);
console.log('P:', events.p.slice(0, 15).join('\n - '));
