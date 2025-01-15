import { writable } from "svelte/store"

export const teams = writable([
	{
		profile: "/dp/dp2.webp",
		name: "Mme Berinyuy Relindis",
		role: "CEO & Founder",
		desc: "passionate about empowering orphans through education and vocational training",
		socials: []
	},
	{
		profile: "/dp/dp3.webp",
		name: "Delphine Dusuinyuy",
		role: "program director",
		desc: "passionate about empowering orphans through education and vocational training",
		socials: []
	},
	{
		profile: "/dp/dp4.webp",
		name: "Dr Eric",
		role: "Rehabilitation specialist",
		desc: "passionate about empowering orphans through education and vocational training",
		socials: []
	},
	{
		profile: "/dp/dp5.webp",
		name: "Stanley Kuwan Ngalim",
		role: "project manager",
		desc: "passionate about empowering orphans through education and vocational training",
		socials: []
	},
	{
		profile: "/dp/dp6.webp",
		name: "lena Kloske",
		role: "German volunteer",
		desc: "passionate about empowering orphans through education and vocational training",
		socials: []
	},
	{
		profile: "/dp/dp7.webp",
		name: "Valery Ayuni",
		role: "Nurse",
		desc: "passionate about empowering orphans through education and vocational training",
		socials: []
	},
	{
		profile: "/dp/dp8.webp",
		name: "alice johnson",
		role: "program director",
		desc: "passionate about empowering orphans through education and vocational training",
		socials: []
	},
	{
		profile: "/dp/dp2.webp",
		name: "alice johnson",
		role: "program director",
		desc: "passionate about empowering orphans through education and vocational training",
		socials: []
	}
])

export const partners = writable([
	{ name: "Mary alphonse bradly fund", location: "kumbo,cameroon" },
	{ name: "Freinds of cameroon", location: "frankfurt,germany" },
	{ name: "The capuchin friary - shisong,cameroon", location: "kumbo,cameroon" },
	{ name: "Pecten company,cameroon", location: "kumbo,cameroon" },
	{ name: "Strategic humanitarian services,(SHUMAS)", location: "Nkwen, Bamenda" },
	{ name: "St.josephs children and adult home (SAJOCAH)", location: "bafut" },
	{ name: "Ethos Maria (a marian prayer group)", location: "germany" },
	{ name: "Arch Diocese of Berlin", location: "germany" },
	{ name: "Divine center of Berline", location: "germany" },
	{ name: "Vicarate of the Archdiocese of Berlin", location: "germany" },
	{ name: "St.Johannes Nepomuk Chemnitz/Saxony", location: "germany" },
	{ name: "Achorhof retreat center", location: "germany" },
	{ name: "Eye Square GMbH", location: "berlin,germany" },
	{ name: "Tertiary sisters of shisong", location: "shisong,cameroon" },
	{ name: "Afoni children of hope foundation", location: "cameroon" }
])
