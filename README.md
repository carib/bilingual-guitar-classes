# Santa Fe Guitar Online Website

A modern, responsive website for Santa Fe Guitar Online - Bilingual Guitar Instruction for Elementary Students.

## Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Multi-Page Structure**: 
  - Homepage with program overview
  - Dedicated program page with details
  - About page with bilingual content
  - Digital tuner page with instructions
  - Contact page with form and FAQ
- **Interactive Elements**: 
  - Mobile-friendly navigation
  - Smooth scrolling
  - Contact form with validation
  - Hover effects and animations
  - Bilingual content support
- **Performance Optimized**: 
  - Debounced scroll events
  - Lazy loading support
  - Optimized CSS and JavaScript
- **Accessibility**: 
  - Keyboard navigation support
  - Semantic HTML structure
  - Screen reader friendly

## File Structure

```
gtr-stepbridge-site/
├── index.html          # Homepage with program overview
├── program.html        # Detailed program information
├── about.html          # About page with bilingual content
├── tuner.html          # Digital tuner with instructions
├── contact.html        # Contact form and information
├── css/
│   └── styles.css      # Main stylesheet
├── js/
│   └── scripts.js      # JavaScript functionality
├── build.sh            # Build script for deployment
└── README.md           # This file
```

## Setup Instructions

1. **Local Development**:
   - Simply open `index.html` in your web browser
   - Or use a local server for development:
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Node.js (if you have http-server installed)
     npx http-server
     
     # Using PHP
     php -S localhost:8000
     ```

2. **Deployment**:
   - Upload all files to your web server
   - Ensure the file structure is maintained
   - The site is static and doesn't require any server-side processing

## Program Information

### Target Audience
- Elementary school students, grades 3 and up
- 2nd grade students with siblings in the program
- Parents welcome to attend and learn with their children

### Class Structure
- One-hour classes twice per week
- Bilingual instruction (English-Spanish)
- Tablature-based learning method
- 10-15 minutes daily practice recommended

### Performance Opportunities
- Weekly individual and group performances in class
- Two public concerts per semester
- Family performance encouragement

## Customization

### Colors
The main color scheme can be modified in `css/styles.css`:
- Primary: `#3498db` (Blue)
- Secondary: `#2c3e50` (Dark Blue)
- Accent: `#667eea` to `#764ba2` (Gradient)

### Content
- The content reflects the actual Santa Fe Guitar Online program
- Bilingual sections are clearly marked
- Contact form options match program inquiries

### Styling
- All styles are in `css/styles.css`
- The design uses CSS Grid and Flexbox for layout
- Animations and transitions are CSS-based for performance

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Features

- **Optimized Images**: Placeholder system ready for optimized images
- **Minimal Dependencies**: Only uses Font Awesome for icons and Google Fonts
- **Efficient JavaScript**: Debounced events and optimized selectors
- **CSS Optimization**: Minimal CSS with efficient selectors

## Contact Form

The contact form includes:
- Client-side validation
- Email format checking
- Success/error notifications
- Form reset after submission

Note: The form currently shows a success message but doesn't actually send data. To make it functional, you'll need to:
1. Set up a server-side script to handle form submissions
2. Update the JavaScript to send data to your server
3. Configure email delivery (e.g., using a service like Formspree, Netlify Forms, or custom backend)

## License

This website template is created for Santa Fe Guitar Online. Feel free to modify and use for your own projects.

## Support

For questions or issues, please refer to the code comments or contact the development team. 