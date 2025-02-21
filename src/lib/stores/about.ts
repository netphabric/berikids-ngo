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
		name: "Eye Square GmbH",
		email: "eye@eye-square.com",
		phone: "+49 (0)30 69 81 44 - 0",
		web: "https://www.eye-square.com/",
		location: "Schlesische Strasse 29-30D 10997 - Berlin, Germany"
	},
	{
		name: "Freunde Kameruns e.V.",
		web: "https://www.Freunde-Kameruns.de/",
		phone: "06053 3530",
		location: "wilhelm-Leuschner-Straße 23, E 63128 Dietzenbach - Frankfurt, germany"
	},
	{
		name: "St.Johannes Nepomuk Church Hohe",
    email: "ursula.haemmerer@web.de",
		location: "Walter Meusel Str. 51 09114 Chemnitz - germany" 
  },
	{ name: "St. Clemens kirche",
    web: "https://www.stclemens.berlin/",
    phone: "030 26 36 76 98",
    location: "Stresemannstr. 66, 10963 Berlin - Germany" 
  },
	{ name: "Achor e.V.", location: "Kirchring 16 14959 Trebbin Brandenburg - Germany" },
	{
		name: "Kommunitaet Grimnitz e.V. Grimnitzer ",
		location: "Strasse 11 16247 Joachimsthal Brandenburg - germany"
	},
	{ name: "Ethos Maria (a marian prayer group)", location: "germany" },
	{ name: "Pecten company", location: "Douala" },
	{
		name: "International Talent Outreach",
		web: "https://www.talentoutreach.org",
		location: "Douala, cameroon & nigeria"
	},
	{
		name: "Erico metal fabrications",
		phone: "+237 677 192 872",
		email: "ericometalone@gmail.com",
		location: "Douala, cameroon "
	},
	{
		name: "ETS Sun City",
		email: "suncityushenil@yahoo.com",
		location: "Bp:1477 Bafoussam, cameroon"
	},
	{ name: "Afoni children of hope foundation", location: "cameroon" },
	{ name: "The capuchin friary ", location: "shisong, cameroon" },
	{ name: "Strategic humanitarian services,(SHUMAS)", location: "Nkwen, cameroon" },
	{ name: "St.josephs children and adult home (SAJOCAH)", location: "bafut, cameroon" },
	{ name: "Tertiary sisters", location: "shisong, cameroon" }
])
