const fs = require('fs')
const prettier = require('prettier')
const path = require('path')
const getDate = new Date().toISOString()
const GEONY_DOMAIN = 'https://geonya.github.io'

const formatted = (sitemap) => prettier.format(sitemap, { parser: 'html' })
;(async () => {
  const noteSlugs = fs.readdirSync(path.join('../data/notes'))
  const notes = noteSlugs.map((file) => {
    const slug = file.replace('.mdx', '')
    return {
      slug,
    }
  })
  const noteListSitemap = `
    ${notes
      .map((note) => {
        return `
          <url>
            <loc>${`${GEONY_DOMAIN}/notes/${note.slug}`}</loc>
            <lastmod>${getDate}</lastmod>
          </url>`
      })
      .join('')}
  `
  const generatedSitemap = `
	<?xml version="1.0" encoding="UTF-8"?>
  	<urlset
    xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"
  >
    ${noteListSitemap}
  </urlset>
`
  const formattedSitemap = formatted(generatedSitemap)

  fs.writeFileSync(
    '../public/sitemap/sitemap-notes.xml',
    formattedSitemap,
    'utf8',
  )
})()
