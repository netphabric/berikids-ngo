import { c as create_ssr_component, d as subscribe, v as validate_component, e as each, b as escape, a as add_attribute } from "../../../chunks/ssr.js";
import { C as ContentBlock } from "../../../chunks/contentBlock.js";
import { w as writable } from "../../../chunks/index.js";
import { C as Chip } from "../../../chunks/chip.js";
const teams = writable([
  { name: "Mme Relindis", role: "CEO & Founder", profile: "https://i.pravatar.cc/500?img=10" },
  { name: "Valery Ayuni", role: "Nurse", profile: "https://i.pravatar.cc/500?img=12" },
  { name: "Delphine", role: "program director", profile: "https://i.pravatar.cc/500?img=20" },
  { name: "Dr Eric", role: "rehab specialist", profile: "https://i.pravatar.cc/500?img=13" },
  { name: "Stanley Kuwan", role: "project manager", profile: "https://i.pravatar.cc/500?img=18" },
  { name: "lena Kloske", role: "German volunteer", profile: "https://i.pravatar.cc/500?img=28" }
]);
const partners = writable([
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
]);
const css$1 = {
  code: '@property --angle{syntax:"<angle>";initial-value:90deg;inherits:true}.partners.svelte-rkg8xs.svelte-rkg8xs{padding:2rem 1.25rem}.partners-wrapper.svelte-rkg8xs.svelte-rkg8xs{max-width:1440px;margin-inline:auto;display:flex;flex-direction:column;gap:2rem}.partners-wrapper.svelte-rkg8xs .partner-cards.svelte-rkg8xs{display:grid;margin-block-start:2rem;grid-template-columns:repeat(auto-fit, minmax(250px, 1fr));gap:2rem}.partners-wrapper.svelte-rkg8xs .partner-cards .partner-card.svelte-rkg8xs{display:flex;flex-direction:column;justify-content:space-between;border-radius:1rem;padding:1rem;gap:1rem;color:#f2f2f2;background-color:#2b4f81;box-shadow:rgba(0, 0, 0, 0.45) 0px 25px 20px -20px}.partners-wrapper.svelte-rkg8xs .partner-cards .partner-card .verified.svelte-rkg8xs{font-size:2.5rem;color:#ffd966}.partners-wrapper.svelte-rkg8xs .partner-cards .partner-card .title.svelte-rkg8xs{font-size:0.875rem;font-weight:600;text-transform:uppercase;line-height:1.5rem}@media(min-width: 48rem){.partners-wrapper.svelte-rkg8xs .partner-cards .partner-card .title.svelte-rkg8xs{font-size:1rem;line-height:2rem}}.partners-wrapper.svelte-rkg8xs .partner-cards .partner-card .text.svelte-rkg8xs{font-size:0.875rem;font-weight:400;line-height:1.5rem;opacity:0.6;display:flex;align-items:center;gap:8px}@media(min-width: 48rem){.partners-wrapper.svelte-rkg8xs .partner-cards .partner-card .text.svelte-rkg8xs{font-size:1rem;line-height:2rem}}',
  map: '{"version":3,"file":"partners.svelte","sources":["partners.svelte"],"sourcesContent":["<script>\\n\\timport { partners } from \\"$lib/stores/about\\"\\n\\timport Chip from \\"./chip.svelte\\"\\n<\/script>\\n\\n<section class=\\"partners\\">\\n\\t<div class=\\"partners-wrapper\\">\\n\\t\\t<Chip chipText=\\"our partners\\" chipIcon=\\"verified\\" chipColor=\\"red\\" />\\n\\n\\t\\t<div class=\\"partner-cards\\">\\n\\t\\t\\t{#each $partners as partner}\\n\\t\\t\\t\\t<article class=\\"partner-card\\">\\n\\t\\t\\t\\t\\t<span class=\\"material-symbols-sharp verified\\">verified</span>\\n\\t\\t\\t\\t\\t<h4 class=\\"title\\">{partner.name}</h4>\\n\\n\\t\\t\\t\\t\\t<partner class=\\"text\\">\\n\\t\\t\\t\\t\\t\\t<span class=\\"material-symbols-sharp\\">pin_drop</span>\\n\\t\\t\\t\\t\\t\\t<span>{partner.location}</span>\\n\\t\\t\\t\\t\\t</partner>\\n\\t\\t\\t\\t</article>\\n\\t\\t\\t{/each}\\n\\t\\t</div>\\n\\t</div>\\n</section>\\n\\n<style lang=\\"scss\\">@property --angle {\\n  syntax: \\"<angle>\\";\\n  initial-value: 90deg;\\n  inherits: true;\\n}\\n.partners {\\n  padding: 2rem 1.25rem;\\n}\\n\\n.partners-wrapper {\\n  max-width: 1440px;\\n  margin-inline: auto;\\n  display: flex;\\n  flex-direction: column;\\n  gap: 2rem;\\n}\\n.partners-wrapper .partner-cards {\\n  display: grid;\\n  margin-block-start: 2rem;\\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\\n  gap: 2rem;\\n}\\n.partners-wrapper .partner-cards .partner-card {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: space-between;\\n  border-radius: 1rem;\\n  padding: 1rem;\\n  gap: 1rem;\\n  color: #f2f2f2;\\n  background-color: #2b4f81;\\n  box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;\\n}\\n.partners-wrapper .partner-cards .partner-card .verified {\\n  font-size: 2.5rem;\\n  color: #ffd966;\\n}\\n.partners-wrapper .partner-cards .partner-card .title {\\n  font-size: 0.875rem;\\n  font-weight: 600;\\n  text-transform: uppercase;\\n  line-height: 1.5rem;\\n}\\n@media (min-width: 48rem) {\\n  .partners-wrapper .partner-cards .partner-card .title {\\n    font-size: 1rem;\\n    line-height: 2rem;\\n  }\\n}\\n.partners-wrapper .partner-cards .partner-card .text {\\n  font-size: 0.875rem;\\n  font-weight: 400;\\n  line-height: 1.5rem;\\n  opacity: 0.6;\\n  display: flex;\\n  align-items: center;\\n  gap: 8px;\\n}\\n@media (min-width: 48rem) {\\n  .partners-wrapper .partner-cards .partner-card .text {\\n    font-size: 1rem;\\n    line-height: 2rem;\\n  }\\n}</style>\\n"],"names":[],"mappings":"AAyBmB,UAAU,OAAQ,CACnC,MAAM,CAAE,SAAS,CACjB,aAAa,CAAE,KAAK,CACpB,QAAQ,CAAE,IACZ,CACA,qCAAU,CACR,OAAO,CAAE,IAAI,CAAC,OAChB,CAEA,6CAAkB,CAChB,SAAS,CAAE,MAAM,CACjB,aAAa,CAAE,IAAI,CACnB,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,IACP,CACA,+BAAiB,CAAC,4BAAe,CAC/B,OAAO,CAAE,IAAI,CACb,kBAAkB,CAAE,IAAI,CACxB,qBAAqB,CAAE,OAAO,QAAQ,CAAC,CAAC,OAAO,KAAK,CAAC,CAAC,GAAG,CAAC,CAAC,CAC3D,GAAG,CAAE,IACP,CACA,+BAAiB,CAAC,cAAc,CAAC,2BAAc,CAC7C,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,eAAe,CAAE,aAAa,CAC9B,aAAa,CAAE,IAAI,CACnB,OAAO,CAAE,IAAI,CACb,GAAG,CAAE,IAAI,CACT,KAAK,CAAE,OAAO,CACd,gBAAgB,CAAE,OAAO,CACzB,UAAU,CAAE,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,CAAC,GAAG,CAAC,IAAI,CAAC,IAAI,CAAC,KAChD,CACA,+BAAiB,CAAC,cAAc,CAAC,aAAa,CAAC,uBAAU,CACvD,SAAS,CAAE,MAAM,CACjB,KAAK,CAAE,OACT,CACA,+BAAiB,CAAC,cAAc,CAAC,aAAa,CAAC,oBAAO,CACpD,SAAS,CAAE,QAAQ,CACnB,WAAW,CAAE,GAAG,CAChB,cAAc,CAAE,SAAS,CACzB,WAAW,CAAE,MACf,CACA,MAAO,YAAY,KAAK,CAAE,CACxB,+BAAiB,CAAC,cAAc,CAAC,aAAa,CAAC,oBAAO,CACpD,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,IACf,CACF,CACA,+BAAiB,CAAC,cAAc,CAAC,aAAa,CAAC,mBAAM,CACnD,SAAS,CAAE,QAAQ,CACnB,WAAW,CAAE,GAAG,CAChB,WAAW,CAAE,MAAM,CACnB,OAAO,CAAE,GAAG,CACZ,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,GAAG,CAAE,GACP,CACA,MAAO,YAAY,KAAK,CAAE,CACxB,+BAAiB,CAAC,cAAc,CAAC,aAAa,CAAC,mBAAM,CACnD,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,IACf,CACF"}'
};
const Partners = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $partners, $$unsubscribe_partners;
  $$unsubscribe_partners = subscribe(partners, (value) => $partners = value);
  $$result.css.add(css$1);
  $$unsubscribe_partners();
  return `<section class="partners svelte-rkg8xs"><div class="partners-wrapper svelte-rkg8xs">${validate_component(Chip, "Chip").$$render(
    $$result,
    {
      chipText: "our partners",
      chipIcon: "verified",
      chipColor: "red"
    },
    {},
    {}
  )} <div class="partner-cards svelte-rkg8xs">${each($partners, (partner) => {
    return `<article class="partner-card svelte-rkg8xs"><span class="material-symbols-sharp verified svelte-rkg8xs" data-svelte-h="svelte-pd2fxt">verified</span> <h4 class="title svelte-rkg8xs">${escape(partner.name)}</h4> <partner class="text svelte-rkg8xs"><span class="material-symbols-sharp" data-svelte-h="svelte-1n9ndga">pin_drop</span> <span>${escape(partner.location)}</span></partner> </article>`;
  })}</div></div> </section>`;
});
const css = {
  code: '@property --angle{syntax:"<angle>";initial-value:90deg;inherits:true}.our-team.svelte-1eubfta.svelte-1eubfta{padding:2rem 1.25rem}.our-team.svelte-1eubfta .team-wrapper.svelte-1eubfta{max-width:1440px;margin-inline:auto;display:flex;flex-direction:column;gap:1rem}@media(min-width: 48rem){.our-team.svelte-1eubfta .team-wrapper.svelte-1eubfta{gap:2rem}}.our-team.svelte-1eubfta .team-wrapper .header.svelte-1eubfta{display:flex;margin-block:2rem;flex-direction:column;gap:1rem}.our-team.svelte-1eubfta .team-wrapper .header .title.svelte-1eubfta{font-size:2rem;font-weight:500}@media(min-width: 48rem){.our-team.svelte-1eubfta .team-wrapper .header .title.svelte-1eubfta{font-size:2.5rem;line-height:2.5rem}}@media(min-width: 64rem){.our-team.svelte-1eubfta .team-wrapper .header .title.svelte-1eubfta{font-size:3rem}}.our-team.svelte-1eubfta .team-wrapper .header .desc.svelte-1eubfta{font-size:1rem;font-weight:400;opacity:0.6}@media(min-width: 48rem){.our-team.svelte-1eubfta .team-wrapper .header .desc.svelte-1eubfta{font-size:500;line-height:1.5rem}}@media(min-width: 64rem){.our-team.svelte-1eubfta .team-wrapper .header .desc.svelte-1eubfta{font-size:1.25rem;line-height:2rem}}.our-team.svelte-1eubfta .team-wrapper .teams.svelte-1eubfta{display:grid;grid-template-columns:repeat(auto-fit, minmax(9.375rem, 1fr));gap:1rem}@media(min-width: 48rem){.our-team.svelte-1eubfta .team-wrapper .teams.svelte-1eubfta{grid-template-columns:repeat(auto-fit, minmax(15.625rem, 1fr));gap:2rem}}.our-team.svelte-1eubfta .team-wrapper .teams .member-card.svelte-1eubfta{padding:0.3125rem;display:flex;flex-direction:column;border-radius:0.5rem;box-shadow:rgba(149, 157, 165, 0.2) 0px 8px 24px;gap:1rem}@media(min-width: 48rem){.our-team.svelte-1eubfta .team-wrapper .teams .member-card.svelte-1eubfta{padding:1rem}}.our-team.svelte-1eubfta .team-wrapper .teams .member-card .imageContainer.svelte-1eubfta{width:100%;height:9.375rem;overflow:hidden;border-radius:0.5rem}@media(min-width: 48rem){.our-team.svelte-1eubfta .team-wrapper .teams .member-card .imageContainer.svelte-1eubfta{height:15.625rem}}.our-team.svelte-1eubfta .team-wrapper .teams .member-card .imageContainer img.svelte-1eubfta{width:100%;height:100%;object-fit:cover}.our-team.svelte-1eubfta .team-wrapper .teams .member-card .content .member-details.svelte-1eubfta{display:flex;flex-direction:column}.our-team.svelte-1eubfta .team-wrapper .teams .member-card .content .member-details .title.svelte-1eubfta{font-size:0.875rem;font-weight:600}@media(min-width: 48rem){.our-team.svelte-1eubfta .team-wrapper .teams .member-card .content .member-details .title.svelte-1eubfta{font-size:1rem}}@media(min-width: 64rem){.our-team.svelte-1eubfta .team-wrapper .teams .member-card .content .member-details .title.svelte-1eubfta{font-size:500}}.our-team.svelte-1eubfta .team-wrapper .teams .member-card .content .member-details .sub-title.svelte-1eubfta{font-size:0.75rem;font-weight:400;opacity:0.6}@media(min-width: 48rem){.our-team.svelte-1eubfta .team-wrapper .teams .member-card .content .member-details .sub-title.svelte-1eubfta{font-size:0.875rem}}@media(min-width: 64rem){.our-team.svelte-1eubfta .team-wrapper .teams .member-card .content .member-details .sub-title.svelte-1eubfta{font-size:1rem}}',
  map: '{"version":3,"file":"team.svelte","sources":["team.svelte"],"sourcesContent":["<script>\\n\\timport { teams } from \\"$lib/stores/about\\"\\n\\timport Chip from \\"./chip.svelte\\"\\n<\/script>\\n\\n<section class=\\"our-team\\">\\n\\t<div class=\\"team-wrapper\\">\\n\\t\\t<Chip chipText=\\"the people behind\\" chipIcon=\\"group\\" chipColor=\\"red\\" />\\n\\n\\t\\t<div class=\\"header\\">\\n\\t\\t\\t<h2 class=\\"title\\">our team</h2>\\n\\t\\t\\t<p class=\\"desc\\">dedicated professionals committed to making a difference.</p>\\n\\t\\t</div>\\n\\n\\t\\t<div class=\\"teams\\">\\n\\t\\t\\t{#each $teams as team}\\n\\t\\t\\t\\t<article class=\\"member-card\\">\\n\\t\\t\\t\\t\\t<div class=\\"imageContainer\\">\\n\\t\\t\\t\\t\\t\\t<img src={team.profile} alt=\\"profile\\" />\\n\\t\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t\\t<div class=\\"content\\">\\n\\t\\t\\t\\t\\t\\t<div class=\\"member-details\\">\\n\\t\\t\\t\\t\\t\\t\\t<h3 class=\\"title\\">{team.name}</h3>\\n\\t\\t\\t\\t\\t\\t\\t<p class=\\"sub-title\\">{team.role}</p>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t\\t\\t<div class=\\"member-socials\\"></div>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t</article>\\n\\t\\t\\t{/each}\\n\\t\\t</div>\\n\\t</div>\\n</section>\\n\\n<style lang=\\"scss\\">@property --angle {\\n  syntax: \\"<angle>\\";\\n  initial-value: 90deg;\\n  inherits: true;\\n}\\n.our-team {\\n  padding: 2rem 1.25rem;\\n}\\n.our-team .team-wrapper {\\n  max-width: 1440px;\\n  margin-inline: auto;\\n  display: flex;\\n  flex-direction: column;\\n  gap: 1rem;\\n}\\n@media (min-width: 48rem) {\\n  .our-team .team-wrapper {\\n    gap: 2rem;\\n  }\\n}\\n.our-team .team-wrapper .header {\\n  display: flex;\\n  margin-block: 2rem;\\n  flex-direction: column;\\n  gap: 1rem;\\n}\\n.our-team .team-wrapper .header .title {\\n  font-size: 2rem;\\n  font-weight: 500;\\n}\\n@media (min-width: 48rem) {\\n  .our-team .team-wrapper .header .title {\\n    font-size: 2.5rem;\\n    line-height: 2.5rem;\\n  }\\n}\\n@media (min-width: 64rem) {\\n  .our-team .team-wrapper .header .title {\\n    font-size: 3rem;\\n  }\\n}\\n.our-team .team-wrapper .header .desc {\\n  font-size: 1rem;\\n  font-weight: 400;\\n  opacity: 0.6;\\n}\\n@media (min-width: 48rem) {\\n  .our-team .team-wrapper .header .desc {\\n    font-size: 500;\\n    line-height: 1.5rem;\\n  }\\n}\\n@media (min-width: 64rem) {\\n  .our-team .team-wrapper .header .desc {\\n    font-size: 1.25rem;\\n    line-height: 2rem;\\n  }\\n}\\n.our-team .team-wrapper .teams {\\n  display: grid;\\n  grid-template-columns: repeat(auto-fit, minmax(9.375rem, 1fr));\\n  gap: 1rem;\\n}\\n@media (min-width: 48rem) {\\n  .our-team .team-wrapper .teams {\\n    grid-template-columns: repeat(auto-fit, minmax(15.625rem, 1fr));\\n    gap: 2rem;\\n  }\\n}\\n.our-team .team-wrapper .teams .member-card {\\n  padding: 0.3125rem;\\n  display: flex;\\n  flex-direction: column;\\n  border-radius: 0.5rem;\\n  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;\\n  gap: 1rem;\\n}\\n@media (min-width: 48rem) {\\n  .our-team .team-wrapper .teams .member-card {\\n    padding: 1rem;\\n  }\\n}\\n.our-team .team-wrapper .teams .member-card .imageContainer {\\n  width: 100%;\\n  height: 9.375rem;\\n  overflow: hidden;\\n  border-radius: 0.5rem;\\n}\\n@media (min-width: 48rem) {\\n  .our-team .team-wrapper .teams .member-card .imageContainer {\\n    height: 15.625rem;\\n  }\\n}\\n.our-team .team-wrapper .teams .member-card .imageContainer img {\\n  width: 100%;\\n  height: 100%;\\n  object-fit: cover;\\n}\\n.our-team .team-wrapper .teams .member-card .content .member-details {\\n  display: flex;\\n  flex-direction: column;\\n}\\n.our-team .team-wrapper .teams .member-card .content .member-details .title {\\n  font-size: 0.875rem;\\n  font-weight: 600;\\n}\\n@media (min-width: 48rem) {\\n  .our-team .team-wrapper .teams .member-card .content .member-details .title {\\n    font-size: 1rem;\\n  }\\n}\\n@media (min-width: 64rem) {\\n  .our-team .team-wrapper .teams .member-card .content .member-details .title {\\n    font-size: 500;\\n  }\\n}\\n.our-team .team-wrapper .teams .member-card .content .member-details .sub-title {\\n  font-size: 0.75rem;\\n  font-weight: 400;\\n  opacity: 0.6;\\n}\\n@media (min-width: 48rem) {\\n  .our-team .team-wrapper .teams .member-card .content .member-details .sub-title {\\n    font-size: 0.875rem;\\n  }\\n}\\n@media (min-width: 64rem) {\\n  .our-team .team-wrapper .teams .member-card .content .member-details .sub-title {\\n    font-size: 1rem;\\n  }\\n}</style>\\n"],"names":[],"mappings":"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"}'
};
const Team = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $teams, $$unsubscribe_teams;
  $$unsubscribe_teams = subscribe(teams, (value) => $teams = value);
  $$result.css.add(css);
  $$unsubscribe_teams();
  return `<section class="our-team svelte-1eubfta"><div class="team-wrapper svelte-1eubfta">${validate_component(Chip, "Chip").$$render(
    $$result,
    {
      chipText: "the people behind",
      chipIcon: "group",
      chipColor: "red"
    },
    {},
    {}
  )} <div class="header svelte-1eubfta" data-svelte-h="svelte-dthp7d"><h2 class="title svelte-1eubfta">our team</h2> <p class="desc svelte-1eubfta">dedicated professionals committed to making a difference.</p></div> <div class="teams svelte-1eubfta">${each($teams, (team) => {
    return `<article class="member-card svelte-1eubfta"><div class="imageContainer svelte-1eubfta"><img${add_attribute("src", team.profile, 0)} alt="profile" class="svelte-1eubfta"></div> <div class="content"><div class="member-details svelte-1eubfta"><h3 class="title svelte-1eubfta">${escape(team.name)}</h3> <p class="sub-title svelte-1eubfta">${escape(team.role)}</p></div> <div class="member-socials"></div></div> </article>`;
  })}</div></div> </section>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-1ine71f_START -->${$$result.title = `<title>About</title>`, ""}<!-- HEAD_svelte-1ine71f_END -->`, ""} <main>${validate_component(ContentBlock, "ContentBlock").$$render(
    $$result,
    {
      heroBlock: true,
      contentChipColor: "yellow",
      contentChipText: "berikids",
      contentChipIcon: "child_care",
      contentMedia: "/images/about-hero.webp",
      contentTitleHighlight: "vision",
      contentTitle: "Our Goals, Vision and Mission.",
      contentDescription: " \n      We are a Cameroonian NGO founded in 2004,\n      we focus on improving the lives of underprivileged children and orphans in the North West Region.\n      We're currently prioritizing interventions to address the challenges of the ongoing armed conflict there,\n      providing critical assistance and contributing to long-term positive change. \n    "
    },
    {},
    {}
  )} ${validate_component(Team, "Team").$$render($$result, {}, {}, {})} ${validate_component(ContentBlock, "ContentBlock").$$render(
    $$result,
    {
      flexReverse: true,
      contentChipColor: "blue",
      contentChipText: "what we do",
      contentChipIcon: "potted_plant",
      contentMedia: "/images/Hs1-img.webp",
      contentTitleHighlight: "vulnerable communities",
      contentTitle: "supporting vulnerable communities via sustainability programs.",
      contentDescription: "\n      Founded with a vision to uplift the socio-economic conditions of orphans in Cameroon,\n      our NGO has grown significantly since its inception.\n      Key milestones include the launch of vocational training programs and successful\n      partnerships with local and international organizations to enhance community development.\n    "
    },
    {},
    {}
  )} ${validate_component(Partners, "Partners").$$render($$result, {}, {}, {})} ${validate_component(ContentBlock, "ContentBlock").$$render(
    $$result,
    {
      contentChipColor: "green",
      contentChipText: "what keeps us going",
      contentChipIcon: "rocket_launch",
      contentMedia: "/images/as2.webp",
      contentTitleHighlight: "committment",
      contentTitle: "Our committment to transforming lives in Cameroon.",
      contentDescription: " \n      We are dedicated to improving the socio-economic conditions of orphans,\n      providing them with essential skills and resources. Our initiatives also focus on advancing IT education,\n      ensuring access to potable water, and offering Christian counseling to foster holistic development.\n    "
    },
    {},
    {}
  )}</main>`;
});
export {
  Page as default
};
