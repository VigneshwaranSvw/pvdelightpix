const fs = require('fs');
let file = fs.readFileSync('subpage/featured_stories.html', 'utf8');

file = file.replace(/href="couple-single_new\.html#"/g, 'href="couple-single_new.html#first-birthday"');

fs.writeFileSync('subpage/featured_stories.html', file);
console.log('Fixed undefined anchors');
