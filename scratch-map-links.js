const fs = require('fs');
let file = fs.readFileSync('subpage/featured_stories.html', 'utf8');

// We split by <section> to know which category we are actively inside.
let newFile = '';
let currentCategory = '';

const lines = file.split('\n');

for (let i = 0; i < lines.length; i++) {
    let line = lines[i];

    if (line.includes('id="wedding-segment"')) currentCategory = 'wedding';
    else if (line.includes('id="prewedding-segment"')) currentCategory = 'pre-wedding';
    else if (line.includes('id="engagement-segment"')) currentCategory = 'engagement';
    else if (line.includes('id="maternity-segment"')) currentCategory = 'maternity';
    else if (line.includes('id="events-family-segment"')) currentCategory = 'events';

    if (line.includes('our-galleries.html')) {
        // Find existing hash and replace it entirely with the currentCategory
        line = line.replace(/href="our-galleries\.html#[^"]*"/, `href="our-galleries.html#${currentCategory || 'wedding'}"`);
    }

    newFile += line + (i < lines.length - 1 ? '\n' : '');
}

fs.writeFileSync('subpage/featured_stories.html', newFile);
console.log('Successfully remapped all featured_stories links based on their parent sections.');
