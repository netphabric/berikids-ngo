import { c as create_ssr_component } from "./ssr.js";
const css = {
  code: 'button.svelte-1mam8bc{min-width:fit-content;border:1px solid transparent;display:flex;align-items:center;border-radius:8px;padding:8px 16px;gap:8px;color:#f2f2f2;cursor:pointer;font-weight:600;text-transform:capitalize;font-family:"Montserrat", sans-serif;transition:all 0.3s ease-in-out;transition:all 0.3s;background-color:#6faf64;box-shadow:6px 6px 12px #c5c5c5, -6px -6px 12px #ffffff}button.svelte-1mam8bc:active{box-shadow:inset 4px 4px 12px #c5c5c5, inset -4px -4px 12px #ffffff}button.svelte-1mam8bc:hover{color:#6faf64;background-color:transparent}',
  map: '{"version":3,"file":"button.svelte","sources":["button.svelte"],"sourcesContent":["<script lang=\\"ts\\">export let primary = false;\\nexport let secondary = false;\\nexport let onWhite = false;\\n<\/script>\\n\\n<button class:primary class:secondary class:onWhite>\\n\\t<slot />\\n</button>\\n\\n<style lang=\\"scss\\">button {\\n  min-width: fit-content;\\n  border: 1px solid transparent;\\n  display: flex;\\n  align-items: center;\\n  border-radius: 8px;\\n  padding: 8px 16px;\\n  gap: 8px;\\n  color: #f2f2f2;\\n  cursor: pointer;\\n  font-weight: 600;\\n  text-transform: capitalize;\\n  font-family: \\"Montserrat\\", sans-serif;\\n  transition: all 0.3s ease-in-out;\\n  transition: all 0.3s;\\n  background-color: #6faf64;\\n  box-shadow: 6px 6px 12px #c5c5c5, -6px -6px 12px #ffffff;\\n}\\nbutton:active {\\n  box-shadow: inset 4px 4px 12px #c5c5c5, inset -4px -4px 12px #ffffff;\\n}\\nbutton:hover {\\n  color: #6faf64;\\n  background-color: transparent;\\n}</style>\\n"],"names":[],"mappings":"AASmB,qBAAO,CACxB,SAAS,CAAE,WAAW,CACtB,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,WAAW,CAC7B,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,aAAa,CAAE,GAAG,CAClB,OAAO,CAAE,GAAG,CAAC,IAAI,CACjB,GAAG,CAAE,GAAG,CACR,KAAK,CAAE,OAAO,CACd,MAAM,CAAE,OAAO,CACf,WAAW,CAAE,GAAG,CAChB,cAAc,CAAE,UAAU,CAC1B,WAAW,CAAE,YAAY,CAAC,CAAC,UAAU,CACrC,UAAU,CAAE,GAAG,CAAC,IAAI,CAAC,WAAW,CAChC,UAAU,CAAE,GAAG,CAAC,IAAI,CACpB,gBAAgB,CAAE,OAAO,CACzB,UAAU,CAAE,GAAG,CAAC,GAAG,CAAC,IAAI,CAAC,OAAO,CAAC,CAAC,IAAI,CAAC,IAAI,CAAC,IAAI,CAAC,OACnD,CACA,qBAAM,OAAQ,CACZ,UAAU,CAAE,KAAK,CAAC,GAAG,CAAC,GAAG,CAAC,IAAI,CAAC,OAAO,CAAC,CAAC,KAAK,CAAC,IAAI,CAAC,IAAI,CAAC,IAAI,CAAC,OAC/D,CACA,qBAAM,MAAO,CACX,KAAK,CAAE,OAAO,CACd,gBAAgB,CAAE,WACpB"}'
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
    "svelte-1mam8bc",
    (primary ? "primary" : "") + " " + (secondary ? "secondary" : "") + " " + (onWhite ? "onWhite" : "")
  ].join(" ").trim()}">${slots.default ? slots.default({}) : ``} </button>`;
});
export {
  Button as B
};
