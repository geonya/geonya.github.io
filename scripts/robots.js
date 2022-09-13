// robots.js
const fs = require('fs')

const generatedSitemap = `
# *
User-agent: *
Disallow: /404

# Host
Host: https://geonya.github.io

# Sitemap
Sitemap : https://geonya.github.io/sitemap.xml
`

fs.writeFileSync('../public/robots.txt', generatedSitemap, 'utf8')
