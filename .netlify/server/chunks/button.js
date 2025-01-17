import { c as create_ssr_component } from "./ssr.js";
const css = {
  code: '@property --angle{syntax:"<angle>";initial-value:90deg;inherits:true}button.svelte-1i268cz{min-width:fit-content;border:1px solid transparent;display:flex;align-items:center;border-radius:0.5rem;padding:0.5rem 1rem;gap:0.5rem;color:#f2f2f2;cursor:pointer;font-size:0.875rem;font-weight:600;text-transform:capitalize;transition:all 0.3s ease-in-out;transition:all 0.3s;background-color:#6faf64;box-shadow:6px 6px 12px #c5c5c5, -6px -6px 12px #ffffff}button.svelte-1i268cz:active{box-shadow:inset 4px 4px 12px #c5c5c5, inset -4px -4px 12px #ffffff}button.svelte-1i268cz:hover{color:#6faf64;background-color:transparent}@media(min-width: 48rem){button.svelte-1i268cz{font-size:1rem}}@media(min-width: 64rem){button.svelte-1i268cz{font-size:1.25rem}}',
  map: '{"version":3,"file":"button.svelte","sources":["button.svelte"],"sourcesContent":["<script lang=\\"ts\\">export let primary = false;\\nexport let secondary = false;\\nexport let onWhite = false;\\n<\/script>\\n\\n<button class:primary class:secondary class:onWhite>\\n\\t<slot />\\n</button>\\n\\n<style lang=\\"scss\\">@property --angle {\\n  syntax: \\"<angle>\\";\\n  initial-value: 90deg;\\n  inherits: true;\\n}\\nbutton {\\n  min-width: fit-content;\\n  border: 1px solid transparent;\\n  display: flex;\\n  align-items: center;\\n  border-radius: 0.5rem;\\n  padding: 0.5rem 1rem;\\n  gap: 0.5rem;\\n  color: #f2f2f2;\\n  cursor: pointer;\\n  font-size: 0.875rem;\\n  font-weight: 600;\\n  text-transform: capitalize;\\n  transition: all 0.3s ease-in-out;\\n  transition: all 0.3s;\\n  background-color: #6faf64;\\n  box-shadow: 6px 6px 12px #c5c5c5, -6px -6px 12px #ffffff;\\n}\\nbutton:active {\\n  box-shadow: inset 4px 4px 12px #c5c5c5, inset -4px -4px 12px #ffffff;\\n}\\nbutton:hover {\\n  color: #6faf64;\\n  background-color: transparent;\\n}\\n@media (min-width: 48rem) {\\n  button {\\n    font-size: 1rem;\\n  }\\n}\\n@media (min-width: 64rem) {\\n  button {\\n    font-size: 1.25rem;\\n  }\\n}</style>\\n"],"names":[],"mappings":"AASmB,UAAU,OAAQ,CACnC,MAAM,CAAE,SAAS,CACjB,aAAa,CAAE,KAAK,CACpB,QAAQ,CAAE,IACZ,CACA,qBAAO,CACL,SAAS,CAAE,WAAW,CACtB,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,WAAW,CAC7B,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,aAAa,CAAE,MAAM,CACrB,OAAO,CAAE,MAAM,CAAC,IAAI,CACpB,GAAG,CAAE,MAAM,CACX,KAAK,CAAE,OAAO,CACd,MAAM,CAAE,OAAO,CACf,SAAS,CAAE,QAAQ,CACnB,WAAW,CAAE,GAAG,CAChB,cAAc,CAAE,UAAU,CAC1B,UAAU,CAAE,GAAG,CAAC,IAAI,CAAC,WAAW,CAChC,UAAU,CAAE,GAAG,CAAC,IAAI,CACpB,gBAAgB,CAAE,OAAO,CACzB,UAAU,CAAE,GAAG,CAAC,GAAG,CAAC,IAAI,CAAC,OAAO,CAAC,CAAC,IAAI,CAAC,IAAI,CAAC,IAAI,CAAC,OACnD,CACA,qBAAM,OAAQ,CACZ,UAAU,CAAE,KAAK,CAAC,GAAG,CAAC,GAAG,CAAC,IAAI,CAAC,OAAO,CAAC,CAAC,KAAK,CAAC,IAAI,CAAC,IAAI,CAAC,IAAI,CAAC,OAC/D,CACA,qBAAM,MAAO,CACX,KAAK,CAAE,OAAO,CACd,gBAAgB,CAAE,WACpB,CACA,MAAO,YAAY,KAAK,CAAE,CACxB,qBAAO,CACL,SAAS,CAAE,IACb,CACF,CACA,MAAO,YAAY,KAAK,CAAE,CACxB,qBAAO,CACL,SAAS,CAAE,OACb,CACF"}'
};
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { primary = false } = $$props;
  let { secondary = false } = $$props;
  let { onWhite = false } = $$props;
  if ($$props.primary === void 0 && $$bindings.primary && primary !== void 0) $$bindings.primary(primary);
  if ($$props.secondary === void 0 && $$bindings.secondary && secondary !== void 0) $$bindings.secondary(secondary);
  if ($$props.onWhite === void 0 && $$bindings.onWhite && onWhite !== void 0) $$bindings.onWhite(onWhite);
  $$result.css.add(css);
  return `<button class="${[
    "svelte-1i268cz",
    (primary ? "primary" : "") + " " + (secondary ? "secondary" : "") + " " + (onWhite ? "onWhite" : "")
  ].join(" ").trim()}">${slots.default ? slots.default({}) : ``} </button>`;
});
export {
  Button as B
};
