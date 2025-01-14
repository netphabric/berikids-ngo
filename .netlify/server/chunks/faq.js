import { w as writable } from "./index.js";
import { c as create_ssr_component, v as validate_component, b as escape, e as each } from "./ssr.js";
import { C as Chip } from "./chip.js";
const homeFaqs = writable([
  {
    id: 1,
    question: "How can I contact you?",
    ans: "You can reach us via email at Berikidsngo@gmx.de or call us at +237 653 176 545. Our office hours are Monday to Friday, 9 AM to 5 PM. We look forward to hearing from you!",
    isOpen: true
  },
  {
    id: 2,
    question: "Can I visit your office?",
    ans: "Yes, we welcome visitors! Please schedule an appointment in advance to ensure someone is available to meet with you. Our office is located at 123 NGO Lane, City, State.",
    isOpen: false
  },
  {
    id: 3,
    question: "How can I volunteer?",
    ans: "Volunteering with us is easy! Fill out the volunteer application form on our website, and we will get back to you with opportunities that match your skills. Your support makes a difference!",
    isOpen: false
  },
  {
    id: 4,
    question: "What programs do you offer?",
    ans: "We offer various programs focused on education, vocational training, and community development. Our initiatives aim to empower orphans and vulnerable individuals in Cameroon. Visit our vocation-training and IT-education pages for more details.",
    isOpen: false
  },
  {
    id: 5,
    question: "How can i volunteer?",
    ans: "Donating is simple! You can make a one-time or recurring donation through our website's donation page. Every contribution helps us further our mission and support those in need.",
    isOpen: false
  }
]);
const trainingFaqs = writable([
  {
    id: 1,
    question: "Who is eligible?",
    ans: "Our training programs are open to orphans, single mothers, and vulnerable children. We aim to empower those in need by providing essential skills. Eligibility is determined based on individual circumstances and our assessment process.",
    isOpen: true
  },
  {
    id: 2,
    question: "What is the duration?",
    ans: "The duration of our training programs varies based on the specific skill being taught. Typically, programs last between three to six months. Participants can expect a comprehensive curriculum designed to enhance their employability.",
    isOpen: false
  },
  {
    id: 3,
    question: "How to apply?",
    ans: "To apply for our training programs, please fill out the contact form on our website. After submission, our team will review your application and contact you for further steps. We encourage all eligible individuals to apply.",
    isOpen: false
  },
  {
    id: 4,
    question: "What skills are taught?",
    ans: "Our programs cover a range of skills, including tailoring, computer literacy, and agricultural practices. We focus on practical skills that can lead to sustainable employment. Each program is tailored to meet the needs of the community.",
    isOpen: false
  },
  {
    id: 5,
    question: "Are there any fees?",
    ans: "Our vocational training programs are offered at no cost to participants. We believe in providing equal opportunities for all, regardless of financial status. Donations and grants support our mission to empower the community.",
    isOpen: false
  }
]);
const css = {
  code: '@property --angle{syntax:"<angle>";initial-value:90deg;inherits:true}.faqs-root.svelte-11prnl2.svelte-11prnl2{padding:2rem 1.25rem}.faqs-root.svelte-11prnl2 .faq-wrapper.svelte-11prnl2{max-width:1440px;margin-inline:auto;display:flex;flex-direction:column;gap:2rem}.faqs-root.svelte-11prnl2 .faq-wrapper .faq-header.svelte-11prnl2{display:flex;flex-direction:column;margin-block-start:2rem;gap:1rem}.faqs-root.svelte-11prnl2 .faq-wrapper .faq-header .faq-title.svelte-11prnl2{font-size:2rem;font-weight:500}@media(min-width: 48rem){.faqs-root.svelte-11prnl2 .faq-wrapper .faq-header .faq-title.svelte-11prnl2{font-size:2.5rem;line-height:40px}}@media(min-width: 64rem){.faqs-root.svelte-11prnl2 .faq-wrapper .faq-header .faq-title.svelte-11prnl2{font-size:3rem}}.faqs-root.svelte-11prnl2 .faq-wrapper .faq-header .faq-desc.svelte-11prnl2{font-size:0.875rem;font-weight:400;opacity:0.6}@media(min-width: 48rem){.faqs-root.svelte-11prnl2 .faq-wrapper .faq-header .faq-desc.svelte-11prnl2{line-height:2rem;font-size:1rem}}.faqs-root.svelte-11prnl2 .faq-wrapper .faq-container.svelte-11prnl2{display:flex;flex-direction:column;border-radius:16px}.faqs-root.svelte-11prnl2 .faq-wrapper .faq-container .faq.svelte-11prnl2{display:flex;flex-direction:column;box-shadow:rgba(0, 0, 0, 0.1) 0px 4px 12px}.faqs-root.svelte-11prnl2 .faq-wrapper .faq-container .faq .faq-question.svelte-11prnl2{display:flex;justify-content:space-between;align-items:center;cursor:pointer;color:inherit;font-size:0.875rem;font-weight:600;padding:1rem 1.25rem;border:transparent;background:transparent}@media(min-width: 48rem){.faqs-root.svelte-11prnl2 .faq-wrapper .faq-container .faq .faq-question.svelte-11prnl2{font-size:1rem;line-height:32px}}.faqs-root.svelte-11prnl2 .faq-wrapper .faq-container .faq .faq-question .faq-icon.svelte-11prnl2{display:grid;place-items:center}.faqs-root.svelte-11prnl2 .faq-wrapper .faq-container .faq .faq-question .faq-icon span.svelte-11prnl2{font-size:500}.faqs-root.svelte-11prnl2 .faq-wrapper .faq-container .faq .answer.svelte-11prnl2{padding:1rem;font-size:0.875rem;font-weight:400;opacity:0.5}@media(min-width: 48rem){.faqs-root.svelte-11prnl2 .faq-wrapper .faq-container .faq .answer.svelte-11prnl2{font-size:1rem;line-height:2rem}}',
  map: '{"version":3,"file":"faq.svelte","sources":["faq.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { slide } from \\"svelte/transition\\";\\nimport { cubicOut } from \\"svelte/easing\\";\\nimport Chip from \\"$lib/components/chip.svelte\\";\\nexport let desc = \\"\\";\\nexport let faqs = [];\\nconst handleShowFaqAns = (id) => {\\n    faqs.forEach((faq) => {\\n        if (faq.id !== id)\\n            faq.isOpen = false;\\n    });\\n    const faq = faqs.findIndex((faq) => faq.id === id);\\n    faqs[faq].isOpen = !faqs[faq].isOpen;\\n};\\n<\/script>\\n\\n<section class=\\"faqs-root\\" id=\\"faqs\\">\\n\\t<div class=\\"faq-wrapper\\">\\n\\t\\t<Chip chipText=\\"most asked\\" chipIcon=\\"help\\" chipColor=\\"blue\\" />\\n\\t\\t<div class=\\"faq-header\\">\\n\\t\\t\\t<h2 class=\\"faq-title\\">FAQs</h2>\\n\\t\\t\\t<p class=\\"faq-desc\\">{desc}</p>\\n\\t\\t</div>\\n\\n\\t\\t<div class=\\"faq-container\\">\\n\\t\\t\\t{#each faqs as faq}\\n\\t\\t\\t\\t<article class=\\"faq\\">\\n\\t\\t\\t\\t\\t<button class=\\"faq-question\\" on:click={() => handleShowFaqAns(faq.id)}>\\n\\t\\t\\t\\t\\t\\t<span>{faq.question}</span>\\n\\n\\t\\t\\t\\t\\t\\t<div class=\\"faq-icon\\">\\n\\t\\t\\t\\t\\t\\t\\t<span class=\\"material-symbols-sharp\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t>{faq.isOpen ? \\"keyboard_arrow_up\\" : \\"keyboard_arrow_down\\"}</span\\n\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t</button>\\n\\n\\t\\t\\t\\t\\t{#if faq.isOpen}\\n\\t\\t\\t\\t\\t\\t<p class=\\"answer\\" transition:slide={{ duration: 100, easing: cubicOut }}>\\n\\t\\t\\t\\t\\t\\t\\t{faq.ans}\\n\\t\\t\\t\\t\\t\\t</p>\\n\\t\\t\\t\\t\\t{/if}\\n\\t\\t\\t\\t</article>\\n\\t\\t\\t{/each}\\n\\t\\t</div>\\n\\t</div>\\n</section>\\n\\n<style lang=\\"scss\\">@property --angle {\\n  syntax: \\"<angle>\\";\\n  initial-value: 90deg;\\n  inherits: true;\\n}\\n.faqs-root {\\n  padding: 2rem 1.25rem;\\n}\\n.faqs-root .faq-wrapper {\\n  max-width: 1440px;\\n  margin-inline: auto;\\n  display: flex;\\n  flex-direction: column;\\n  gap: 2rem;\\n}\\n.faqs-root .faq-wrapper .faq-header {\\n  display: flex;\\n  flex-direction: column;\\n  margin-block-start: 2rem;\\n  gap: 1rem;\\n}\\n.faqs-root .faq-wrapper .faq-header .faq-title {\\n  font-size: 2rem;\\n  font-weight: 500;\\n}\\n@media (min-width: 48rem) {\\n  .faqs-root .faq-wrapper .faq-header .faq-title {\\n    font-size: 2.5rem;\\n    line-height: 40px;\\n  }\\n}\\n@media (min-width: 64rem) {\\n  .faqs-root .faq-wrapper .faq-header .faq-title {\\n    font-size: 3rem;\\n  }\\n}\\n.faqs-root .faq-wrapper .faq-header .faq-desc {\\n  font-size: 0.875rem;\\n  font-weight: 400;\\n  opacity: 0.6;\\n}\\n@media (min-width: 48rem) {\\n  .faqs-root .faq-wrapper .faq-header .faq-desc {\\n    line-height: 2rem;\\n    font-size: 1rem;\\n  }\\n}\\n.faqs-root .faq-wrapper .faq-container {\\n  display: flex;\\n  flex-direction: column;\\n  border-radius: 16px;\\n}\\n.faqs-root .faq-wrapper .faq-container .faq {\\n  display: flex;\\n  flex-direction: column;\\n  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;\\n}\\n.faqs-root .faq-wrapper .faq-container .faq .faq-question {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  cursor: pointer;\\n  color: inherit;\\n  font-size: 0.875rem;\\n  font-weight: 600;\\n  padding: 1rem 1.25rem;\\n  border: transparent;\\n  background: transparent;\\n}\\n@media (min-width: 48rem) {\\n  .faqs-root .faq-wrapper .faq-container .faq .faq-question {\\n    font-size: 1rem;\\n    line-height: 32px;\\n  }\\n}\\n.faqs-root .faq-wrapper .faq-container .faq .faq-question .faq-icon {\\n  display: grid;\\n  place-items: center;\\n}\\n.faqs-root .faq-wrapper .faq-container .faq .faq-question .faq-icon span {\\n  font-size: 500;\\n}\\n.faqs-root .faq-wrapper .faq-container .faq .answer {\\n  padding: 1rem;\\n  font-size: 0.875rem;\\n  font-weight: 400;\\n  opacity: 0.5;\\n}\\n@media (min-width: 48rem) {\\n  .faqs-root .faq-wrapper .faq-container .faq .answer {\\n    font-size: 1rem;\\n    line-height: 2rem;\\n  }\\n}</style>\\n"],"names":[],"mappings":"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"}'
};
const Faq = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { desc = "" } = $$props;
  let { faqs = [] } = $$props;
  if ($$props.desc === void 0 && $$bindings.desc && desc !== void 0) $$bindings.desc(desc);
  if ($$props.faqs === void 0 && $$bindings.faqs && faqs !== void 0) $$bindings.faqs(faqs);
  $$result.css.add(css);
  return `<section class="faqs-root svelte-11prnl2" id="faqs"><div class="faq-wrapper svelte-11prnl2">${validate_component(Chip, "Chip").$$render(
    $$result,
    {
      chipText: "most asked",
      chipIcon: "help",
      chipColor: "blue"
    },
    {},
    {}
  )} <div class="faq-header svelte-11prnl2"><h2 class="faq-title svelte-11prnl2" data-svelte-h="svelte-1obou9r">FAQs</h2> <p class="faq-desc svelte-11prnl2">${escape(desc)}</p></div> <div class="faq-container svelte-11prnl2">${each(faqs, (faq) => {
    return `<article class="faq svelte-11prnl2"><button class="faq-question svelte-11prnl2"><span class="svelte-11prnl2">${escape(faq.question)}</span> <div class="faq-icon svelte-11prnl2"><span class="material-symbols-sharp svelte-11prnl2">${escape(faq.isOpen ? "keyboard_arrow_up" : "keyboard_arrow_down")}</span> </div></button> ${faq.isOpen ? `<p class="answer svelte-11prnl2">${escape(faq.ans)} </p>` : ``} </article>`;
  })}</div></div> </section>`;
});
export {
  Faq as F,
  homeFaqs as h,
  trainingFaqs as t
};
