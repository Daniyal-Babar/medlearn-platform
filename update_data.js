const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'src/lib/data.ts');
let content = fs.readFileSync(dataPath, 'utf-8');

// Replace type definitions
content = content.replace(/accent: string; \/\/ tailwind gradient classes for the cover/g, 'image: string; // image url for the cover');

// Replace accent properties with image properties
content = content.replace(/accent: ".*",/g, 'image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?q=80&w=2071&auto=format&fit=crop",');

fs.writeFileSync(dataPath, content);
console.log('Done replacing accents with images in data.ts');
