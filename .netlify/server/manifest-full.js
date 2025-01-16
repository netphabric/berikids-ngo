export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon_io/android-chrome-192x192.png","favicon_io/android-chrome-512x512.png","favicon_io/apple-touch-icon.png","favicon_io/favicon-16x16.png","favicon_io/favicon-32x32.png","favicon_io/favicon.ico","favicon_io/site.webmanifest","images/Hs1-img.webp","images/about-hero.webp","images/as1.webp","images/as2.webp","images/heroImg.webp","images/project-hero.webp","images/project-morale.webp","images/rehab-project.webp","images/research-project.webp","images/tech-project.webp","images/testimony-dp.webp","images/vocation-hero.webp","images/water-project.webp","logo.png","opengraph.png"]),
	mimeTypes: {".png":"image/png",".webmanifest":"application/manifest+json",".webp":"image/webp"},
	_: {
		client: {"start":"_app/immutable/entry/start.DHK7-ogt.js","app":"_app/immutable/entry/app.B-UnGbAE.js","imports":["_app/immutable/entry/start.DHK7-ogt.js","_app/immutable/chunks/entry.zz-oZetd.js","_app/immutable/chunks/scheduler.DVlspfql.js","_app/immutable/chunks/index.DVZCJSz9.js","_app/immutable/entry/app.B-UnGbAE.js","_app/immutable/chunks/scheduler.DVlspfql.js","_app/immutable/chunks/index.DmM_5MB_.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/api/contact",
				pattern: /^\/api\/contact\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/contact/_server.ts.js'))
			},
			{
				id: "/contact",
				pattern: /^\/contact\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/projects",
				pattern: /^\/projects\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/vocation",
				pattern: /^\/vocation\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
