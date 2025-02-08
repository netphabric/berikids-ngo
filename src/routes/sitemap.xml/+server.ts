import { get } from "svelte/store"
import { homeData } from "$lib/stores/pages/home"
import { aboutData } from "$lib/stores/pages/about"
import { projectsData } from "$lib/stores/pages/projects"
import { vocationsData } from "$lib/stores/pages/vocations"
import { PUBLIC_BASE_URL } from "$env/static/public"

const siteUrl = PUBLIC_BASE_URL

const extractData = <T>(data: T) => {
	if (!data) return { title: "", description: "" }

	const pageData = Array.isArray(data) ? data[0] : data

	return {
		title: pageData?.props?.contentTitle || "",
		description: pageData?.props?.contentDescription || ""
	}
}

const pages = [
	{ path: "/", data: extractData(get(homeData)) },
	{ path: "/about", data: extractData(get(aboutData)) },
	{ path: "/projects", data: extractData(get(projectsData)) },
	{ path: "/vocations", data: extractData(get(vocationsData)) }
]

const generateSitemapXML = () => {
	return `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${pages
			.map(
				({ path, data }) => `
      <url>
        <loc>${siteUrl}${path}</loc>
        <title>${data.title}</title>
        <description>${data.description}</description>
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
