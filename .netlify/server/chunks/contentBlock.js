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
  code: '.content-render.svelte-1eiyz2o.svelte-1eiyz2o{padding:32px}.content-render.svelte-1eiyz2o .content-wrapper.svelte-1eiyz2o{display:grid;grid-template-columns:repeat(2, 1fr);grid-template-rows:1fr;grid-template-areas:"a b";max-width:1440px;margin-inline:auto;gap:64px}.content-render.svelte-1eiyz2o .content-wrapper.flexReverse.svelte-1eiyz2o{grid-template-areas:"b a"}.content-render.svelte-1eiyz2o .content-wrapper.blockLayout.svelte-1eiyz2o{display:flex;flex-direction:column;align-items:center;justify-content:center}.content-render.svelte-1eiyz2o .content-wrapper.blockLayout .block-content.svelte-1eiyz2o,.content-render.svelte-1eiyz2o .content-wrapper.blockLayout .content-cta-container.svelte-1eiyz2o{max-width:70%;margin-inline:auto;text-align:center;justify-content:center;align-items:center}.content-render.svelte-1eiyz2o .content-wrapper.blockLayout .content-media.svelte-1eiyz2o{max-width:70%;max-height:600px;margin-inline:auto}.content-render.svelte-1eiyz2o .content-wrapper .block-content.svelte-1eiyz2o{grid-area:a;display:flex;flex-direction:column;justify-content:space-between;align-items:flex-start;gap:16px}.content-render.svelte-1eiyz2o .content-wrapper .block-content .content-title.svelte-1eiyz2o{font-size:52px;font-weight:700;line-height:1.2}.content-render.svelte-1eiyz2o .content-wrapper .block-content .content-title span.highlight.svelte-1eiyz2o{color:#6faf64}.content-render.svelte-1eiyz2o .content-wrapper .block-content .content-des.svelte-1eiyz2o{font-size:18px;font-weight:400;line-height:1.5;opacity:0.8}.content-render.svelte-1eiyz2o .content-wrapper .block-content .content-cta-container.svelte-1eiyz2o{display:flex;gap:16px}.content-render.svelte-1eiyz2o .content-wrapper .content-media.svelte-1eiyz2o{grid-area:b;display:grid;border-radius:8px;place-items:center;overflow:hidden}.content-render.svelte-1eiyz2o .content-wrapper .content-media img.svelte-1eiyz2o{width:100%;height:100%;object-fit:cover}',
  map: '{"version":3,"file":"contentBlock.svelte","sources":["contentBlock.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { highlightText } from \\"utils/textHightlight\\";\\nimport Button from \\"$lib/components/button.svelte\\";\\nimport Chip from \\"./chip.svelte\\";\\nexport let heroBlock = false;\\nexport let blockLayout = false;\\nexport let flexReverse = false;\\nexport let contentMedia = \\"\\";\\nexport let contentChipIcon;\\nexport let contentChipText;\\nexport let contentTitle;\\nexport let contentTitleHighlight;\\nexport let contentDescription;\\nexport let ctaButtons = [];\\nexport let contentChipColor;\\nfunction parseContentMediaType(mediaURL) {\\n    return mediaURL.endsWith(\\".mp4\\") ? { type: \\"video\\" } : { type: \\"image\\" };\\n}\\n<\/script>\\n\\n<section class=\\"content-render\\">\\n\\t<div class=\\"content-wrapper\\" class:blockLayout class:flexReverse>\\n\\t\\t<div class=\\"block-content\\">\\n\\t\\t\\t<Chip chipIcon={contentChipIcon} chipText={contentChipText} chipColor={contentChipColor} />\\n\\n\\t\\t\\t{#if heroBlock}\\n\\t\\t\\t\\t<h1 class=\\"content-title\\">\\n\\t\\t\\t\\t\\t{#each highlightText(contentTitle, contentTitleHighlight) as word}\\n\\t\\t\\t\\t\\t\\t<span class:highlight={word.isHighlighted}>{word.text} </span>\\n\\t\\t\\t\\t\\t{/each}\\n\\t\\t\\t\\t</h1>\\n\\t\\t\\t{:else}\\n\\t\\t\\t\\t<h2 class=\\"content-title\\">\\n\\t\\t\\t\\t\\t{#each highlightText(contentTitle, contentTitleHighlight) as word}\\n\\t\\t\\t\\t\\t\\t<span class:highlight={word.isHighlighted}>{word.text} </span>\\n\\t\\t\\t\\t\\t{/each}\\n\\t\\t\\t\\t</h2>\\n\\t\\t\\t{/if}\\n\\n\\t\\t\\t<p class=\\"content-des\\">{contentDescription}</p>\\n\\n\\t\\t\\t{#if ctaButtons}\\n\\t\\t\\t\\t<div class=\\"content-cta-container\\">\\n\\t\\t\\t\\t\\t{#each ctaButtons as cta}\\n\\t\\t\\t\\t\\t\\t<Button primary onWhite>\\n\\t\\t\\t\\t\\t\\t\\t<span class=\\"material-symbols-sharp\\">{cta.icon ?? \\"\\"}</span>\\n\\t\\t\\t\\t\\t\\t\\t<span> {cta.label} </span>\\n\\t\\t\\t\\t\\t\\t</Button>\\n\\t\\t\\t\\t\\t{/each}\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t{/if}\\n\\t\\t</div>\\n\\n\\t\\t<div class=\\"content-media\\">\\n\\t\\t\\t{#if parseContentMediaType(contentMedia).type === \\"video\\"}\\n\\t\\t\\t\\t<video muted playsinline disablepictureinpicture controls>\\n\\t\\t\\t\\t\\t<source src={contentMedia} type=\\"video/mp4\\" />\\n\\t\\t\\t\\t</video>\\n\\t\\t\\t{:else}\\n\\t\\t\\t\\t<img src={contentMedia} alt=\\"\\" />\\n\\t\\t\\t{/if}\\n\\t\\t</div>\\n\\t</div>\\n</section>\\n\\n<style lang=\\"scss\\">.content-render {\\n  padding: 32px;\\n}\\n.content-render .content-wrapper {\\n  display: grid;\\n  grid-template-columns: repeat(2, 1fr);\\n  grid-template-rows: 1fr;\\n  grid-template-areas: \\"a b\\";\\n  max-width: 1440px;\\n  margin-inline: auto;\\n  gap: 64px;\\n}\\n.content-render .content-wrapper.flexReverse {\\n  grid-template-areas: \\"b a\\";\\n}\\n.content-render .content-wrapper.blockLayout {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: center;\\n}\\n.content-render .content-wrapper.blockLayout .block-content,\\n.content-render .content-wrapper.blockLayout .content-cta-container {\\n  max-width: 70%;\\n  margin-inline: auto;\\n  text-align: center;\\n  justify-content: center;\\n  align-items: center;\\n}\\n.content-render .content-wrapper.blockLayout .content-media {\\n  max-width: 70%;\\n  max-height: 600px;\\n  margin-inline: auto;\\n}\\n.content-render .content-wrapper .block-content {\\n  grid-area: a;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: space-between;\\n  align-items: flex-start;\\n  gap: 16px;\\n}\\n.content-render .content-wrapper .block-content .content-title {\\n  font-size: 52px;\\n  font-weight: 700;\\n  line-height: 1.2;\\n}\\n.content-render .content-wrapper .block-content .content-title span.highlight {\\n  color: #6faf64;\\n}\\n.content-render .content-wrapper .block-content .content-des {\\n  font-size: 18px;\\n  font-weight: 400;\\n  line-height: 1.5;\\n  opacity: 0.8;\\n}\\n.content-render .content-wrapper .block-content .content-cta-container {\\n  display: flex;\\n  gap: 16px;\\n}\\n.content-render .content-wrapper .content-media {\\n  grid-area: b;\\n  display: grid;\\n  border-radius: 8px;\\n  place-items: center;\\n  overflow: hidden;\\n}\\n.content-render .content-wrapper .content-media img {\\n  width: 100%;\\n  height: 100%;\\n  object-fit: cover;\\n}</style>\\n"],"names":[],"mappings":"AAgEmB,6CAAgB,CACjC,OAAO,CAAE,IACX,CACA,8BAAe,CAAC,+BAAiB,CAC/B,OAAO,CAAE,IAAI,CACb,qBAAqB,CAAE,OAAO,CAAC,CAAC,CAAC,GAAG,CAAC,CACrC,kBAAkB,CAAE,GAAG,CACvB,mBAAmB,CAAE,KAAK,CAC1B,SAAS,CAAE,MAAM,CACjB,aAAa,CAAE,IAAI,CACnB,GAAG,CAAE,IACP,CACA,8BAAe,CAAC,gBAAgB,2BAAa,CAC3C,mBAAmB,CAAE,KACvB,CACA,8BAAe,CAAC,gBAAgB,2BAAa,CAC3C,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MACnB,CACA,8BAAe,CAAC,gBAAgB,YAAY,CAAC,6BAAc,CAC3D,8BAAe,CAAC,gBAAgB,YAAY,CAAC,qCAAuB,CAClE,SAAS,CAAE,GAAG,CACd,aAAa,CAAE,IAAI,CACnB,UAAU,CAAE,MAAM,CAClB,eAAe,CAAE,MAAM,CACvB,WAAW,CAAE,MACf,CACA,8BAAe,CAAC,gBAAgB,YAAY,CAAC,6BAAe,CAC1D,SAAS,CAAE,GAAG,CACd,UAAU,CAAE,KAAK,CACjB,aAAa,CAAE,IACjB,CACA,8BAAe,CAAC,gBAAgB,CAAC,6BAAe,CAC9C,SAAS,CAAE,CAAC,CACZ,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,eAAe,CAAE,aAAa,CAC9B,WAAW,CAAE,UAAU,CACvB,GAAG,CAAE,IACP,CACA,8BAAe,CAAC,gBAAgB,CAAC,cAAc,CAAC,6BAAe,CAC7D,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,GAAG,CAChB,WAAW,CAAE,GACf,CACA,8BAAe,CAAC,gBAAgB,CAAC,cAAc,CAAC,cAAc,CAAC,IAAI,yBAAW,CAC5E,KAAK,CAAE,OACT,CACA,8BAAe,CAAC,gBAAgB,CAAC,cAAc,CAAC,2BAAa,CAC3D,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,GAAG,CAChB,WAAW,CAAE,GAAG,CAChB,OAAO,CAAE,GACX,CACA,8BAAe,CAAC,gBAAgB,CAAC,cAAc,CAAC,qCAAuB,CACrE,OAAO,CAAE,IAAI,CACb,GAAG,CAAE,IACP,CACA,8BAAe,CAAC,gBAAgB,CAAC,6BAAe,CAC9C,SAAS,CAAE,CAAC,CACZ,OAAO,CAAE,IAAI,CACb,aAAa,CAAE,GAAG,CAClB,WAAW,CAAE,MAAM,CACnB,QAAQ,CAAE,MACZ,CACA,8BAAe,CAAC,gBAAgB,CAAC,cAAc,CAAC,kBAAI,CAClD,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,UAAU,CAAE,KACd"}'
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
  return `<section class="content-render svelte-1eiyz2o"><div class="${[
    "content-wrapper svelte-1eiyz2o",
    (blockLayout ? "blockLayout" : "") + " " + (flexReverse ? "flexReverse" : "")
  ].join(" ").trim()}"><div class="block-content svelte-1eiyz2o">${validate_component(Chip, "Chip").$$render(
    $$result,
    {
      chipIcon: contentChipIcon,
      chipText: contentChipText,
      chipColor: contentChipColor
    },
    {},
    {}
  )} ${heroBlock ? `<h1 class="content-title svelte-1eiyz2o">${each(highlightText(contentTitle, contentTitleHighlight), (word) => {
    return `<span class="${["svelte-1eiyz2o", word.isHighlighted ? "highlight" : ""].join(" ").trim()}">${escape(word.text)} </span>`;
  })}</h1>` : `<h2 class="content-title svelte-1eiyz2o">${each(highlightText(contentTitle, contentTitleHighlight), (word) => {
    return `<span class="${["svelte-1eiyz2o", word.isHighlighted ? "highlight" : ""].join(" ").trim()}">${escape(word.text)} </span>`;
  })}</h2>`} <p class="content-des svelte-1eiyz2o">${escape(contentDescription)}</p> ${ctaButtons ? `<div class="content-cta-container svelte-1eiyz2o">${each(ctaButtons, (cta) => {
    return `${validate_component(Button, "Button").$$render($$result, { primary: true, onWhite: true }, {}, {
      default: () => {
        return `<span class="material-symbols-sharp">${escape(cta.icon ?? "")}</span> <span>${escape(cta.label)}</span> `;
      }
    })}`;
  })}</div>` : ``}</div> <div class="content-media svelte-1eiyz2o">${parseContentMediaType(contentMedia).type === "video" ? `<video muted playsinline disablepictureinpicture controls><source${add_attribute("src", contentMedia, 0)} type="video/mp4"></video>` : `<img${add_attribute("src", contentMedia, 0)} alt="" class="svelte-1eiyz2o">`}</div></div> </section>`;
});
export {
  ContentBlock as C
};
