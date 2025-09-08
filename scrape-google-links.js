const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const page = await browser.newPage();
  
  try {
    console.log('Loading page...');
    await page.goto('https://santafeguitaronline.com/videos', {
      waitUntil: 'networkidle0',
      timeout: 30000
    });
    
    // Wait a bit more for dynamic content to load
    await page.waitForFunction(() => document.readyState === 'complete');
    await new Promise(resolve => setTimeout(resolve, 5000));
    
    console.log('Extracting Google Drive links...');
    
    // Get all links that contain Google Drive or related services
    const googleLinks = await page.evaluate(() => {
      const links = Array.from(document.querySelectorAll('a[href*="drive.google.com"], a[href*="docs.google.com"], a[href*="forms.gle"], a[href*="sheets.google.com"], a[href*="slides.google.com"]'));
      return links.map(link => ({
        url: link.href,
        text: link.textContent.trim()
      }));
    });
    
    // Also search in the page content for any Google Drive URLs
    const pageContent = await page.content();
    const driveUrlRegex = /https?:\/\/(?:drive\.google\.com|docs\.google\.com|forms\.gle|sheets\.google\.com|slides\.google\.com)[^\s"'<>]+/gi;
    const matches = pageContent.match(driveUrlRegex) || [];
    
    console.log('=== GOOGLE DRIVE LINKS FOUND ===');
    
    if (googleLinks.length > 0) {
      console.log('\nLinks from anchor tags:');
      googleLinks.forEach((link, index) => {
        console.log(`${index + 1}. ${link.url}`);
        if (link.text) {
          console.log(`   Text: "${link.text}"`);
        }
      });
    }
    
    if (matches.length > 0) {
      console.log('\nURLs found in page content:');
      const uniqueMatches = [...new Set(matches)];
      uniqueMatches.forEach((url, index) => {
        console.log(`${index + 1}. ${url}`);
      });
    }
    
    if (googleLinks.length === 0 && matches.length === 0) {
      console.log('No Google Drive links found on this page.');
      console.log('\nPage title:', await page.title());
      
      // Let's see what content is actually loaded
      const textContent = await page.evaluate(() => {
        return document.body.innerText.substring(0, 500);
      });
      console.log('\nFirst 500 characters of page content:');
      console.log(textContent);
    }
    
  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    await browser.close();
  }
})();
