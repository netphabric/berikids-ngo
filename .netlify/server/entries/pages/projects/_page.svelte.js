import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { C as ContentBlock } from "../../../chunks/contentBlock.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main>${validate_component(ContentBlock, "ContentBlock").$$render(
    $$result,
    {
      heroBlock: true,
      flexReverse: true,
      contentChipColor: "yellow",
      contentChipText: "How we help",
      contentChipIcon: "beach_access",
      contentMedia: "/images/project-hero.webp",
      contentTitleHighlight: "diverse projects",
      contentTitle: "Impacting lives through our diverse projects",
      contentDescription: "\n      We work in partnership with communities to design and implement projects\n      that address their most pressing needs. Our focus areas include socio-economic\n      improvement through collaborative initiatives, providing access to quality education\n      that empowers individuals and strengthens communities, and ensuring access to essential\n      resources that promote health and well-being\n    "
    },
    {},
    {}
  )} ${validate_component(ContentBlock, "ContentBlock").$$render(
    $$result,
    {
      blockLayout: true,
      contentChipColor: "red",
      contentChipText: "How you can help",
      contentChipIcon: "mountain_flag",
      contentTitleHighlight: "diverse projects",
      contentTitle: "Support our diverse projects",
      contentDescription: "\n      Join us in making a difference through donations,\n      volunteering, or forming valuable partnerships.\n    ",
      ctaButtons: [
        { label: "Volunteer", icon: "handshake" },
        { label: "Partnership", icon: "verified" }
      ]
    },
    {},
    {}
  )} ${validate_component(ContentBlock, "ContentBlock").$$render(
    $$result,
    {
      flexReverse: true,
      contentChipColor: "green",
      contentChipText: "water access",
      contentChipIcon: "cleaning_bucket",
      contentMedia: "/images/water-project.webp",
      contentTitleHighlight: "portable water",
      contentTitle: "the Portable Water Project in the North West of Cameroon",
      contentDescription: " \n      Access to clean water is a fundamental human right.\n      Our project aims to provide sustainable potable water solutions to\n      underserved communities in the North West Province of Cameroon.\n    "
    },
    {},
    {}
  )} ${validate_component(ContentBlock, "ContentBlock").$$render(
    $$result,
    {
      contentChipColor: "blue",
      contentChipText: "keeping the faith alive",
      contentChipIcon: "church",
      contentMedia: "/images/project-morale.webp",
      contentTitleHighlight: "Moral Instruction",
      contentTitle: "Christian Counseling and Moral Instruction Initiatives",
      contentDescription: "\n      We create supportive Christian environments where children can learn and grow in faith.\n      Our programs integrate biblical instruction, mentorship, and practical support to foster\n      spiritual development and equip children with the tools they need to navigate life's challenges.\n    "
    },
    {},
    {}
  )} ${validate_component(ContentBlock, "ContentBlock").$$render(
    $$result,
    {
      flexReverse: true,
      contentChipColor: "yellow",
      contentChipText: "gathering insights",
      contentChipIcon: "biotech",
      contentMedia: "/images/research-project.webp",
      contentTitleHighlight: "research",
      contentTitle: "Collaborative Research",
      contentDescription: "\n      Our featured project focuses on conducting vital social, population,\n      and Christian research to address the needs of vulnerable communities.\n      By partnering with national and international organizations, we aim to gather\n      insights that drive impactful change.\n    "
    },
    {},
    {}
  )}</main>`;
});
export {
  Page as default
};
