const fs = require('fs');
let file = fs.readFileSync('subpage/our-galleries.html', 'utf8');

// The replacement should be purely inside the story-hero blocks
// We can use simple split/join logic since the structure is identical

let parts = file.split('id="wedding"');
let weddingBlock = parts[1].split('id="pre-wedding"');
weddingBlock[0] = weddingBlock[0].replace('data-background="../img/blog/s02.jpg"', 'data-background="../img/blog/hero_wedding.png"');

let preweddingBlock = weddingBlock[1].split('id="engagement"');
preweddingBlock[0] = preweddingBlock[0].replace('data-background="../img/blog/s05.jpg"', 'data-background="../img/blog/hero_prewedding.png"');

let engagementBlock = preweddingBlock[1].split('id="maternity"');
engagementBlock[0] = engagementBlock[0].replace('data-background="../img/blog/s04.jpg"', 'data-background="../img/blog/hero_engagement.png"');

let maternityBlock = engagementBlock[1].split('id="events"');
maternityBlock[0] = maternityBlock[0].replace('data-background="../img/blog/s6.jpg"', 'data-background="../img/blog/hero_maternity.png"');

let eventsBlock = maternityBlock[1].replace('data-background="../img/blog/s9.jpg"', 'data-background="../img/blog/hero_family.png"');

// Reassemble
file = parts[0] + 
       'id="wedding"' + weddingBlock[0] + 
       'id="pre-wedding"' + preweddingBlock[0] +
       'id="engagement"' + engagementBlock[0] +
       'id="maternity"' + maternityBlock[0] +
       'id="events"' + eventsBlock;

fs.writeFileSync('subpage/our-galleries.html', file);
console.log("Successfully swapped hero images to AI generated assets!");
