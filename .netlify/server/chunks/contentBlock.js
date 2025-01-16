import { c as create_ssr_component, v as validate_component, e as each, b as escape, a as add_attribute } from "./ssr.js";
import { B as Button } from "./button.js";
import { C as Chip } from "./chip.js";
const highlightText = (sentence, highlight) => {
  const sentenceWords = sentence.toLowerCase().split(" ");
  const highlightWords = highlight.toLowerCase().split(" ");
  const result = [];
  let i = 0;
  while (i < sentenceWords.length) {
    const segment = sentenceWords.slice(i, i + highlightWords.length).join(" ");
    if (segment === highlight.toLowerCase()) {
      result.push({
        text: segment,
        isHighlighted: true
      });
      i += highlightWords.length;
    } else {
      result.push({
        text: sentenceWords[i],
        isHighlighted: false
      });
      i += 1;
    }
  }
  return result;
};
const css = {
  code: '.content-render.svelte-1dtuud4.svelte-1dtuud4{padding:32px 20px}.content-render.svelte-1dtuud4 .content-wrapper.svelte-1dtuud4{display:grid;max-width:1440px;margin-inline:auto;gap:32px;grid-template-areas:"a a" "b b"}.content-render.svelte-1dtuud4 .content-wrapper.flexReverse.svelte-1dtuud4{grid-template-areas:"b b" "a a"}@media(min-width: 840px){.content-render.svelte-1dtuud4 .content-wrapper.flexReverse.svelte-1dtuud4{gap:64px;grid-template-areas:"b b b a a"}}@media(min-width: 840px){.content-render.svelte-1dtuud4 .content-wrapper.svelte-1dtuud4{grid-template-areas:"a a b b b";gap:64px}}.content-render.svelte-1dtuud4 .content-wrapper.blockLayout.svelte-1dtuud4{display:flex;flex-direction:column;align-items:center;justify-content:center}.content-render.svelte-1dtuud4 .content-wrapper.blockLayout .block-content.svelte-1dtuud4,.content-render.svelte-1dtuud4 .content-wrapper.blockLayout .content-cta-container.svelte-1dtuud4{max-width:70%;margin-inline:auto;text-align:center;justify-content:center;align-items:center}.content-render.svelte-1dtuud4 .content-wrapper.blockLayout .content-media.svelte-1dtuud4{max-width:70%;max-height:600px;margin-inline:auto}.content-render.svelte-1dtuud4 .content-wrapper .block-content.svelte-1dtuud4{grid-area:a;display:flex;flex-direction:column;justify-content:space-between;align-items:flex-start;gap:16px}.content-render.svelte-1dtuud4 .content-wrapper .block-content .content-title.svelte-1dtuud4{font-size:28px;font-weight:600;line-height:1.2}@media(min-width: 768px){.content-render.svelte-1dtuud4 .content-wrapper .block-content .content-title.svelte-1dtuud4{font-size:32px}}@media(min-width: 1024px){.content-render.svelte-1dtuud4 .content-wrapper .block-content .content-title.svelte-1dtuud4{font-size:52px}}.content-render.svelte-1dtuud4 .content-wrapper .block-content .content-title span.highlight.svelte-1dtuud4{color:#6faf64}.content-render.svelte-1dtuud4 .content-wrapper .block-content .content-des.svelte-1dtuud4{font-size:16px;line-height:1.5;opacity:0.8}@media(min-width: 768px){.content-render.svelte-1dtuud4 .content-wrapper .block-content .content-des.svelte-1dtuud4{font-size:16px;font-weight:400}}@media(min-width: 1024px){.content-render.svelte-1dtuud4 .content-wrapper .block-content .content-des.svelte-1dtuud4{font-size:18px}}.content-render.svelte-1dtuud4 .content-wrapper .block-content .content-cta-container.svelte-1dtuud4{display:flex;gap:16px}.content-render.svelte-1dtuud4 .content-wrapper .content-media.svelte-1dtuud4{grid-area:b;display:grid;border-radius:8px;place-items:center;overflow:hidden}.content-render.svelte-1dtuud4 .content-wrapper .content-media img.svelte-1dtuud4{width:100%;height:100%;object-fit:cover}',
  map: '{"version":3,"file":"contentBlock.svelte","sources":["contentBlock.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { highlightText } from \\"utils/textHightlight\\";\\nimport Button from \\"$lib/components/button.svelte\\";\\nimport Chip from \\"./chip.svelte\\";\\nexport let heroBlock = false;\\nexport let blockLayout = false;\\nexport let flexReverse = false;\\nexport let contentMedia = \\"\\";\\nexport let contentChipIcon;\\nexport let contentChipText;\\nexport let contentTitle;\\nexport let contentTitleHighlight;\\nexport let contentDescription;\\nexport let ctaButtons = [];\\nexport let contentChipColor;\\nfunction parseContentMediaType(mediaURL) {\\n    return mediaURL.endsWith(\\".mp4\\") ? { type: \\"video\\" } : { type: \\"image\\" };\\n}\\n<\/script>\\n\\n<section class=\\"content-render\\">\\n\\t<div class=\\"content-wrapper\\" class:blockLayout class:flexReverse>\\n\\t\\t<div class=\\"block-content\\">\\n\\t\\t\\t<Chip chipIcon={contentChipIcon} chipText={contentChipText} chipColor={contentChipColor} />\\n\\n\\t\\t\\t{#if heroBlock}\\n\\t\\t\\t\\t<h1 class=\\"content-title\\">\\n\\t\\t\\t\\t\\t{#each highlightText(contentTitle, contentTitleHighlight) as word}\\n\\t\\t\\t\\t\\t\\t<span class:highlight={word.isHighlighted}>{word.text} </span>\\n\\t\\t\\t\\t\\t{/each}\\n\\t\\t\\t\\t</h1>\\n\\t\\t\\t{:else}\\n\\t\\t\\t\\t<h2 class=\\"content-title\\">\\n\\t\\t\\t\\t\\t{#each highlightText(contentTitle, contentTitleHighlight) as word}\\n\\t\\t\\t\\t\\t\\t<span class:highlight={word.isHighlighted}>{word.text} </span>\\n\\t\\t\\t\\t\\t{/each}\\n\\t\\t\\t\\t</h2>\\n\\t\\t\\t{/if}\\n\\n\\t\\t\\t<p class=\\"content-des\\">{contentDescription}</p>\\n\\n\\t\\t\\t{#if ctaButtons}\\n\\t\\t\\t\\t<div class=\\"content-cta-container\\">\\n\\t\\t\\t\\t\\t{#each ctaButtons as cta}\\n\\t\\t\\t\\t\\t\\t<Button primary onWhite>\\n\\t\\t\\t\\t\\t\\t\\t<span class=\\"material-symbols-sharp\\">{cta.icon ?? \\"\\"}</span>\\n\\t\\t\\t\\t\\t\\t\\t<span> {cta.label} </span>\\n\\t\\t\\t\\t\\t\\t</Button>\\n\\t\\t\\t\\t\\t{/each}\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t{/if}\\n\\t\\t</div>\\n\\n\\t\\t<div class=\\"content-media\\">\\n\\t\\t\\t{#if parseContentMediaType(contentMedia).type === \\"video\\"}\\n\\t\\t\\t\\t<video muted playsinline disablepictureinpicture controls>\\n\\t\\t\\t\\t\\t<source src={contentMedia} type=\\"video/mp4\\" />\\n\\t\\t\\t\\t</video>\\n\\t\\t\\t{:else}\\n\\t\\t\\t\\t<img src={contentMedia} alt=\\"\\" />\\n\\t\\t\\t{/if}\\n\\t\\t</div>\\n\\t</div>\\n</section>\\n\\n<style lang=\\"scss\\">.content-render {\\n  padding: 32px 20px;\\n}\\n.content-render .content-wrapper {\\n  display: grid;\\n  max-width: 1440px;\\n  margin-inline: auto;\\n  gap: 32px;\\n  grid-template-areas: \\"a a\\" \\"b b\\";\\n}\\n.content-render .content-wrapper.flexReverse {\\n  grid-template-areas: \\"b b\\" \\"a a\\";\\n}\\n@media (min-width: 840px) {\\n  .content-render .content-wrapper.flexReverse {\\n    gap: 64px;\\n    grid-template-areas: \\"b b b a a\\";\\n  }\\n}\\n@media (min-width: 840px) {\\n  .content-render .content-wrapper {\\n    grid-template-areas: \\"a a b b b\\";\\n    gap: 64px;\\n  }\\n}\\n.content-render .content-wrapper.blockLayout {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: center;\\n}\\n.content-render .content-wrapper.blockLayout .block-content,\\n.content-render .content-wrapper.blockLayout .content-cta-container {\\n  max-width: 70%;\\n  margin-inline: auto;\\n  text-align: center;\\n  justify-content: center;\\n  align-items: center;\\n}\\n.content-render .content-wrapper.blockLayout .content-media {\\n  max-width: 70%;\\n  max-height: 600px;\\n  margin-inline: auto;\\n}\\n.content-render .content-wrapper .block-content {\\n  grid-area: a;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: space-between;\\n  align-items: flex-start;\\n  gap: 16px;\\n}\\n.content-render .content-wrapper .block-content .content-title {\\n  font-size: 28px;\\n  font-weight: 600;\\n  line-height: 1.2;\\n}\\n@media (min-width: 768px) {\\n  .content-render .content-wrapper .block-content .content-title {\\n    font-size: 32px;\\n  }\\n}\\n@media (min-width: 1024px) {\\n  .content-render .content-wrapper .block-content .content-title {\\n    font-size: 52px;\\n  }\\n}\\n.content-render .content-wrapper .block-content .content-title span.highlight {\\n  color: #6faf64;\\n}\\n.content-render .content-wrapper .block-content .content-des {\\n  font-size: 16px;\\n  line-height: 1.5;\\n  opacity: 0.8;\\n}\\n@media (min-width: 768px) {\\n  .content-render .content-wrapper .block-content .content-des {\\n    font-size: 16px;\\n    font-weight: 400;\\n  }\\n}\\n@media (min-width: 1024px) {\\n  .content-render .content-wrapper .block-content .content-des {\\n    font-size: 18px;\\n  }\\n}\\n.content-render .content-wrapper .block-content .content-cta-container {\\n  display: flex;\\n  gap: 16px;\\n}\\n.content-render .content-wrapper .content-media {\\n  grid-area: b;\\n  display: grid;\\n  border-radius: 8px;\\n  place-items: center;\\n  overflow: hidden;\\n}\\n.content-render .content-wrapper .content-media img {\\n  width: 100%;\\n  height: 100%;\\n  object-fit: cover;\\n}</style>\\n"],"names":[],"mappings":"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"}'
};
function parseContentMediaType(mediaURL) {
  return mediaURL.endsWith(".mp4") ? { type: "video" } : { type: "image" };
}
const ContentBlock = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { heroBlock = false } = $$props;
  let { blockLayout = false } = $$props;
  let { flexReverse = false } = $$props;
  let { contentMedia = "" } = $$props;
  let { contentChipIcon } = $$props;
  let { contentChipText } = $$props;
  let { contentTitle } = $$props;
  let { contentTitleHighlight } = $$props;
  let { contentDescription } = $$props;
  let { ctaButtons = [] } = $$props;
  let { contentChipColor } = $$props;
  if ($$props.heroBlock === void 0 && $$bindings.heroBlock && heroBlock !== void 0) $$bindings.heroBlock(heroBlock);
  if ($$props.blockLayout === void 0 && $$bindings.blockLayout && blockLayout !== void 0) $$bindings.blockLayout(blockLayout);
  if ($$props.flexReverse === void 0 && $$bindings.flexReverse && flexReverse !== void 0) $$bindings.flexReverse(flexReverse);
  if ($$props.contentMedia === void 0 && $$bindings.contentMedia && contentMedia !== void 0) $$bindings.contentMedia(contentMedia);
  if ($$props.contentChipIcon === void 0 && $$bindings.contentChipIcon && contentChipIcon !== void 0) $$bindings.contentChipIcon(contentChipIcon);
  if ($$props.contentChipText === void 0 && $$bindings.contentChipText && contentChipText !== void 0) $$bindings.contentChipText(contentChipText);
  if ($$props.contentTitle === void 0 && $$bindings.contentTitle && contentTitle !== void 0) $$bindings.contentTitle(contentTitle);
  if ($$props.contentTitleHighlight === void 0 && $$bindings.contentTitleHighlight && contentTitleHighlight !== void 0) $$bindings.contentTitleHighlight(contentTitleHighlight);
  if ($$props.contentDescription === void 0 && $$bindings.contentDescription && contentDescription !== void 0) $$bindings.contentDescription(contentDescription);
  if ($$props.ctaButtons === void 0 && $$bindings.ctaButtons && ctaButtons !== void 0) $$bindings.ctaButtons(ctaButtons);
  if ($$props.contentChipColor === void 0 && $$bindings.contentChipColor && contentChipColor !== void 0) $$bindings.contentChipColor(contentChipColor);
  $$result.css.add(css);
  return `<section class="content-render svelte-1dtuud4"><div class="${[
    "content-wrapper svelte-1dtuud4",
    (blockLayout ? "blockLayout" : "") + " " + (flexReverse ? "flexReverse" : "")
  ].join(" ").trim()}"><div class="block-content svelte-1dtuud4">${validate_component(Chip, "Chip").$$render(
    $$result,
    {
      chipIcon: contentChipIcon,
      chipText: contentChipText,
      chipColor: contentChipColor
    },
    {},
    {}
  )} ${heroBlock ? `<h1 class="content-title svelte-1dtuud4">${each(highlightText(contentTitle, contentTitleHighlight), (word) => {
    return `<span class="${["svelte-1dtuud4", word.isHighlighted ? "highlight" : ""].join(" ").trim()}">${escape(word.text)} </span>`;
  })}</h1>` : `<h2 class="content-title svelte-1dtuud4">${each(highlightText(contentTitle, contentTitleHighlight), (word) => {
    return `<span class="${["svelte-1dtuud4", word.isHighlighted ? "highlight" : ""].join(" ").trim()}">${escape(word.text)} </span>`;
  })}</h2>`} <p class="content-des svelte-1dtuud4">${escape(contentDescription)}</p> ${ctaButtons ? `<div class="content-cta-container svelte-1dtuud4">${each(ctaButtons, (cta) => {
    return `${validate_component(Button, "Button").$$render($$result, { primary: true, onWhite: true }, {}, {
      default: () => {
        return `<span class="material-symbols-sharp">${escape(cta.icon ?? "")}</span> <span>${escape(cta.label)}</span> `;
      }
    })}`;
  })}</div>` : ``}</div> <div class="content-media svelte-1dtuud4">${parseContentMediaType(contentMedia).type === "video" ? `<video muted playsinline disablepictureinpicture controls><source${add_attribute("src", contentMedia, 0)} type="video/mp4"></video>` : `<img${add_attribute("src", contentMedia, 0)} alt="" class="svelte-1dtuud4">`}</div></div> </section>`;
});
export {
  ContentBlock as C
};
