// robots.js
const fs = require('fs')

const generatedSitemap = `
# *
User-agent: *
Disallow: /404

# *
User-agent: *
Allow: /

# Host
Host: https://geonya.github.io
`

fs.writeFileSync('../public/robots.txt', generatedSitemap, 'utf8')
