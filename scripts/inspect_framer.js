const fs = require('fs');
const html = fs.readFileSync('C:/Users/user/.gemini/antigravity-ide/brain/f6a52290-2579-4553-bc04-88c8878bdf58/.system_generated/steps/1425/content.md', 'utf8');

// Look for searchIndex or content
const searchIndexMatch = html.match(/https:\/\/framerusercontent\.com\/sites\/[^"'\s]+\.json/g);
console.log('Search index URLs:', searchIndexMatch);

// Look for chunk urls
const chunkUrls = html.match(/https:\/\/framerusercontent\.com\/modules\/[^"'\s]+\.m?js/g) || [];
console.log('Chunk count:', chunkUrls.length);
console.log('Sample chunks:', [...new Set(chunkUrls)].slice(0, 10));
