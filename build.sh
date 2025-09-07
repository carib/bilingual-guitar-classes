#!/bin/bash

# GTR Stepbridge Website Build Script
# This script prepares the website for deployment

echo "🚀 Building GTR Stepbridge Website..."

# Create build directory
BUILD_DIR="build"
if [ -d "$BUILD_DIR" ]; then
    rm -rf "$BUILD_DIR"
fi
mkdir -p "$BUILD_DIR"

# Copy files to build directory
echo "📁 Copying files..."
cp -r css js index.html README.md "$BUILD_DIR/"

# Create assets directory for future images
mkdir -p "$BUILD_DIR/assets/images"

# Create a simple deployment info file
cat > "$BUILD_DIR/DEPLOYMENT.md" << EOF
# Deployment Information

This directory contains the built version of the GTR Stepbridge website.

## Files Included:
- index.html - Main website file
- css/styles.css - All styles
- js/scripts.js - All JavaScript functionality
- assets/images/ - Directory for images (currently empty)

## Deployment Instructions:
1. Upload all files to your web server
2. Ensure the file structure is maintained
3. The website is static and doesn't require server-side processing

## Notes:
- The contact form currently shows success messages but doesn't send data
- To make the form functional, set up server-side processing
- Consider adding real images to the assets/images/ directory
EOF

echo "✅ Build complete! Files are ready in the '$BUILD_DIR' directory."
echo "📋 Next steps:"
echo "   1. Review the files in the build directory"
echo "   2. Upload to your web server"
echo "   3. Test the website functionality"
echo "   4. Add real images and update content as needed"

# Optional: Open the build directory in Finder (macOS)
if [[ "$OSTYPE" == "darwin"* ]]; then
    echo "🔍 Opening build directory..."
    open "$BUILD_DIR"
fi 