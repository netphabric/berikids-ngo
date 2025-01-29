import { writable } from "svelte/store"

// prettier-ignore
export const teams = writable([
  { name: "Mme Relindis", role: "CEO & Founder", profile: "https://i.pravatar.cc/500?img=10" },
  { name: "Valery Ayuni", role: "Nurse", profile: "https://i.pravatar.cc/500?img=12" },
  { name: "Delphine", role: "program director", profile: "https://i.pravatar.cc/500?img=20" },
  { name: "Stanley Kuwan", role: "project manager", profile: "https://i.pravatar.cc/500?img=18" },
  { name: "lena Kloske", role: "German volunteer", profile: "https://i.pravatar.cc/500?img=28" },
])

export const partners = writable([
	{
		name: "St.Johannes Nepomuk Church Hohe",
		location: "Strasse 1 09112 Chemnitz Sachsen - germany"
	},
	{ name: "eye Square GmbH", location: " Schlesische Strasse 29-30D 10997 - berlin, germany" },
	{ name: "Achor e.V", location: "Kirchring 16 14959 Trebbin Brandenburg - germany" },
	{
		name: "Kommunitaet Grimnitz e.V. Grimnitzer ",
		location: "Strasse 11 16247 Joachimsthal Brandenburg - germany"
	},
	{ name: "Ethos Maria (a marian prayer group)", location: "germany" },
	{ name: "Freinds of cameroon", location: "frankfurt, germany" },
	{ name: "Pecten company", location: "Douala" },
	{ name: "International Talent Outreach", location: "Douala, cameroon |  Nigeria" },
	{ name: "Afoni children of hope foundation", location: "cameroon" },
	{ name: "The capuchin friary ", location: "shisong, cameroon" },
	{ name: "Strategic humanitarian services,(SHUMAS)", location: "Nkwen, cameroon" },
	{ name: "St.josephs children and adult home (SAJOCAH)", location: "bafut, cameroon" },
	{ name: "Tertiary sisters", location: "shisong, cameroon" }
])
