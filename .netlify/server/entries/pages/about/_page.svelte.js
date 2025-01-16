import { c as create_ssr_component, d as subscribe, v as validate_component, e as each, b as escape, a as add_attribute } from "../../../chunks/ssr.js";
import { C as ContentBlock } from "../../../chunks/contentBlock.js";
import { w as writable } from "../../../chunks/index.js";
import { C as Chip } from "../../../chunks/chip.js";
const teams = writable([
  { name: "Mme Berinyuy Relindis", role: "CEO & Founder", profile: "https://i.pravatar.cc/500?img=10" },
  { name: "Valery Ayuni", role: "Nurse", profile: "https://i.pravatar.cc/500?img=12" },
  { name: "Delphine Dusuinyuy", role: "program director", profile: "https://i.pravatar.cc/500?img=20" },
  { name: "Dr Eric", role: "Rehabilitation specialist", profile: "https://i.pravatar.cc/500?img=13" },
  { name: "Stanley Kuwan Ngalim", role: "project manager", profile: "https://i.pravatar.cc/500?img=18" },
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
  code: ".partners.svelte-1m9zzv8.svelte-1m9zzv8{padding:32px}.partners-wrapper.svelte-1m9zzv8.svelte-1m9zzv8{max-width:1440px;margin-inline:auto;display:flex;flex-direction:column;gap:32px}.partners-wrapper.svelte-1m9zzv8 .partner-cards.svelte-1m9zzv8{display:grid;grid-template-columns:repeat(4, 1fr);margin-block-start:32px;gap:32px}.partners-wrapper.svelte-1m9zzv8 .partner-cards .partner-card.svelte-1m9zzv8{display:flex;flex-direction:column;justify-content:space-between;border-radius:16px;padding:20px;gap:16px;color:white;background-color:#2b4f81}.partners-wrapper.svelte-1m9zzv8 .partner-cards .partner-card .verified.svelte-1m9zzv8{font-size:52px;color:#ffd966}.partners-wrapper.svelte-1m9zzv8 .partner-cards .partner-card .title.svelte-1m9zzv8{font-size:18px;font-weight:500;line-height:32px;text-transform:uppercase}.partners-wrapper.svelte-1m9zzv8 .partner-cards .partner-card .text.svelte-1m9zzv8{font-size:16px;font-weight:400;line-height:24px;opacity:0.6;display:flex;align-items:center;gap:8px}",
  map: '{"version":3,"file":"partners.svelte","sources":["partners.svelte"],"sourcesContent":["<script>\\n\\timport { partners } from \\"$lib/stores/about\\"\\n\\timport Chip from \\"./chip.svelte\\"\\n<\/script>\\n\\n<section class=\\"partners\\">\\n\\t<div class=\\"partners-wrapper\\">\\n\\t\\t<Chip chipText=\\"our partners\\" chipIcon=\\"verified\\" chipColor=\\"red\\" />\\n\\n\\t\\t<div class=\\"partner-cards\\">\\n\\t\\t\\t{#each $partners as partner}\\n\\t\\t\\t\\t<article class=\\"partner-card\\">\\n\\t\\t\\t\\t\\t<span class=\\"material-symbols-sharp verified\\">verified</span>\\n\\t\\t\\t\\t\\t<h4 class=\\"title\\">{partner.name}</h4>\\n\\n\\t\\t\\t\\t\\t<partner class=\\"text\\">\\n\\t\\t\\t\\t\\t\\t<span class=\\"material-symbols-sharp\\">share_location</span>\\n\\t\\t\\t\\t\\t\\t<span>{partner.location}</span>\\n\\t\\t\\t\\t\\t</partner>\\n\\t\\t\\t\\t</article>\\n\\t\\t\\t{/each}\\n\\t\\t</div>\\n\\t</div>\\n</section>\\n\\n<style lang=\\"scss\\">.partners {\\n  padding: 32px;\\n}\\n\\n.partners-wrapper {\\n  max-width: 1440px;\\n  margin-inline: auto;\\n  display: flex;\\n  flex-direction: column;\\n  gap: 32px;\\n}\\n.partners-wrapper .partner-cards {\\n  display: grid;\\n  grid-template-columns: repeat(4, 1fr);\\n  margin-block-start: 32px;\\n  gap: 32px;\\n}\\n.partners-wrapper .partner-cards .partner-card {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: space-between;\\n  border-radius: 16px;\\n  padding: 20px;\\n  gap: 16px;\\n  color: white;\\n  background-color: #2b4f81;\\n}\\n.partners-wrapper .partner-cards .partner-card .verified {\\n  font-size: 52px;\\n  color: #ffd966;\\n}\\n.partners-wrapper .partner-cards .partner-card .title {\\n  font-size: 18px;\\n  font-weight: 500;\\n  line-height: 32px;\\n  text-transform: uppercase;\\n}\\n.partners-wrapper .partner-cards .partner-card .text {\\n  font-size: 16px;\\n  font-weight: 400;\\n  line-height: 24px;\\n  opacity: 0.6;\\n  display: flex;\\n  align-items: center;\\n  gap: 8px;\\n}</style>\\n"],"names":[],"mappings":"AAyBmB,uCAAU,CAC3B,OAAO,CAAE,IACX,CAEA,+CAAkB,CAChB,SAAS,CAAE,MAAM,CACjB,aAAa,CAAE,IAAI,CACnB,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,IACP,CACA,gCAAiB,CAAC,6BAAe,CAC/B,OAAO,CAAE,IAAI,CACb,qBAAqB,CAAE,OAAO,CAAC,CAAC,CAAC,GAAG,CAAC,CACrC,kBAAkB,CAAE,IAAI,CACxB,GAAG,CAAE,IACP,CACA,gCAAiB,CAAC,cAAc,CAAC,4BAAc,CAC7C,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,eAAe,CAAE,aAAa,CAC9B,aAAa,CAAE,IAAI,CACnB,OAAO,CAAE,IAAI,CACb,GAAG,CAAE,IAAI,CACT,KAAK,CAAE,KAAK,CACZ,gBAAgB,CAAE,OACpB,CACA,gCAAiB,CAAC,cAAc,CAAC,aAAa,CAAC,wBAAU,CACvD,SAAS,CAAE,IAAI,CACf,KAAK,CAAE,OACT,CACA,gCAAiB,CAAC,cAAc,CAAC,aAAa,CAAC,qBAAO,CACpD,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,GAAG,CAChB,WAAW,CAAE,IAAI,CACjB,cAAc,CAAE,SAClB,CACA,gCAAiB,CAAC,cAAc,CAAC,aAAa,CAAC,oBAAM,CACnD,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,GAAG,CAChB,WAAW,CAAE,IAAI,CACjB,OAAO,CAAE,GAAG,CACZ,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,GAAG,CAAE,GACP"}'
};
const Partners = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $partners, $$unsubscribe_partners;
  $$unsubscribe_partners = subscribe(partners, (value) => $partners = value);
  $$result.css.add(css$1);
  $$unsubscribe_partners();
  return `<section class="partners svelte-1m9zzv8"><div class="partners-wrapper svelte-1m9zzv8">${validate_component(Chip, "Chip").$$render(
    $$result,
    {
      chipText: "our partners",
      chipIcon: "verified",
      chipColor: "red"
    },
    {},
    {}
  )} <div class="partner-cards svelte-1m9zzv8">${each($partners, (partner) => {
    return `<article class="partner-card svelte-1m9zzv8"><span class="material-symbols-sharp verified svelte-1m9zzv8" data-svelte-h="svelte-pd2fxt">verified</span> <h4 class="title svelte-1m9zzv8">${escape(partner.name)}</h4> <partner class="text svelte-1m9zzv8"><span class="material-symbols-sharp" data-svelte-h="svelte-973r2w">share_location</span> <span>${escape(partner.location)}</span></partner> </article>`;
  })}</div></div> </section>`;
});
const css = {
  code: ".our-team.svelte-1hty0m9.svelte-1hty0m9{padding:32px}.our-team.svelte-1hty0m9 .team-wrapper.svelte-1hty0m9{max-width:1440px;margin-inline:auto;display:flex;flex-direction:column;gap:32px}.our-team.svelte-1hty0m9 .team-wrapper .header.svelte-1hty0m9{display:flex;margin-block:32px;flex-direction:column;gap:16px}.our-team.svelte-1hty0m9 .team-wrapper .header .title.svelte-1hty0m9{font-size:52px;font-weight:500;line-height:40px}.our-team.svelte-1hty0m9 .team-wrapper .header .desc.svelte-1hty0m9{font-size:18px;font-weight:400;line-height:32px;opacity:0.6}.our-team.svelte-1hty0m9 .team-wrapper .teams.svelte-1hty0m9{display:grid;grid-template-columns:repeat(4, 1fr);gap:32px}.our-team.svelte-1hty0m9 .team-wrapper .teams .member-card.svelte-1hty0m9{padding:20px;display:flex;flex-direction:column;border-radius:16px;gap:16px;box-shadow:rgba(149, 157, 165, 0.2) 0px 8px 24px}.our-team.svelte-1hty0m9 .team-wrapper .teams .member-card .imageContainer.svelte-1hty0m9{width:100%;height:300px;overflow:hidden;border-radius:16px}.our-team.svelte-1hty0m9 .team-wrapper .teams .member-card .imageContainer img.svelte-1hty0m9{width:100%;height:100%;object-fit:cover}.our-team.svelte-1hty0m9 .team-wrapper .teams .member-card .content .member-details.svelte-1hty0m9{display:flex;flex-direction:column;gap:8px}.our-team.svelte-1hty0m9 .team-wrapper .teams .member-card .content .member-details .title.svelte-1hty0m9{font-size:24px;font-weight:500}.our-team.svelte-1hty0m9 .team-wrapper .teams .member-card .content .member-details .sub-title.svelte-1hty0m9{font-size:18px;font-weight:400;opacity:0.6}",
  map: '{"version":3,"file":"team.svelte","sources":["team.svelte"],"sourcesContent":["<script>\\n\\timport { teams } from \\"$lib/stores/about\\"\\n\\timport Chip from \\"./chip.svelte\\"\\n<\/script>\\n\\n<section class=\\"our-team\\">\\n\\t<div class=\\"team-wrapper\\">\\n\\t\\t<Chip chipText=\\"the people behind\\" chipIcon=\\"group\\" chipColor=\\"red\\" />\\n\\n\\t\\t<div class=\\"header\\">\\n\\t\\t\\t<h2 class=\\"title\\">our team</h2>\\n\\t\\t\\t<p class=\\"desc\\">dedicated professionals committed to making a difference.</p>\\n\\t\\t</div>\\n\\n\\t\\t<div class=\\"teams\\">\\n\\t\\t\\t{#each $teams as team}\\n\\t\\t\\t\\t<article class=\\"member-card\\">\\n\\t\\t\\t\\t\\t<div class=\\"imageContainer\\">\\n\\t\\t\\t\\t\\t\\t<img src={team.profile} alt=\\"profile\\" />\\n\\t\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t\\t<div class=\\"content\\">\\n\\t\\t\\t\\t\\t\\t<div class=\\"member-details\\">\\n\\t\\t\\t\\t\\t\\t\\t<h3 class=\\"title\\">{team.name}</h3>\\n\\t\\t\\t\\t\\t\\t\\t<p class=\\"sub-title\\">{team.role}</p>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t\\t\\t<div class=\\"member-socials\\"></div>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t</article>\\n\\t\\t\\t{/each}\\n\\t\\t</div>\\n\\t</div>\\n</section>\\n\\n<style lang=\\"scss\\">.our-team {\\n  padding: 32px;\\n}\\n.our-team .team-wrapper {\\n  max-width: 1440px;\\n  margin-inline: auto;\\n  display: flex;\\n  flex-direction: column;\\n  gap: 32px;\\n}\\n.our-team .team-wrapper .header {\\n  display: flex;\\n  margin-block: 32px;\\n  flex-direction: column;\\n  gap: 16px;\\n}\\n.our-team .team-wrapper .header .title {\\n  font-size: 52px;\\n  font-weight: 500;\\n  line-height: 40px;\\n}\\n.our-team .team-wrapper .header .desc {\\n  font-size: 18px;\\n  font-weight: 400;\\n  line-height: 32px;\\n  opacity: 0.6;\\n}\\n.our-team .team-wrapper .teams {\\n  display: grid;\\n  grid-template-columns: repeat(4, 1fr);\\n  gap: 32px;\\n}\\n.our-team .team-wrapper .teams .member-card {\\n  padding: 20px;\\n  display: flex;\\n  flex-direction: column;\\n  border-radius: 16px;\\n  gap: 16px;\\n  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;\\n}\\n.our-team .team-wrapper .teams .member-card .imageContainer {\\n  width: 100%;\\n  height: 300px;\\n  overflow: hidden;\\n  border-radius: 16px;\\n}\\n.our-team .team-wrapper .teams .member-card .imageContainer img {\\n  width: 100%;\\n  height: 100%;\\n  object-fit: cover;\\n}\\n.our-team .team-wrapper .teams .member-card .content .member-details {\\n  display: flex;\\n  flex-direction: column;\\n  gap: 8px;\\n}\\n.our-team .team-wrapper .teams .member-card .content .member-details .title {\\n  font-size: 24px;\\n  font-weight: 500;\\n}\\n.our-team .team-wrapper .teams .member-card .content .member-details .sub-title {\\n  font-size: 18px;\\n  font-weight: 400;\\n  opacity: 0.6;\\n}</style>\\n"],"names":[],"mappings":"AAmCmB,uCAAU,CAC3B,OAAO,CAAE,IACX,CACA,wBAAS,CAAC,4BAAc,CACtB,SAAS,CAAE,MAAM,CACjB,aAAa,CAAE,IAAI,CACnB,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,IACP,CACA,wBAAS,CAAC,aAAa,CAAC,sBAAQ,CAC9B,OAAO,CAAE,IAAI,CACb,YAAY,CAAE,IAAI,CAClB,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,IACP,CACA,wBAAS,CAAC,aAAa,CAAC,OAAO,CAAC,qBAAO,CACrC,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,GAAG,CAChB,WAAW,CAAE,IACf,CACA,wBAAS,CAAC,aAAa,CAAC,OAAO,CAAC,oBAAM,CACpC,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,GAAG,CAChB,WAAW,CAAE,IAAI,CACjB,OAAO,CAAE,GACX,CACA,wBAAS,CAAC,aAAa,CAAC,qBAAO,CAC7B,OAAO,CAAE,IAAI,CACb,qBAAqB,CAAE,OAAO,CAAC,CAAC,CAAC,GAAG,CAAC,CACrC,GAAG,CAAE,IACP,CACA,wBAAS,CAAC,aAAa,CAAC,MAAM,CAAC,2BAAa,CAC1C,OAAO,CAAE,IAAI,CACb,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,aAAa,CAAE,IAAI,CACnB,GAAG,CAAE,IAAI,CACT,UAAU,CAAE,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,GAAG,CAAC,IAC/C,CACA,wBAAS,CAAC,aAAa,CAAC,MAAM,CAAC,YAAY,CAAC,8BAAgB,CAC1D,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,KAAK,CACb,QAAQ,CAAE,MAAM,CAChB,aAAa,CAAE,IACjB,CACA,wBAAS,CAAC,aAAa,CAAC,MAAM,CAAC,YAAY,CAAC,eAAe,CAAC,kBAAI,CAC9D,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,UAAU,CAAE,KACd,CACA,wBAAS,CAAC,aAAa,CAAC,MAAM,CAAC,YAAY,CAAC,QAAQ,CAAC,8BAAgB,CACnE,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,GACP,CACA,wBAAS,CAAC,aAAa,CAAC,MAAM,CAAC,YAAY,CAAC,QAAQ,CAAC,eAAe,CAAC,qBAAO,CAC1E,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,GACf,CACA,wBAAS,CAAC,aAAa,CAAC,MAAM,CAAC,YAAY,CAAC,QAAQ,CAAC,eAAe,CAAC,yBAAW,CAC9E,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,GAAG,CAChB,OAAO,CAAE,GACX"}'
};
const Team = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $teams, $$unsubscribe_teams;
  $$unsubscribe_teams = subscribe(teams, (value) => $teams = value);
  $$result.css.add(css);
  $$unsubscribe_teams();
  return `<section class="our-team svelte-1hty0m9"><div class="team-wrapper svelte-1hty0m9">${validate_component(Chip, "Chip").$$render(
    $$result,
    {
      chipText: "the people behind",
      chipIcon: "group",
      chipColor: "red"
    },
    {},
    {}
  )} <div class="header svelte-1hty0m9" data-svelte-h="svelte-dthp7d"><h2 class="title svelte-1hty0m9">our team</h2> <p class="desc svelte-1hty0m9">dedicated professionals committed to making a difference.</p></div> <div class="teams svelte-1hty0m9">${each($teams, (team) => {
    return `<article class="member-card svelte-1hty0m9"><div class="imageContainer svelte-1hty0m9"><img${add_attribute("src", team.profile, 0)} alt="profile" class="svelte-1hty0m9"></div> <div class="content"><div class="member-details svelte-1hty0m9"><h3 class="title svelte-1hty0m9">${escape(team.name)}</h3> <p class="sub-title svelte-1hty0m9">${escape(team.role)}</p></div> <div class="member-socials"></div></div> </article>`;
  })}</div></div> </section>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main>${validate_component(ContentBlock, "ContentBlock").$$render(
    $$result,
    {
      heroBlock: true,
      contentChipColor: "yellow",
      contentChipText: "berikids",
      contentChipIcon: "child_care",
      contentMedia: "/images/about-hero.webp",
      contentTitleHighlight: "Goals, Vision and Mission.",
      contentTitle: "who we are, what we stand for | Goals, Vision and Mission.",
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
