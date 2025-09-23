# 🎯 Cover Letter Generator - Student Career Success Platform

[![Deploy to GitHub Pages](https://github.com/AkshatNaruka/Cover-Letter-Generator/actions/workflows/static.yml/badge.svg)](https://github.com/AkshatNaruka/Cover-Letter-Generator/actions/workflows/static.yml)

**The ultimate free tool for students and professionals to create winning cover letters!** Generate professional cover letters that get you hired using our AI-powered templates, career resources, and expert guidance. **Perfect for students, new graduates, and career changers!**

🌐 **Live Demo:** [https://akshatnaruka.github.io/Cover-Letter-Generator/](https://akshatnaruka.github.io/Cover-Letter-Generator/)

## 🚀 Ready for Scale & Custom Domains

This project is **production-ready** and designed for easy deployment on custom domains:

- **🌍 Domain Agnostic**: Automatically adapts to any domain without code changes
- **⚡ Multiple Hosting Options**: GitHub Pages, Netlify, Vercel, or traditional hosting
- **🔧 Zero Configuration**: Dynamic URL detection and SEO optimization
- **📈 SEO Optimized**: Proper meta tags, sitemaps, and structured data for any domain
- **🛡️ Enterprise Ready**: Clean codebase, performance optimized, mobile responsive

**Perfect for**: Personal portfolios, business websites, career services, educational institutions, or SaaS integration.

## 🚀 Why Students Love Our Generator

✅ **6 Professional Templates** - Industry-specific designs  
✅ **100% Free Forever** - No hidden costs or subscriptions  
✅ **No Signup Required** - Start creating immediately  
✅ **Student-Focused Resources** - Career guides, job search tips, interview prep  
✅ **Resume Auto-Fill** - Upload your resume for instant data extraction  
✅ **Mobile-Friendly** - Create cover letters on any device  
✅ **Privacy First** - Your data stays on your device  

## ✨ Features

### 📝 **Multiple Templates (6 Available)**
Choose from 6 different cover letter styles designed for specific industries:
- **Professional**: Traditional, formal business letter format (Corporate, Finance, Legal, Consulting)
- **Creative**: Modern, enthusiastic style with emojis (Startups, Design, Marketing, Tech)
- **Entry Level**: Perfect for new graduates and early career professionals
- **Modern**: Contemporary format for tech and digital roles (Tech, Digital Marketing, Project Management)
- **Academic**: Scholarly tone for research and education (Research, Education, Non-profit)
- **Sales & Marketing**: Results-driven format for sales professionals (Sales, Business Development)

### 🎓 **NEW: Student Career Resources**
- **📚 Curated Learning Resources**: Links to resume guides, interview prep, and career development courses
- **💼 Job Search Strategies**: Expert tips on networking, job boards, and application strategies  
- **🎯 Interview Preparation**: Mock interview resources and behavioral question guides
- **💡 Industry Insights**: Salary research, career paths, and industry-specific guidance
- **🚀 Pro Tips Section**: Expert advice on customizing applications and standing out to employers
- **🔗 Helpful Links**: Direct access to top job boards, career services, and professional development platforms

### 🔥 **Enhanced Features**
- **🔍 Template Preview**: See exactly how your template looks before generating
- **🌙 Dark Mode**: Toggle between light and dark themes with preference saving
- **💾 Auto-Save**: Your information is automatically saved locally for future use
- **📱 Mobile Optimized**: Enhanced responsive design for all devices
- **❓ FAQ Section**: Comprehensive help section with common questions
- **🎨 Modern UI**: Beautiful typography with Google Fonts and smooth animations
- **⚡ Lightning Fast**: Generate cover letters in under 60 seconds
- **🎯 Enhanced Landing Page**: Clear value proposition with success stats and benefits

### 🚀 **Core Functionality**
- **User-Friendly Interface**: Simple 3-step process to create your cover letter
- **Dynamic Content**: Automatically inserts your information into the selected template
- **Copy to Clipboard**: One-click copying of your generated cover letter
- **Form Validation**: Smart validation with helpful error messages
- **Performance Optimized**: Fast loading and Core Web Vitals monitoring

## 📊 SEO Optimized

This application is fully optimized for search engines with:
- Comprehensive meta tags and Open Graph data
- Structured data (JSON-LD) for rich snippets
- Social media optimization (Twitter Cards)
- robots.txt and sitemap.xml
- Semantic HTML structure
- Performance monitoring and optimization

## 🎯 How to Use

1. **🎨 Select a Template**: Choose from 6 professional templates with live preview
2. **📝 Fill in Your Information**: Complete the form with your personal details (auto-saved as you type)
3. **⚡ Generate & Copy**: Click "Generate Cover Letter" to create your personalized letter, then copy it to your clipboard
4. **🌙 Customize Experience**: Toggle dark mode and use template previews for the best experience

## 📋 Required Information

- **Personal Details**: Full Name, Email Address, Phone Number, Address
- **Job Information**: Company Name, Job Title/Role, Years of Experience
- **Skills**: Key Skills (comma separated - e.g., "JavaScript, React, Node.js")
- **Optional**: Hiring Manager Name (defaults to "Hiring Manager" if not provided)

## 🎨 Template Guide

| Template | Best For | Industries | Tone |
|----------|----------|------------|------|
| **Professional** | Corporate roles | Finance, Legal, Consulting | Formal, Traditional |
| **Creative** | Innovative companies | Startups, Design, Marketing | Modern, Enthusiastic |
| **Entry Level** | New graduates | Any industry | Professional, Eager |
| **Modern** | Tech roles | Technology, Digital Marketing | Contemporary, Strategic |
| **Academic** | Research positions | Education, Non-profit | Scholarly, Detailed |
| **Sales** | Sales roles | Sales, Business Development | Results-driven, Confident |

## Deployment

### Current GitHub Pages Deployment

This site is automatically deployed to GitHub Pages using GitHub Actions. The deployment workflow:

- **Triggers**: Runs on pushes to `main` branch, pull requests to `main`, and manual dispatch
- **Build Process**: Validates HTML, CSS, and JavaScript files exist and are accessible
- **Deployment**: Automatically deploys to GitHub Pages when changes are pushed to the main branch
- **PR Previews**: Builds and validates changes in pull requests without deploying

The site is currently available at: `https://akshatnaruka.github.io/Cover-Letter-Generator/`

### 🌐 Custom Domain Deployment

This website is fully prepared for deployment on custom domains. Choose from multiple hosting options:

#### Option 1: GitHub Pages with Custom Domain

1. **Add your domain to CNAME file**:
   ```bash
   echo "yourdomain.com" > CNAME
   ```

2. **Configure DNS with your domain provider**:
   - Add CNAME record: `@` → `username.github.io`
   - Or for subdomains: `www` → `username.github.io`

3. **Enable custom domain in GitHub Pages**:
   - Go to repository Settings → Pages
   - Enter your custom domain
   - Enable "Enforce HTTPS"

4. **Update sitemap for SEO**:
   ```bash
   node generate-sitemap.js https://yourdomain.com
   ```

#### Option 2: Netlify Deployment

1. **Connect repository to Netlify**
2. **Build settings**:
   - Build command: `(leave empty - static site)`
   - Publish directory: `./`
3. **Add custom domain in Netlify dashboard**
4. **Update DNS**: Point your domain to Netlify

#### Option 3: Vercel Deployment

1. **Import GitHub repository to Vercel**
2. **No build configuration needed**
3. **Add custom domain in Vercel dashboard**
4. **Configure DNS settings**

#### Option 4: Traditional Web Hosting

1. **Upload all files to your web server**
2. **Configure web server (Apache/Nginx)**
3. **Set up SSL certificate**
4. **Update sitemap**:
   ```bash
   node generate-sitemap.js https://yourdomain.com
   ```

### 🔧 Domain Configuration Features

- **Dynamic URL Detection**: Meta tags automatically update based on current domain
- **SEO Optimized**: Canonical URLs, Open Graph, and Twitter Cards work with any domain  
- **Sitemap Generator**: Use `generate-sitemap.js` to create domain-specific sitemaps
- **Multiple Format Support**: Works with or without www, subdomains, and custom paths

### Manual Deployment

You can manually trigger a GitHub Pages deployment from the Actions tab in the repository.

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

## 📄 Templates Overview

### 👔 Professional Template
- **Format**: Formal business letter structure
- **Tone**: Traditional and professional language
- **Best for**: Corporate environments, traditional industries
- **Industries**: Finance, Legal, Consulting, Government
- **Features**: Standard cover letter elements with formal addressing

### 🎨 Creative Template  
- **Format**: Modern layout with emojis and visual elements
- **Tone**: Enthusiastic and personality-driven
- **Best for**: Startups and creative industries
- **Industries**: Design, Marketing, Advertising, Startups
- **Features**: Creative formatting, casual yet professional language

### 🎓 Entry Level Template
- **Format**: Professional structure emphasizing potential
- **Tone**: Eager and growth-oriented
- **Best for**: New graduates and career changers
- **Industries**: Any industry for entry-level positions
- **Features**: Focus on education, potential, and learning attitude

### ⚡ Modern Template
- **Format**: Contemporary business communication style
- **Tone**: Strategic and results-focused
- **Best for**: Tech companies and modern workplaces
- **Industries**: Technology, Digital Marketing, Project Management
- **Features**: Structured sections with clear value propositions

### 🎓 Academic Template
- **Format**: Scholarly and detailed approach
- **Tone**: Research-focused and methodical
- **Best for**: Academic and research positions
- **Industries**: Education, Research, Non-profit, Think Tanks
- **Features**: Emphasis on research experience and publications

### 📈 Sales & Marketing Template
- **Format**: Results-driven with metrics focus
- **Tone**: Confident and achievement-oriented
- **Best for**: Sales and business development roles
- **Industries**: Sales, Business Development, Customer Success
- **Features**: Performance highlights, competitive language, call-to-action

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
