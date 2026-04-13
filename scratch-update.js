const fs = require('fs');
let file = fs.readFileSync('subpage/featured_stories.html', 'utf8');

// The replacements to map in order of their appearance
const anchors = [
  '#priya-vivek', // Rooftop Engagement 
  '#ritika-yash', // Ritika & Yash
  '#ankita-vivan', // Ankita & Vivan
  '#priya-vivek', // Lakeside
  '#ankita-vivan', // Temple Town
  '#priya-vivek', // Hillside
  '#priya-vivek', // Engagement
  '#ritika-yash', // Wedding
  '#ankita-vivan', // Wedding
  '#maternity-studio', // Studio Glow
  '#maternity-studio', // Golden hour
  '#first-birthday', // Baby Indoor
  '#first-birthday', // Birthday
  '#first-birthday', // Family Table
  '#first-birthday'  // Family Table
];

let count = 0;
file = file.replace(/href="couple-single_new\.html"/g, (match) => {
  const anchor = anchors[count] || '#';
  count++;
  return `href="couple-single_new.html${anchor}"`;
});

fs.writeFileSync('subpage/featured_stories.html', file);
console.log('Update complete. Replaced ' + count + ' items.');
