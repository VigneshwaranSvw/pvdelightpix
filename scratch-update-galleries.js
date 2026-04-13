const fs = require('fs');
let file = fs.readFileSync('subpage/featured_stories.html', 'utf8');

file = file.replace(/couple-single_new\.html/g, 'our-galleries.html');

fs.writeFileSync('subpage/featured_stories.html', file);
console.log('Replaced references in featured_stories.html');
