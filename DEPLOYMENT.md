# 🚀 Deployment Guide - Cover Letter Generator

This guide explains how to deploy the Cover Letter Generator on various platforms with custom domains.

## ⚡ Quick Setup

For fastest deployment with a custom domain:

```bash
# Make setup script executable and run it
chmod +x setup-domain.sh
./setup-domain.sh yourdomain.com
```

## 🌐 Platform-Specific Deployment

### GitHub Pages (Recommended for Free Hosting)

#### With Custom Domain:
1. **Update CNAME file**:
   ```bash
   echo "yourdomain.com" > CNAME
   ```

2. **Generate sitemap**:
   ```bash
   node generate-sitemap.js https://yourdomain.com
   ```

3. **Commit changes**:
   ```bash
   git add CNAME sitemap.xml
   git commit -m "Add custom domain configuration"
   git push
   ```

4. **Configure GitHub Pages**:
   - Go to Repository Settings → Pages
   - Source: Deploy from a branch → main
   - Custom domain: `yourdomain.com`
   - ✅ Enforce HTTPS

5. **DNS Configuration**:
   ```
   Type: CNAME
   Name: @ (or www)
   Value: username.github.io
   ```

#### Without Custom Domain:
- No changes needed
- Site automatically deploys to `username.github.io/repository-name`

### Netlify

1. **Connect Repository**:
   - Sign up at netlify.com
   - Connect your GitHub repository

2. **Build Settings**:
   ```
   Build command: (leave empty)
   Publish directory: ./
   ```

3. **Deploy**:
   - Site deploys automatically on every push

4. **Custom Domain** (optional):
   - Domain settings → Add custom domain
   - Follow Netlify's DNS instructions

### Vercel

1. **Import Project**:
   - Sign up at vercel.com
   - Import from GitHub

2. **No Build Configuration Needed**:
   - Static site deploys automatically

3. **Custom Domain** (optional):
   - Project settings → Domains
   - Add your custom domain

### Traditional Web Hosting

1. **Upload Files**:
   - Upload all files to your web server's public directory
   - Maintain file structure

2. **Web Server Configuration**:
   
   **Apache (.htaccess)**:
   ```apache
   # Enable compression
   <IfModule mod_deflate.c>
       AddOutputFilterByType DEFLATE text/plain
       AddOutputFilterByType DEFLATE text/html
       AddOutputFilterByType DEFLATE text/css
       AddOutputFilterByType DEFLATE application/javascript
   </IfModule>
   
   # Cache static assets
   <IfModule mod_expires.c>
       ExpiresActive on
       ExpiresByType text/css "access plus 1 month"
       ExpiresByType application/javascript "access plus 1 month"
       ExpiresByType image/png "access plus 1 month"
   </IfModule>
   ```

   **Nginx**:
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com;
       root /path/to/cover-letter-generator;
       index index.html;
   
       location / {
           try_files $uri $uri/ =404;
       }
   
       # Cache static assets
       location ~* \.(css|js|png|jpg|jpeg|gif|ico|svg)$ {
           expires 1M;
           add_header Cache-Control "public, immutable";
       }
   }
   ```

3. **SSL Certificate**:
   - Use Let's Encrypt for free SSL
   - Or configure your hosting provider's SSL

4. **Update Domain References**:
   ```bash
   node generate-sitemap.js https://yourdomain.com
   ```

## 🔧 Configuration Files

### CNAME
- For GitHub Pages custom domains
- Contains only your domain name: `yourdomain.com`

### sitemap.xml
- Generated automatically by `generate-sitemap.js`
- Updates based on your domain

### deploy-config.json
- Contains deployment configurations for different platforms
- Reference for DNS settings and deployment steps

## 🚀 Advanced Features

### Environment-Based Configuration

The site automatically detects the current domain and updates:
- Canonical URLs
- Open Graph meta tags
- Twitter Cards
- Structured data (JSON-LD)

No manual configuration needed!

### Performance Optimization

The site includes:
- ✅ Minified CSS and optimized JavaScript
- ✅ Compressed images and assets
- ✅ DNS prefetching for external resources
- ✅ Lazy loading where appropriate
- ✅ Mobile-first responsive design

### SEO Features

- **Dynamic URLs**: Meta tags update automatically
- **Structured Data**: Rich snippets for search engines
- **Sitemap**: XML sitemap for better indexing
- **robots.txt**: Proper crawler directives
- **Performance**: Fast loading times

## 🛠️ Troubleshooting

### Common Issues:

1. **Domain not working after setup**:
   - Check DNS propagation (can take up to 48 hours)
   - Verify CNAME record is correct
   - Ensure HTTPS is enabled

2. **GitHub Pages showing 404**:
   - Check CNAME file is in repository root
   - Verify custom domain in GitHub Pages settings
   - Ensure repository is public or you have GitHub Pro

3. **SEO meta tags not updating**:
   - Check browser developer tools for JavaScript errors
   - Ensure the dynamic URL script is loading
   - Test on different domains/ports

### Testing Locally:

```bash
# Test with Python
python -m http.server 8000

# Test with Node.js
npx http-server

# Test with PHP
php -S localhost:8000
```

## 📞 Support

For deployment issues:
1. Check this guide first
2. Review the deploy-config.json file
3. Test locally before deploying
4. Check platform-specific documentation

The Cover Letter Generator is designed to work seamlessly across all major hosting platforms with minimal configuration required.