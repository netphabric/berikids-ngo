import { c as create_ssr_component, v as validate_component, b as escape, a as add_attribute, e as each, d as subscribe } from "../../chunks/ssr.js";
import { h as homeFaqs, F as Faq } from "../../chunks/faq.js";
import { C as Chip } from "../../chunks/chip.js";
import { C as ContentBlock } from "../../chunks/contentBlock.js";
const css$1 = {
  code: ".testimonialsSection.svelte-13h10rr.svelte-13h10rr{padding:32px 20px}.testimonialsSection.svelte-13h10rr .testimony-wrapper.svelte-13h10rr{max-width:1440px;margin-inline:auto}.testimonialsSection.svelte-13h10rr .testimony-wrapper .testimony-card.svelte-13h10rr{display:flex;flex-direction:column;align-items:center;margin-block-start:32px;padding-block:32px;gap:16px}.testimonialsSection.svelte-13h10rr .testimony-wrapper .testimony-card .testimony.svelte-13h10rr{margin-inline:auto;text-align:center;font-size:24px;font-weight:400;line-height:32px;opacity:0.8;padding:20px;border-radius:16px}@media(min-width: 768px){.testimonialsSection.svelte-13h10rr .testimony-wrapper .testimony-card .testimony.svelte-13h10rr{max-width:60%}}.testimonialsSection.svelte-13h10rr .testimony-wrapper .testimony-card .avatar.svelte-13h10rr{width:150px;height:150px;border-radius:50%;position:relative;display:grid;place-items:center}@media(min-width: 768px){.testimonialsSection.svelte-13h10rr .testimony-wrapper .testimony-card .avatar.svelte-13h10rr{width:200px;height:200px}}.testimonialsSection.svelte-13h10rr .testimony-wrapper .testimony-card .avatar img.svelte-13h10rr{width:100%;height:100%;border-radius:inherit;object-fit:cover}.testimonialsSection.svelte-13h10rr .testimony-wrapper .testimony-card .avatar .avatar-border.svelte-13h10rr{position:absolute;width:110%;height:110%;border-radius:50%;border:4px dashed #6faf64;animation:svelte-13h10rr-rotate 100s linear infinite}@media(min-width: 768px){.testimonialsSection.svelte-13h10rr .testimony-wrapper .testimony-card .avatar .avatar-border.svelte-13h10rr{border:8px dashed #6faf64}}@keyframes svelte-13h10rr-rotate{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}.testimonialsSection.svelte-13h10rr .testimony-wrapper .testimony-card .author-name.svelte-13h10rr{font-size:24px;font-weight:600;line-height:32px}.testimonialsSection.svelte-13h10rr .testimony-wrapper .testimony-card .author-title.svelte-13h10rr{font-size:18px;line-height:24px;text-align:center;opacity:0.5}@media(min-width: 768px){.testimonialsSection.svelte-13h10rr .testimony-wrapper .testimony-card .author-title.svelte-13h10rr{max-width:40%}}",
  map: `{"version":3,"file":"testimonials.svelte","sources":["testimonials.svelte"],"sourcesContent":["<!-- prettier-ignore -->\\n<script lang=\\"ts\\">import Chip from \\"./chip.svelte\\";\\nexport let authorName = \\"Valery Ayuni\\";\\nexport let authorAvatar = \\"/images/testimony-dp.webp\\";\\nexport let testimonial = \\"I'm one of the first orphans to be educated and empowered by Berikids International and its partners. I'm grateful for their support and guidance.\\";\\nexport let authorTitle = \\"Chief of post @berikids intl mental health unit Nkapa Souza Douala Cameroon.\\";\\n<\/script>\\n\\n<section class=\\"testimonialsSection\\">\\n\\t<div class=\\"testimony-wrapper\\">\\n\\t\\t<Chip chipText=\\"Testimony\\" chipIcon=\\"mic\\" chipColor=\\"red\\" />\\n\\n\\t\\t<article class=\\"testimony-card\\">\\n\\t\\t\\t<h2 class=\\"testimony\\">{testimonial}</h2>\\n\\n\\t\\t\\t<div class=\\"avatar\\">\\n\\t\\t\\t\\t<div class=\\"avatar-border\\"></div>\\n\\t\\t\\t\\t<img src={authorAvatar} alt=\\"avatar\\" />\\n\\t\\t\\t</div>\\n\\n\\t\\t\\t<h4 class=\\"author-name\\">{authorName}</h4>\\n\\t\\t\\t<p class=\\"author-title\\">{authorTitle}</p>\\n\\t\\t</article>\\n\\t</div>\\n</section>\\n\\n<style lang=\\"scss\\">.testimonialsSection {\\n  padding: 32px 20px;\\n}\\n.testimonialsSection .testimony-wrapper {\\n  max-width: 1440px;\\n  margin-inline: auto;\\n}\\n.testimonialsSection .testimony-wrapper .testimony-card {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  margin-block-start: 32px;\\n  padding-block: 32px;\\n  gap: 16px;\\n}\\n.testimonialsSection .testimony-wrapper .testimony-card .testimony {\\n  margin-inline: auto;\\n  text-align: center;\\n  font-size: 24px;\\n  font-weight: 400;\\n  line-height: 32px;\\n  opacity: 0.8;\\n  padding: 20px;\\n  border-radius: 16px;\\n}\\n@media (min-width: 768px) {\\n  .testimonialsSection .testimony-wrapper .testimony-card .testimony {\\n    max-width: 60%;\\n  }\\n}\\n.testimonialsSection .testimony-wrapper .testimony-card .avatar {\\n  width: 150px;\\n  height: 150px;\\n  border-radius: 50%;\\n  position: relative;\\n  display: grid;\\n  place-items: center;\\n}\\n@media (min-width: 768px) {\\n  .testimonialsSection .testimony-wrapper .testimony-card .avatar {\\n    width: 200px;\\n    height: 200px;\\n  }\\n}\\n.testimonialsSection .testimony-wrapper .testimony-card .avatar img {\\n  width: 100%;\\n  height: 100%;\\n  border-radius: inherit;\\n  object-fit: cover;\\n}\\n.testimonialsSection .testimony-wrapper .testimony-card .avatar .avatar-border {\\n  position: absolute;\\n  width: 110%;\\n  height: 110%;\\n  border-radius: 50%;\\n  border: 4px dashed #6faf64;\\n  animation: rotate 100s linear infinite;\\n}\\n@media (min-width: 768px) {\\n  .testimonialsSection .testimony-wrapper .testimony-card .avatar .avatar-border {\\n    border: 8px dashed #6faf64;\\n  }\\n}\\n@keyframes rotate {\\n  from {\\n    transform: rotate(0deg);\\n  }\\n  to {\\n    transform: rotate(360deg);\\n  }\\n}\\n.testimonialsSection .testimony-wrapper .testimony-card .author-name {\\n  font-size: 24px;\\n  font-weight: 600;\\n  line-height: 32px;\\n}\\n.testimonialsSection .testimony-wrapper .testimony-card .author-title {\\n  font-size: 18px;\\n  line-height: 24px;\\n  text-align: center;\\n  opacity: 0.5;\\n}\\n@media (min-width: 768px) {\\n  .testimonialsSection .testimony-wrapper .testimony-card .author-title {\\n    max-width: 40%;\\n  }\\n}</style>\\n"],"names":[],"mappings":"AA0BmB,kDAAqB,CACtC,OAAO,CAAE,IAAI,CAAC,IAChB,CACA,mCAAoB,CAAC,iCAAmB,CACtC,SAAS,CAAE,MAAM,CACjB,aAAa,CAAE,IACjB,CACA,mCAAoB,CAAC,kBAAkB,CAAC,8BAAgB,CACtD,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,WAAW,CAAE,MAAM,CACnB,kBAAkB,CAAE,IAAI,CACxB,aAAa,CAAE,IAAI,CACnB,GAAG,CAAE,IACP,CACA,mCAAoB,CAAC,kBAAkB,CAAC,eAAe,CAAC,yBAAW,CACjE,aAAa,CAAE,IAAI,CACnB,UAAU,CAAE,MAAM,CAClB,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,GAAG,CAChB,WAAW,CAAE,IAAI,CACjB,OAAO,CAAE,GAAG,CACZ,OAAO,CAAE,IAAI,CACb,aAAa,CAAE,IACjB,CACA,MAAO,YAAY,KAAK,CAAE,CACxB,mCAAoB,CAAC,kBAAkB,CAAC,eAAe,CAAC,yBAAW,CACjE,SAAS,CAAE,GACb,CACF,CACA,mCAAoB,CAAC,kBAAkB,CAAC,eAAe,CAAC,sBAAQ,CAC9D,KAAK,CAAE,KAAK,CACZ,MAAM,CAAE,KAAK,CACb,aAAa,CAAE,GAAG,CAClB,QAAQ,CAAE,QAAQ,CAClB,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MACf,CACA,MAAO,YAAY,KAAK,CAAE,CACxB,mCAAoB,CAAC,kBAAkB,CAAC,eAAe,CAAC,sBAAQ,CAC9D,KAAK,CAAE,KAAK,CACZ,MAAM,CAAE,KACV,CACF,CACA,mCAAoB,CAAC,kBAAkB,CAAC,eAAe,CAAC,OAAO,CAAC,kBAAI,CAClE,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,aAAa,CAAE,OAAO,CACtB,UAAU,CAAE,KACd,CACA,mCAAoB,CAAC,kBAAkB,CAAC,eAAe,CAAC,OAAO,CAAC,6BAAe,CAC7E,QAAQ,CAAE,QAAQ,CAClB,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,aAAa,CAAE,GAAG,CAClB,MAAM,CAAE,GAAG,CAAC,MAAM,CAAC,OAAO,CAC1B,SAAS,CAAE,qBAAM,CAAC,IAAI,CAAC,MAAM,CAAC,QAChC,CACA,MAAO,YAAY,KAAK,CAAE,CACxB,mCAAoB,CAAC,kBAAkB,CAAC,eAAe,CAAC,OAAO,CAAC,6BAAe,CAC7E,MAAM,CAAE,GAAG,CAAC,MAAM,CAAC,OACrB,CACF,CACA,WAAW,qBAAO,CAChB,IAAK,CACH,SAAS,CAAE,OAAO,IAAI,CACxB,CACA,EAAG,CACD,SAAS,CAAE,OAAO,MAAM,CAC1B,CACF,CACA,mCAAoB,CAAC,kBAAkB,CAAC,eAAe,CAAC,2BAAa,CACnE,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,GAAG,CAChB,WAAW,CAAE,IACf,CACA,mCAAoB,CAAC,kBAAkB,CAAC,eAAe,CAAC,4BAAc,CACpE,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,IAAI,CACjB,UAAU,CAAE,MAAM,CAClB,OAAO,CAAE,GACX,CACA,MAAO,YAAY,KAAK,CAAE,CACxB,mCAAoB,CAAC,kBAAkB,CAAC,eAAe,CAAC,4BAAc,CACpE,SAAS,CAAE,GACb,CACF"}`
};
const Testimonials = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { authorName = "Valery Ayuni" } = $$props;
  let { authorAvatar = "/images/testimony-dp.webp" } = $$props;
  let { testimonial = "I'm one of the first orphans to be educated and empowered by Berikids International and its partners. I'm grateful for their support and guidance." } = $$props;
  let { authorTitle = "Chief of post @berikids intl mental health unit Nkapa Souza Douala Cameroon." } = $$props;
  if ($$props.authorName === void 0 && $$bindings.authorName && authorName !== void 0) $$bindings.authorName(authorName);
  if ($$props.authorAvatar === void 0 && $$bindings.authorAvatar && authorAvatar !== void 0) $$bindings.authorAvatar(authorAvatar);
  if ($$props.testimonial === void 0 && $$bindings.testimonial && testimonial !== void 0) $$bindings.testimonial(testimonial);
  if ($$props.authorTitle === void 0 && $$bindings.authorTitle && authorTitle !== void 0) $$bindings.authorTitle(authorTitle);
  $$result.css.add(css$1);
  return `  <section class="testimonialsSection svelte-13h10rr"><div class="testimony-wrapper svelte-13h10rr">${validate_component(Chip, "Chip").$$render(
    $$result,
    {
      chipText: "Testimony",
      chipIcon: "mic",
      chipColor: "red"
    },
    {},
    {}
  )} <article class="testimony-card svelte-13h10rr"><h2 class="testimony svelte-13h10rr">${escape(testimonial)}</h2> <div class="avatar svelte-13h10rr"><div class="avatar-border svelte-13h10rr"></div> <img${add_attribute("src", authorAvatar, 0)} alt="avatar" class="svelte-13h10rr"></div> <h4 class="author-name svelte-13h10rr">${escape(authorName)}</h4> <p class="author-title svelte-13h10rr">${escape(authorTitle)}</p></article></div> </section>`;
});
const css = {
  code: ".contact-details.svelte-wgyby9.svelte-wgyby9{padding:32px}.contact-details.svelte-wgyby9 .contact-details-wrapper.svelte-wgyby9{max-width:1440px;margin-inline:auto}.contact-details.svelte-wgyby9 .contact-details-wrapper .contact-cards-wrapper.svelte-wgyby9{display:grid;margin-block-start:64px;grid-template-columns:repeat(auto-fit, minmax(250px, 1fr));gap:32px}.contact-details.svelte-wgyby9 .contact-details-wrapper .contact-cards-wrapper .contact-card.svelte-wgyby9{display:flex;flex-direction:column;align-items:center;gap:16px;border-radius:16px;padding:20px;box-shadow:rgba(149, 157, 165, 0.2) 0px 8px 24px}.contact-details.svelte-wgyby9 .contact-details-wrapper .contact-cards-wrapper .contact-card.svelte-wgyby9:nth-child(1){color:rgb(66.9914893617, 114.1063829787, 58.8936170213);background-color:rgb(220.3787234043, 235.7659574468, 217.7340425532)}.contact-details.svelte-wgyby9 .contact-details-wrapper .contact-cards-wrapper .contact-card.svelte-wgyby9:nth-child(2){color:rgb(36.625, 67.2877906977, 109.875);background-color:rgb(192.75, 210.1220930233, 234.25)}.contact-details.svelte-wgyby9 .contact-details-wrapper .contact-cards-wrapper .contact-card.svelte-wgyby9:nth-child(3){color:rgb(185.8301886792, 22.1886792453, 10.1698113208);background-color:rgb(253.2617924528, 225.2924528302, 223.2382075472)}.contact-details.svelte-wgyby9 .contact-details-wrapper .contact-cards-wrapper .contact-card .contact-title.svelte-wgyby9,.contact-details.svelte-wgyby9 .contact-details-wrapper .contact-cards-wrapper .contact-card .contact-icon.svelte-wgyby9{font-size:52px;font-weight:500}.contact-details.svelte-wgyby9 .contact-details-wrapper .contact-cards-wrapper .contact-card .contact.svelte-wgyby9{font-weight:600}",
  map: '{"version":3,"file":"contactDetails.svelte","sources":["contactDetails.svelte"],"sourcesContent":["<script lang=\\"ts\\">import Chip from \\"./chip.svelte\\";\\nconst details = [\\n    { icon: \\"alternate_email\\", label: \\"Mail\\", contact: \\"Berikidsngo@gmx.de\\" },\\n    { label: \\"Office\\", contact: \\"123 office, location\\", icon: \\"apartment\\" },\\n    { icon: \\"add_call\\", label: \\"Phone\\", contact: \\"+237 653 176 545\\" }\\n];\\n<\/script>\\n\\n<section class=\\"contact-details\\">\\n\\t<div class=\\"contact-details-wrapper\\">\\n\\t\\t<Chip chipText=\\"How to reach us\\" chipIcon=\\"thread_unread\\" chipColor=\\"yellow\\" />\\n\\n\\t\\t<div class=\\"contact-cards-wrapper\\">\\n\\t\\t\\t{#each details as detail}\\n\\t\\t\\t\\t<article class=\\"contact-card\\">\\n\\t\\t\\t\\t\\t<span class=\\"material-symbols-sharp contact-icon\\">{detail.icon}</span>\\n\\t\\t\\t\\t\\t<h4 class=\\"contact-title\\">{detail.label}</h4>\\n\\t\\t\\t\\t\\t<span class=\\"contact\\">{detail.contact}</span>\\n\\t\\t\\t\\t</article>\\n\\t\\t\\t{/each}\\n\\t\\t</div>\\n\\t</div>\\n</section>\\n\\n<style lang=\\"scss\\">.contact-details {\\n  padding: 32px;\\n}\\n.contact-details .contact-details-wrapper {\\n  max-width: 1440px;\\n  margin-inline: auto;\\n}\\n.contact-details .contact-details-wrapper .contact-cards-wrapper {\\n  display: grid;\\n  margin-block-start: 64px;\\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\\n  gap: 32px;\\n}\\n.contact-details .contact-details-wrapper .contact-cards-wrapper .contact-card {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  gap: 16px;\\n  border-radius: 16px;\\n  padding: 20px;\\n  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;\\n}\\n.contact-details .contact-details-wrapper .contact-cards-wrapper .contact-card:nth-child(1) {\\n  color: rgb(66.9914893617, 114.1063829787, 58.8936170213);\\n  background-color: rgb(220.3787234043, 235.7659574468, 217.7340425532);\\n}\\n.contact-details .contact-details-wrapper .contact-cards-wrapper .contact-card:nth-child(2) {\\n  color: rgb(36.625, 67.2877906977, 109.875);\\n  background-color: rgb(192.75, 210.1220930233, 234.25);\\n}\\n.contact-details .contact-details-wrapper .contact-cards-wrapper .contact-card:nth-child(3) {\\n  color: rgb(185.8301886792, 22.1886792453, 10.1698113208);\\n  background-color: rgb(253.2617924528, 225.2924528302, 223.2382075472);\\n}\\n.contact-details .contact-details-wrapper .contact-cards-wrapper .contact-card .contact-title,\\n.contact-details .contact-details-wrapper .contact-cards-wrapper .contact-card .contact-icon {\\n  font-size: 52px;\\n  font-weight: 500;\\n}\\n.contact-details .contact-details-wrapper .contact-cards-wrapper .contact-card .contact {\\n  font-weight: 600;\\n}</style>\\n"],"names":[],"mappings":"AAwBmB,4CAAiB,CAClC,OAAO,CAAE,IACX,CACA,8BAAgB,CAAC,sCAAyB,CACxC,SAAS,CAAE,MAAM,CACjB,aAAa,CAAE,IACjB,CACA,8BAAgB,CAAC,wBAAwB,CAAC,oCAAuB,CAC/D,OAAO,CAAE,IAAI,CACb,kBAAkB,CAAE,IAAI,CACxB,qBAAqB,CAAE,OAAO,QAAQ,CAAC,CAAC,OAAO,KAAK,CAAC,CAAC,GAAG,CAAC,CAAC,CAC3D,GAAG,CAAE,IACP,CACA,8BAAgB,CAAC,wBAAwB,CAAC,sBAAsB,CAAC,2BAAc,CAC7E,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,WAAW,CAAE,MAAM,CACnB,GAAG,CAAE,IAAI,CACT,aAAa,CAAE,IAAI,CACnB,OAAO,CAAE,IAAI,CACb,UAAU,CAAE,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,GAAG,CAAC,IAC/C,CACA,8BAAgB,CAAC,wBAAwB,CAAC,sBAAsB,CAAC,2BAAa,WAAW,CAAC,CAAE,CAC1F,KAAK,CAAE,IAAI,aAAa,CAAC,CAAC,cAAc,CAAC,CAAC,aAAa,CAAC,CACxD,gBAAgB,CAAE,IAAI,cAAc,CAAC,CAAC,cAAc,CAAC,CAAC,cAAc,CACtE,CACA,8BAAgB,CAAC,wBAAwB,CAAC,sBAAsB,CAAC,2BAAa,WAAW,CAAC,CAAE,CAC1F,KAAK,CAAE,IAAI,MAAM,CAAC,CAAC,aAAa,CAAC,CAAC,OAAO,CAAC,CAC1C,gBAAgB,CAAE,IAAI,MAAM,CAAC,CAAC,cAAc,CAAC,CAAC,MAAM,CACtD,CACA,8BAAgB,CAAC,wBAAwB,CAAC,sBAAsB,CAAC,2BAAa,WAAW,CAAC,CAAE,CAC1F,KAAK,CAAE,IAAI,cAAc,CAAC,CAAC,aAAa,CAAC,CAAC,aAAa,CAAC,CACxD,gBAAgB,CAAE,IAAI,cAAc,CAAC,CAAC,cAAc,CAAC,CAAC,cAAc,CACtE,CACA,8BAAgB,CAAC,wBAAwB,CAAC,sBAAsB,CAAC,aAAa,CAAC,4BAAc,CAC7F,8BAAgB,CAAC,wBAAwB,CAAC,sBAAsB,CAAC,aAAa,CAAC,2BAAc,CAC3F,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,GACf,CACA,8BAAgB,CAAC,wBAAwB,CAAC,sBAAsB,CAAC,aAAa,CAAC,sBAAS,CACtF,WAAW,CAAE,GACf"}'
};
const ContactDetails = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const details = [
    {
      icon: "alternate_email",
      label: "Mail",
      contact: "Berikidsngo@gmx.de"
    },
    {
      label: "Office",
      contact: "123 office, location",
      icon: "apartment"
    },
    {
      icon: "add_call",
      label: "Phone",
      contact: "+237 653 176 545"
    }
  ];
  $$result.css.add(css);
  return `<section class="contact-details svelte-wgyby9"><div class="contact-details-wrapper svelte-wgyby9">${validate_component(Chip, "Chip").$$render(
    $$result,
    {
      chipText: "How to reach us",
      chipIcon: "thread_unread",
      chipColor: "yellow"
    },
    {},
    {}
  )} <div class="contact-cards-wrapper svelte-wgyby9">${each(details, (detail) => {
    return `<article class="contact-card svelte-wgyby9"><span class="material-symbols-sharp contact-icon svelte-wgyby9">${escape(detail.icon)}</span> <h4 class="contact-title svelte-wgyby9">${escape(detail.label)}</h4> <span class="contact svelte-wgyby9">${escape(detail.contact)}</span> </article>`;
  })}</div></div> </section>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $homeFaqs, $$unsubscribe_homeFaqs;
  $$unsubscribe_homeFaqs = subscribe(homeFaqs, (value) => $homeFaqs = value);
  $$unsubscribe_homeFaqs();
  return `${$$result.head += `<!-- HEAD_svelte-1anpopb_START -->${$$result.title = `<title>Home</title>`, ""}<!-- HEAD_svelte-1anpopb_END -->`, ""} <main>${validate_component(ContentBlock, "ContentBlock").$$render(
    $$result,
    {
      heroBlock: true,
      contentChipColor: "blue",
      contentChipText: "misson",
      contentChipIcon: "sign_language",
      contentMedia: "/images/heroImg.webp",
      contentTitleHighlight: "sustainable development",
      contentTitle: "empowering lives through sustainable development initiatives",
      contentDescription: "\n      Our mission is to uplift orphans and vulnerable communities in Cameroon by enhancing their\n      socio-economic conditions and providing essential resources. We focus on education, access to\n      clean water, and spiritual guidance to foster holistic development.\n    "
    },
    {},
    {}
  )} ${validate_component(ContactDetails, "ContactDetails").$$render($$result, {}, {}, {})} ${validate_component(Testimonials, "Testimonials").$$render($$result, {}, {}, {})}  ${validate_component(Faq, "Faq").$$render(
    $$result,
    {
      faqs: $homeFaqs,
      desc: "discover how our NGO is making a difference and how you can help"
    },
    {},
    {}
  )}</main>`;
});
export {
  Page as default
};
