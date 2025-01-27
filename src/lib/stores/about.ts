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
	{ name: "Eye Square GmbH", location: " Schlesische Strasse 29-30D 10997 - berlin, germany" },
	{ name: "Achor e.V", location: "Kirchring 16 14959 Trebbin Brandenburg - germany" },
	{
		name: "Kommunitaet Grimnitz e.V. Grimnitzer ",
		location: "Strasse 11 16247 Joachimsthal Brandenburg - germany"
	},
	{ name: "Ethos Maria (a marian prayer group)", location: "germany" },
	{ name: "Achorhof retreat center", location: "germany" },
	{ name: "Freinds of cameroon", location: "frankfurt,germany" },
	{ name: "Pecten company,cameroon", location: "Douala ,cameroon" },
	{ name: "Afoni children of hope foundation", location: "cameroon" },
	{ name: "The capuchin friary - shisong,cameroon", location: "kumbo,cameroon" },
	{ name: "Strategic humanitarian services,(SHUMAS)", location: "Nkwen, Bamenda" },
	{ name: "St.josephs children and adult home (SAJOCAH)", location: "bafut" },
	{ name: "Tertiary sisters of shisong", location: "shisong,cameroon" }
])
