import { c as create_ssr_component } from "./ssr.js";
const css = {
  code: 'button.svelte-14ikjl1{min-width:fit-content;background-color:#ffd966;border:1px solid #ffd966;display:flex;align-items:center;border-radius:8px;padding:8px 16px;gap:8px;color:#4e2c14;cursor:pointer;font-weight:600;text-transform:capitalize;font-family:"Montserrat", sans-serif;transition:all 0.3s ease-in-out}button.primary.svelte-14ikjl1{border:1px solid #4e2c14;background-color:transparent}button.secondary.svelte-14ikjl1{color:#f2f2f2;border:1px solid #6faf64;background-color:#6faf64}button.onWhite.svelte-14ikjl1:hover{color:#6faf64;background-color:transparent;border:1px solid #6faf64}button.onWhite.svelte-14ikjl1:active{color:#ffd966;border:1px solid #ffd966}button.svelte-14ikjl1:hover{color:#ffd966;background-color:transparent;border:1px solid #ffd966}',
  map: '{"version":3,"file":"button.svelte","sources":["button.svelte"],"sourcesContent":["<script lang=\\"ts\\">export let primary = false;\\nexport let secondary = false;\\nexport let onWhite = false;\\n<\/script>\\n\\n<button class:primary class:secondary class:onWhite>\\n\\t<slot />\\n</button>\\n\\n<style lang=\\"scss\\">button {\\n  min-width: fit-content;\\n  background-color: #ffd966;\\n  border: 1px solid #ffd966;\\n  display: flex;\\n  align-items: center;\\n  border-radius: 8px;\\n  padding: 8px 16px;\\n  gap: 8px;\\n  color: #4e2c14;\\n  cursor: pointer;\\n  font-weight: 600;\\n  text-transform: capitalize;\\n  font-family: \\"Montserrat\\", sans-serif;\\n  transition: all 0.3s ease-in-out;\\n}\\nbutton.primary {\\n  border: 1px solid #4e2c14;\\n  background-color: transparent;\\n}\\nbutton.secondary {\\n  color: #f2f2f2;\\n  border: 1px solid #6faf64;\\n  background-color: #6faf64;\\n}\\nbutton.onWhite:hover {\\n  color: #6faf64;\\n  background-color: transparent;\\n  border: 1px solid #6faf64;\\n}\\nbutton.onWhite:active {\\n  color: #ffd966;\\n  border: 1px solid #ffd966;\\n}\\nbutton:hover {\\n  color: #ffd966;\\n  background-color: transparent;\\n  border: 1px solid #ffd966;\\n}</style>\\n"],"names":[],"mappings":"AASmB,qBAAO,CACxB,SAAS,CAAE,WAAW,CACtB,gBAAgB,CAAE,OAAO,CACzB,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,OAAO,CACzB,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,aAAa,CAAE,GAAG,CAClB,OAAO,CAAE,GAAG,CAAC,IAAI,CACjB,GAAG,CAAE,GAAG,CACR,KAAK,CAAE,OAAO,CACd,MAAM,CAAE,OAAO,CACf,WAAW,CAAE,GAAG,CAChB,cAAc,CAAE,UAAU,CAC1B,WAAW,CAAE,YAAY,CAAC,CAAC,UAAU,CACrC,UAAU,CAAE,GAAG,CAAC,IAAI,CAAC,WACvB,CACA,MAAM,uBAAS,CACb,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,OAAO,CACzB,gBAAgB,CAAE,WACpB,CACA,MAAM,yBAAW,CACf,KAAK,CAAE,OAAO,CACd,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,OAAO,CACzB,gBAAgB,CAAE,OACpB,CACA,MAAM,uBAAQ,MAAO,CACnB,KAAK,CAAE,OAAO,CACd,gBAAgB,CAAE,WAAW,CAC7B,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,OACpB,CACA,MAAM,uBAAQ,OAAQ,CACpB,KAAK,CAAE,OAAO,CACd,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,OACpB,CACA,qBAAM,MAAO,CACX,KAAK,CAAE,OAAO,CACd,gBAAgB,CAAE,WAAW,CAC7B,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,OACpB"}'
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
    "svelte-14ikjl1",
    (primary ? "primary" : "") + " " + (secondary ? "secondary" : "") + " " + (onWhite ? "onWhite" : "")
  ].join(" ").trim()}">${slots.default ? slots.default({}) : ``} </button>`;
});
export {
  Button as B
};
