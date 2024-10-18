export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","logo.png","video.mp4"]),
	mimeTypes: {".png":"image/png",".mp4":"video/mp4"},
	_: {
		client: {"start":"_app/immutable/entry/start.BAGdE9Qn.js","app":"_app/immutable/entry/app.CQ6Mvo55.js","imports":["_app/immutable/entry/start.BAGdE9Qn.js","_app/immutable/chunks/entry.DYsEiu9u.js","_app/immutable/chunks/scheduler.BCRSdwSa.js","_app/immutable/entry/app.CQ6Mvo55.js","_app/immutable/chunks/scheduler.BCRSdwSa.js","_app/immutable/chunks/index.B_5LbzzS.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
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
