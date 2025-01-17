import { c as create_ssr_component, v as validate_component, e as each, b as escape, d as subscribe } from "../../../chunks/ssr.js";
import { t as trainingFaqs, F as Faq } from "../../../chunks/faq.js";
import { C as ContentBlock } from "../../../chunks/contentBlock.js";
import { C as Chip } from "../../../chunks/chip.js";
const css = {
  code: ".skill-cards.svelte-1agx80n.svelte-1agx80n{padding:32px 20px}.skill-cards.svelte-1agx80n .section-wrapper.svelte-1agx80n{max-width:1440px;margin-inline:auto}.skill-cards.svelte-1agx80n .section-wrapper .cards-wrapper.svelte-1agx80n{display:grid;margin-block-start:32px;grid-template-columns:repeat(auto-fit, minmax(180px, 1fr));gap:16px}@media(min-width: 768px){.skill-cards.svelte-1agx80n .section-wrapper .cards-wrapper.svelte-1agx80n{margin-block-start:64px;grid-template-columns:repeat(auto-fit, minmax(250px, 1fr));gap:32px}}.skill-cards.svelte-1agx80n .section-wrapper .cards-wrapper .skill-card.svelte-1agx80n{display:flex;flex-direction:column;align-items:center;gap:16px;border-radius:16px;padding:20px;box-shadow:rgba(149, 157, 165, 0.2) 0px 8px 24px}.skill-cards.svelte-1agx80n .section-wrapper .cards-wrapper .skill-card.svelte-1agx80n:nth-child(1){color:rgb(66.9914893617, 114.1063829787, 58.8936170213);background-color:rgb(220.3787234043, 235.7659574468, 217.7340425532)}.skill-cards.svelte-1agx80n .section-wrapper .cards-wrapper .skill-card.svelte-1agx80n:nth-child(2){color:rgb(36.625, 67.2877906977, 109.875);background-color:rgb(192.75, 210.1220930233, 234.25)}.skill-cards.svelte-1agx80n .section-wrapper .cards-wrapper .skill-card.svelte-1agx80n:nth-child(3){color:rgb(185.8301886792, 22.1886792453, 10.1698113208);background-color:rgb(253.2617924528, 225.2924528302, 223.2382075472)}.skill-cards.svelte-1agx80n .section-wrapper .cards-wrapper .skill-card .material-symbols-sharp.svelte-1agx80n{font-size:64px;font-weight:500}.skill-cards.svelte-1agx80n .section-wrapper .cards-wrapper .skill-card .title.svelte-1agx80n{font-size:24px;font-weight:500}@media(min-width: 768px){.skill-cards.svelte-1agx80n .section-wrapper .cards-wrapper .skill-card .title.svelte-1agx80n{font-size:32px;line-height:64px}}",
  map: '{"version":3,"file":"skillCard.svelte","sources":["skillCard.svelte"],"sourcesContent":["<script lang=\\"ts\\">import Chip from \\"./chip.svelte\\";\\nconst skillCards = [\\n    { title: \\"Agriculture\\", icon: \\"grocery\\" },\\n    { title: \\"Carpentry\\", icon: \\"handyman\\" },\\n    { title: \\"Tailoring\\", icon: \\"conveyor_belt\\" }\\n];\\n<\/script>\\n\\n<section class=\\"skill-cards\\">\\n\\t<div class=\\"section-wrapper\\">\\n\\t\\t<Chip chipText=\\"our skills\\" chipIcon=\\"verified\\" chipColor=\\"yellow\\" />\\n\\n\\t\\t<div class=\\"cards-wrapper\\">\\n\\t\\t\\t{#each skillCards as skill}\\n\\t\\t\\t\\t<article class=\\"skill-card\\">\\n\\t\\t\\t\\t\\t<span class=\\"material-symbols-sharp\\">{skill.icon}</span>\\n\\t\\t\\t\\t\\t<h4 class=\\"title\\">{skill.title}</h4>\\n\\t\\t\\t\\t</article>\\n\\t\\t\\t{/each}\\n\\t\\t</div>\\n\\t</div>\\n</section>\\n\\n<style lang=\\"scss\\">.skill-cards {\\n  padding: 32px 20px;\\n}\\n.skill-cards .section-wrapper {\\n  max-width: 1440px;\\n  margin-inline: auto;\\n}\\n.skill-cards .section-wrapper .cards-wrapper {\\n  display: grid;\\n  margin-block-start: 32px;\\n  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));\\n  gap: 16px;\\n}\\n@media (min-width: 768px) {\\n  .skill-cards .section-wrapper .cards-wrapper {\\n    margin-block-start: 64px;\\n    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\\n    gap: 32px;\\n  }\\n}\\n.skill-cards .section-wrapper .cards-wrapper .skill-card {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  gap: 16px;\\n  border-radius: 16px;\\n  padding: 20px;\\n  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;\\n}\\n.skill-cards .section-wrapper .cards-wrapper .skill-card:nth-child(1) {\\n  color: rgb(66.9914893617, 114.1063829787, 58.8936170213);\\n  background-color: rgb(220.3787234043, 235.7659574468, 217.7340425532);\\n}\\n.skill-cards .section-wrapper .cards-wrapper .skill-card:nth-child(2) {\\n  color: rgb(36.625, 67.2877906977, 109.875);\\n  background-color: rgb(192.75, 210.1220930233, 234.25);\\n}\\n.skill-cards .section-wrapper .cards-wrapper .skill-card:nth-child(3) {\\n  color: rgb(185.8301886792, 22.1886792453, 10.1698113208);\\n  background-color: rgb(253.2617924528, 225.2924528302, 223.2382075472);\\n}\\n.skill-cards .section-wrapper .cards-wrapper .skill-card .material-symbols-sharp {\\n  font-size: 64px;\\n  font-weight: 500;\\n}\\n.skill-cards .section-wrapper .cards-wrapper .skill-card .title {\\n  font-size: 24px;\\n  font-weight: 500;\\n}\\n@media (min-width: 768px) {\\n  .skill-cards .section-wrapper .cards-wrapper .skill-card .title {\\n    font-size: 32px;\\n    line-height: 64px;\\n  }\\n}</style>\\n"],"names":[],"mappings":"AAuBmB,0CAAa,CAC9B,OAAO,CAAE,IAAI,CAAC,IAChB,CACA,2BAAY,CAAC,+BAAiB,CAC5B,SAAS,CAAE,MAAM,CACjB,aAAa,CAAE,IACjB,CACA,2BAAY,CAAC,gBAAgB,CAAC,6BAAe,CAC3C,OAAO,CAAE,IAAI,CACb,kBAAkB,CAAE,IAAI,CACxB,qBAAqB,CAAE,OAAO,QAAQ,CAAC,CAAC,OAAO,KAAK,CAAC,CAAC,GAAG,CAAC,CAAC,CAC3D,GAAG,CAAE,IACP,CACA,MAAO,YAAY,KAAK,CAAE,CACxB,2BAAY,CAAC,gBAAgB,CAAC,6BAAe,CAC3C,kBAAkB,CAAE,IAAI,CACxB,qBAAqB,CAAE,OAAO,QAAQ,CAAC,CAAC,OAAO,KAAK,CAAC,CAAC,GAAG,CAAC,CAAC,CAC3D,GAAG,CAAE,IACP,CACF,CACA,2BAAY,CAAC,gBAAgB,CAAC,cAAc,CAAC,0BAAY,CACvD,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,WAAW,CAAE,MAAM,CACnB,GAAG,CAAE,IAAI,CACT,aAAa,CAAE,IAAI,CACnB,OAAO,CAAE,IAAI,CACb,UAAU,CAAE,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,GAAG,CAAC,IAC/C,CACA,2BAAY,CAAC,gBAAgB,CAAC,cAAc,CAAC,0BAAW,WAAW,CAAC,CAAE,CACpE,KAAK,CAAE,IAAI,aAAa,CAAC,CAAC,cAAc,CAAC,CAAC,aAAa,CAAC,CACxD,gBAAgB,CAAE,IAAI,cAAc,CAAC,CAAC,cAAc,CAAC,CAAC,cAAc,CACtE,CACA,2BAAY,CAAC,gBAAgB,CAAC,cAAc,CAAC,0BAAW,WAAW,CAAC,CAAE,CACpE,KAAK,CAAE,IAAI,MAAM,CAAC,CAAC,aAAa,CAAC,CAAC,OAAO,CAAC,CAC1C,gBAAgB,CAAE,IAAI,MAAM,CAAC,CAAC,cAAc,CAAC,CAAC,MAAM,CACtD,CACA,2BAAY,CAAC,gBAAgB,CAAC,cAAc,CAAC,0BAAW,WAAW,CAAC,CAAE,CACpE,KAAK,CAAE,IAAI,cAAc,CAAC,CAAC,aAAa,CAAC,CAAC,aAAa,CAAC,CACxD,gBAAgB,CAAE,IAAI,cAAc,CAAC,CAAC,cAAc,CAAC,CAAC,cAAc,CACtE,CACA,2BAAY,CAAC,gBAAgB,CAAC,cAAc,CAAC,WAAW,CAAC,sCAAwB,CAC/E,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,GACf,CACA,2BAAY,CAAC,gBAAgB,CAAC,cAAc,CAAC,WAAW,CAAC,qBAAO,CAC9D,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,GACf,CACA,MAAO,YAAY,KAAK,CAAE,CACxB,2BAAY,CAAC,gBAAgB,CAAC,cAAc,CAAC,WAAW,CAAC,qBAAO,CAC9D,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,IACf,CACF"}'
};
const SkillCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const skillCards = [
    { title: "Agriculture", icon: "grocery" },
    { title: "Carpentry", icon: "handyman" },
    {
      title: "Tailoring",
      icon: "conveyor_belt"
    }
  ];
  $$result.css.add(css);
  return `<section class="skill-cards svelte-1agx80n"><div class="section-wrapper svelte-1agx80n">${validate_component(Chip, "Chip").$$render(
    $$result,
    {
      chipText: "our skills",
      chipIcon: "verified",
      chipColor: "yellow"
    },
    {},
    {}
  )} <div class="cards-wrapper svelte-1agx80n">${each(skillCards, (skill) => {
    return `<article class="skill-card svelte-1agx80n"><span class="material-symbols-sharp svelte-1agx80n">${escape(skill.icon)}</span> <h4 class="title svelte-1agx80n">${escape(skill.title)}</h4> </article>`;
  })}</div></div> </section>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $trainingFaqs, $$unsubscribe_trainingFaqs;
  $$unsubscribe_trainingFaqs = subscribe(trainingFaqs, (value) => $trainingFaqs = value);
  $$unsubscribe_trainingFaqs();
  return `${$$result.head += `<!-- HEAD_svelte-1ulhdv1_START -->${$$result.title = `<title>Vocation</title>`, ""}<!-- HEAD_svelte-1ulhdv1_END -->`, ""} <main>${validate_component(ContentBlock, "ContentBlock").$$render(
    $$result,
    {
      heroBlock: true,
      contentChipColor: "red",
      contentChipText: "enabling self-sufficiency",
      contentChipIcon: "garden_cart",
      contentMedia: "/images/vocation-hero.webp",
      contentTitleHighlight: "skills",
      contentTitle: " Practical Skills for Independence and Growth ",
      contentDescription: "\n      Our vocational training programs are designed to equip orphans\n      and vulnerable individuals with essential skills. By focusing on practical education,\n      we aim to enhance their socio-economic conditions and foster independence.\n    "
    },
    {},
    {}
  )} ${validate_component(SkillCard, "SkillCard").$$render($$result, {}, {}, {})} ${validate_component(Faq, "Faq").$$render(
    $$result,
    {
      faqs: $trainingFaqs,
      desc: "Find answers to your questions about our training programs and how to get involved."
    },
    {},
    {}
  )}</main>`;
});
export {
  Page as default
};
