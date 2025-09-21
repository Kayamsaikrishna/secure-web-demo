import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';
import { join } from 'path';

// Create a simple placeholder image as base64
const placeholderImage = 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==';

// Function to create a placeholder image
function createPlaceholderImage(filePath, color = '0066cc') {
  // Create a simple SVG placeholder
  const svgContent = `
  <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="100" fill="#${color}" />
    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="white" font-family="Arial" font-size="12">FA</text>
  </svg>
  `;
  
  writeFileSync(filePath, svgContent.trim());
  console.log(`Created placeholder image: ${filePath}`);
}

// Create assets directory if it doesn't exist
const assetsDir = join(__dirname, 'assets');
if (!existsSync(assetsDir)) {
  mkdirSync(assetsDir);
}

// Create placeholder images
createPlaceholderImage(join(assetsDir, 'icon.png'), '0066cc');
createPlaceholderImage(join(assetsDir, 'splash.png'), '0066cc');
createPlaceholderImage(join(assetsDir, 'adaptive-icon.png'), '0066cc');
createPlaceholderImage(join(assetsDir, 'favicon.png'), '0066cc');

console.log('All placeholder assets created successfully!');