import { PUBLIC_BASE_URL } from "$env/static/public"

const siteUrl = PUBLIC_BASE_URL
const pages = [
	{ path: "/", priority: 1.0 },
	{ path: "/about", priority: 0.8 },
	{ path: "/projects", priority: 0.9 },
	{ path: "/vocation", priority: 0.7 },
	{ path: "/donate", priority: 0.6 },
	{ path: "/contact", priority: 0.5 },
	{ path: "/sitemap", priority: 0.4 }
]

const generateSitemapXML = (): string => {
	const lastmod = new Date().toISOString()

	return `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${pages
			.map(
				({ path, priority }) => `
      <url>
        <loc>${siteUrl}${path}</loc>
        <lastmod>${lastmod}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>${priority}</priority>
      </url>`
			)
			.join("\n")}
  </urlset>`
}

export function GET() {
	return new Response(generateSitemapXML(), {
		headers: { "Content-Type": "application/xml" }
	})
}
