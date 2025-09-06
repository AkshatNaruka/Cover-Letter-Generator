# Cover Letter Generator

[![Deploy to GitHub Pages](https://github.com/AkshatNaruka/Cover-Letter-Generator/actions/workflows/static.yml/badge.svg)](https://github.com/AkshatNaruka/Cover-Letter-Generator/actions/workflows/static.yml)

Generate professional cover letters easily for your next job application using our pre-made templates.

## Features

- **Multiple Templates**: Choose from 3 different cover letter styles:
  - **Professional**: Traditional, formal business letter format
  - **Creative**: Modern, enthusiastic style with emojis and casual tone
  - **Entry Level**: Perfect for new graduates and early career professionals

- **User-Friendly Interface**: Simple 3-step process to create your cover letter
- **Dynamic Content**: Automatically inserts your information into the selected template
- **Copy to Clipboard**: One-click copying of your generated cover letter
- **Mobile Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Form Validation**: Ensures all required fields are completed before generation

## How to Use

1. **Select a Template**: Choose from Professional, Creative, or Entry Level templates
2. **Fill in Your Information**: Complete the form with your personal details, target company, and job information
3. **Generate & Copy**: Click "Generate Cover Letter" to create your personalized letter, then copy it to your clipboard

## Required Information

- Full Name
- Email Address
- Phone Number
- Address
- Company Name
- Job Title/Role
- Years of Experience
- Key Skills (comma separated)
- Hiring Manager Name (optional)

## Deployment

This site is automatically deployed to GitHub Pages using GitHub Actions. The deployment workflow:

- **Triggers**: Runs on pushes to `main` branch, pull requests to `main`, and manual dispatch
- **Build Process**: Validates HTML, CSS, and JavaScript files exist and are accessible
- **Deployment**: Automatically deploys to GitHub Pages when changes are pushed to the main branch
- **PR Previews**: Builds and validates changes in pull requests without deploying

The site is available at: `https://akshatnaruka.github.io/Cover-Letter-Generator/`

### Manual Deployment

You can manually trigger a deployment from the GitHub Actions tab in the repository.

## Getting Started

Simply open `index.html` in your web browser, or serve the files using a local web server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000` in your browser.

## File Structure

```
├── index.html      # Main HTML file with form and structure
├── styles.css      # CSS styling and responsive design
├── script.js       # JavaScript functionality and templates
└── README.md       # This file
```

## Templates Overview

### Professional Template
- Formal business letter format
- Traditional structure and language
- Suitable for corporate environments
- Includes all standard cover letter elements

### Creative Template  
- Modern, enthusiastic tone
- Uses emojis and casual language
- Perfect for startups and creative industries
- Emphasizes personality and passion

### Entry Level Template
- Tailored for new graduates and career starters
- Focuses on potential and learning attitude
- Acknowledges limited experience while highlighting strengths
- Professional yet approachable tone

## Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contributing

Feel free to contribute by:
- Adding new templates
- Improving the user interface
- Adding new features
- Fixing bugs

## License

This project is open source and available under the [MIT License](LICENSE). 
