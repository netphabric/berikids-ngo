import { writable } from "svelte/store"

const teamPath = "/images/team/"
export const teams = writable([
	{
		location: "cm",
		name: "Mme Relindis",
		role: "CEO & Founder",
		profile: `${teamPath}/mmeBeri.webp`
	},
	{
		location: "de",
		role: "President | DE ",
		name: "Standley kuwan ",
		profile: `${teamPath}/stanley.webp`
	},
	{
		location: "de",
		role: "Secretary | CM ",
		name: "lena Kloske",
		profile: `${teamPath}/lena.webp`
	},
	{
		location: "cm",
		role: "Nurse",
		name: "Valery Ayuni",
		profile: `${teamPath}/valery.webp`
	}
])

export const partners = writable([
	{
		name: "St.Johannes Nepomuk Church Hohe",
		location: "Strasse 1 09112 Chemnitz Sachsen - germany"
	},
	{ name: "Eye Square GmbH", location: " Schlesische Strasse 29-30D 10997 - berlin, germany" },
	{ name: "Achor e.V", location: "Kirchring 16 14959 Trebbin Brandenburg - germany" },
	{
		name: "Kommunitaet Grimnitz e.V. Grimnitzer ",
		location: "Strasse 11 16247 Joachimsthal Brandenburg - germany"
	},
	{ name: "Ethos Maria (a marian prayer group)", location: "germany" },
	{ name: "Freinds of cameroon", location: "frankfurt, germany" },
	{ name: "Pecten company", location: "Douala" },
	{ name: "International Talent Outreach", location: "Douala, cameroon |  Nigeria" },
	{ name: "Erico metal fabrications", location: "Douala, cameroon " },
	{ name: "Afoni children of hope foundation", location: "cameroon" },
	{ name: "The capuchin friary ", location: "shisong, cameroon" },
	{ name: "Strategic humanitarian services,(SHUMAS)", location: "Nkwen, cameroon" },
	{ name: "St.josephs children and adult home (SAJOCAH)", location: "bafut, cameroon" },
	{ name: "Tertiary sisters", location: "shisong, cameroon" }
])
