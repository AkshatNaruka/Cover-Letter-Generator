/**
 * Dynamic Sitemap Generator
 * This script can be run to generate a sitemap.xml file for any domain
 * Usage: node generate-sitemap.js [domain]
 * Example: node generate-sitemap.js https://yourdomain.com
 */

const fs = require('fs');
const path = require('path');

// Get domain from command line argument or default to current setup
const domain = process.argv[2] || 'REPLACE_WITH_DOMAIN';

// Generate current timestamp
const currentDate = new Date().toISOString();

const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>${domain}</loc>
        <lastmod>${currentDate}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>1.0</priority>
    </url>
</urlset>`;

// Write the sitemap file
fs.writeFileSync(path.join(__dirname, 'sitemap.xml'), sitemapContent);

console.log(`Sitemap generated for domain: ${domain}`);
console.log('File saved as: sitemap.xml');