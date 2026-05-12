const fs = require('fs'); 
const filePath = 'c:\\Users\\conne\\OneDrive\\Desktop\\finask\\data\\services.js'; 
let content = fs.readFileSync(filePath, 'utf8'); 

const ALL_LAYOUTS = [
  'original', 
  'horizontal-ribbon', 
  'floating-pills', 
  'bottom-sticky-banner', 
  'bottom-sticky-blue', 
  'scroll-popup-modal'
]; 

let i = 0; 
// Check if uspLayout already exists to avoid adding it twice
if (!content.includes('uspLayout:')) {
  content = content.replace(/slug:\s*"(.*?)",/g, (match, p1) => { 
    const layout = ALL_LAYOUTS[i % ALL_LAYOUTS.length]; 
    i++; 
    return `slug: "${p1}",\n    uspLayout: "${layout}",`; 
  }); 

  fs.writeFileSync(filePath, content); 
  console.log('Successfully updated services.js with uspLayout fields!');
} else {
  console.log('uspLayout already exists in the file!');
}
