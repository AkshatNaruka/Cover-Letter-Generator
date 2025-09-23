#!/bin/bash

# Cover Letter Generator - Custom Domain Setup Script
# Usage: ./setup-domain.sh yourdomain.com

if [ -z "$1" ]; then
    echo "Usage: ./setup-domain.sh yourdomain.com"
    echo "Example: ./setup-domain.sh coverlettergen.com"
    exit 1
fi

DOMAIN=$1

echo "🚀 Setting up Cover Letter Generator for custom domain: $DOMAIN"

# Update CNAME file for GitHub Pages
echo "$DOMAIN" > CNAME
echo "✅ Updated CNAME file"

# Generate sitemap with custom domain
if command -v node &> /dev/null; then
    node generate-sitemap.js "https://$DOMAIN"
    echo "✅ Generated sitemap.xml for $DOMAIN"
else
    echo "⚠️  Node.js not found. Please run: node generate-sitemap.js https://$DOMAIN"
fi

echo ""
echo "🎉 Setup complete! Next steps:"
echo ""
echo "For GitHub Pages:"
echo "1. Commit and push these changes to your repository"
echo "2. Go to repository Settings → Pages"
echo "3. Set custom domain to: $DOMAIN"
echo "4. Enable 'Enforce HTTPS'"
echo ""
echo "DNS Configuration:"
echo "Add CNAME record with your domain provider:"
echo "Name: @ (or www)"
echo "Value: username.github.io"
echo ""
echo "For other hosting platforms (Netlify, Vercel, etc.):"
echo "1. Connect your repository to the platform"
echo "2. Set custom domain in platform dashboard"
echo "3. Follow platform-specific DNS instructions"
echo ""
echo "Your website will be accessible at: https://$DOMAIN"