import { c as create_ssr_component, b as escape } from "./ssr.js";
const css = {
  code: ".content-chip.svelte-169bdxd{width:max-content;display:flex;align-items:center;padding:8px 16px;border-radius:16px;box-shadow:rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;gap:8px}.content-chip.bgGreen.svelte-169bdxd{color:rgb(66.9914893617, 114.1063829787, 58.8936170213);background-color:rgb(220.3787234043, 235.7659574468, 217.7340425532)}.content-chip.bgBlue.svelte-169bdxd{color:rgb(36.625, 67.2877906977, 109.875);background-color:rgb(211.875, 223.9098837209, 240.625)}.content-chip.bgRed.svelte-169bdxd{color:rgb(185.8301886792, 22.1886792453, 10.1698113208);background-color:rgb(253.2617924528, 225.2924528302, 223.2382075472)}.content-chip.bgYellow.svelte-169bdxd{color:rgb(127.5, 95.8333333333, 0);background-color:rgb(255, 237.2666666667, 183.6)}",
  map: '{"version":3,"file":"chip.svelte","sources":["chip.svelte"],"sourcesContent":["<script lang=\\"ts\\">export let chipText;\\nexport let chipIcon;\\nexport let chipColor;\\n<\/script>\\n\\n<h4\\n\\tclass=\\"content-chip\\"\\n\\tclass:bgGreen={chipColor === \\"green\\"}\\n\\tclass:bgBlue={chipColor === \\"blue\\"}\\n\\tclass:bgRed={chipColor === \\"red\\"}\\n\\tclass:bgYellow={chipColor === \\"yellow\\"}\\n>\\n\\t<span class=\\"material-symbols-sharp\\"> {chipIcon} </span>\\n\\t<span class=\\"chip-text\\">{chipText}</span>\\n</h4>\\n\\n<style lang=\\"scss\\">.content-chip {\\n  width: max-content;\\n  display: flex;\\n  align-items: center;\\n  padding: 8px 16px;\\n  border-radius: 16px;\\n  box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;\\n  gap: 8px;\\n}\\n.content-chip.bgGreen {\\n  color: rgb(66.9914893617, 114.1063829787, 58.8936170213);\\n  background-color: rgb(220.3787234043, 235.7659574468, 217.7340425532);\\n}\\n.content-chip.bgBlue {\\n  color: rgb(36.625, 67.2877906977, 109.875);\\n  background-color: rgb(211.875, 223.9098837209, 240.625);\\n}\\n.content-chip.bgRed {\\n  color: rgb(185.8301886792, 22.1886792453, 10.1698113208);\\n  background-color: rgb(253.2617924528, 225.2924528302, 223.2382075472);\\n}\\n.content-chip.bgYellow {\\n  color: rgb(127.5, 95.8333333333, 0);\\n  background-color: rgb(255, 237.2666666667, 183.6);\\n}</style>\\n"],"names":[],"mappings":"AAgBmB,4BAAc,CAC/B,KAAK,CAAE,WAAW,CAClB,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,OAAO,CAAE,GAAG,CAAC,IAAI,CACjB,aAAa,CAAE,IAAI,CACnB,UAAU,CAAE,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,CAAC,GAAG,CAAC,IAAI,CAAC,IAAI,CAAC,KAAK,CACnD,GAAG,CAAE,GACP,CACA,aAAa,uBAAS,CACpB,KAAK,CAAE,IAAI,aAAa,CAAC,CAAC,cAAc,CAAC,CAAC,aAAa,CAAC,CACxD,gBAAgB,CAAE,IAAI,cAAc,CAAC,CAAC,cAAc,CAAC,CAAC,cAAc,CACtE,CACA,aAAa,sBAAQ,CACnB,KAAK,CAAE,IAAI,MAAM,CAAC,CAAC,aAAa,CAAC,CAAC,OAAO,CAAC,CAC1C,gBAAgB,CAAE,IAAI,OAAO,CAAC,CAAC,cAAc,CAAC,CAAC,OAAO,CACxD,CACA,aAAa,qBAAO,CAClB,KAAK,CAAE,IAAI,cAAc,CAAC,CAAC,aAAa,CAAC,CAAC,aAAa,CAAC,CACxD,gBAAgB,CAAE,IAAI,cAAc,CAAC,CAAC,cAAc,CAAC,CAAC,cAAc,CACtE,CACA,aAAa,wBAAU,CACrB,KAAK,CAAE,IAAI,KAAK,CAAC,CAAC,aAAa,CAAC,CAAC,CAAC,CAAC,CACnC,gBAAgB,CAAE,IAAI,GAAG,CAAC,CAAC,cAAc,CAAC,CAAC,KAAK,CAClD"}'
};
const Chip = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { chipText } = $$props;
  let { chipIcon } = $$props;
  let { chipColor } = $$props;
  if ($$props.chipText === void 0 && $$bindings.chipText && chipText !== void 0) $$bindings.chipText(chipText);
  if ($$props.chipIcon === void 0 && $$bindings.chipIcon && chipIcon !== void 0) $$bindings.chipIcon(chipIcon);
  if ($$props.chipColor === void 0 && $$bindings.chipColor && chipColor !== void 0) $$bindings.chipColor(chipColor);
  $$result.css.add(css);
  return `<h4 class="${[
    "content-chip svelte-169bdxd",
    (chipColor === "green" ? "bgGreen" : "") + " " + (chipColor === "blue" ? "bgBlue" : "") + " " + (chipColor === "red" ? "bgRed" : "") + " " + (chipColor === "yellow" ? "bgYellow" : "")
  ].join(" ").trim()}"><span class="material-symbols-sharp">${escape(chipIcon)}</span> <span class="chip-text">${escape(chipText)}</span> </h4>`;
});
export {
  Chip as C
};
