import { writable } from "svelte/store"

export const sectors = writable([
	{
		image: "/images/s1.webp",
		title: "Enhancing Socio-Economic Conditions for Orphans",
		desc: "We provide vocational training to empower orphans with essential life skills."
	},
	{
		image: "/images/s2.webp",
		title: "Advancing Education and Technology in Cameroon",
		desc: "Our programs promote digital literacy as a key to development."
	},
	{
		image: "/images/s3.webp",
		title: "Providing Clean Water to Communities in Need",
		desc: "We ensure access to potable water for underserved populations."
	}
])

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
		name: "alice johnson",
		role: "program director",
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
	{ name: "mary alphonse bradly fund", location: "kumbo,cameroon" },
	{ name: "freinds of cameroon", location: "germany" },
	{ name: "the capuchin friary - shisong,cameroon", location: "kumbo,cameroon" },
	{ name: "pecten company,cameroon", location: "kumbo,cameroon" },
	{ name: "navti foundation -cameroon", location: "kumbo,cameroon" },
	{ name: "strategic humanitarian services,(SHUMAS)", location: "Nkwen, Bamenda" },
	{ name: "st.josephs children and adult home (SAJOCAH)", location: "bafut" }
])
