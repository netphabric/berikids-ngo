import { writable } from "svelte/store"

// prettier-ignore
export const teams = writable([
  { name: "Mme Berinyuy Relindis", role: "CEO & Founder", profile: "https://i.pravatar.cc/500?img=10" },
  { name: "Valery Ayuni", role: "Nurse", profile: "https://i.pravatar.cc/500?img=12" },
  { name: "Delphine Dusuinyuy", role: "program director", profile: "https://i.pravatar.cc/500?img=20" },
  { name: "Dr Eric", role: "Rehabilitation specialist", profile: "https://i.pravatar.cc/500?img=13" },
  { name: "Stanley Kuwan Ngalim", role: "project manager", profile: "https://i.pravatar.cc/500?img=18" },
  { name: "lena Kloske", role: "German volunteer", profile: "https://i.pravatar.cc/500?img=28" },
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
