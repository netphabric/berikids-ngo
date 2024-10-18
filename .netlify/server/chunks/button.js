import { c as create_ssr_component, b as add_attribute } from "./ssr.js";
const primary = "_primary_utzgt_22";
const onWhite = "_onWhite_utzgt_26";
const styles = {
  primary,
  onWhite
};
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { primary: primary2 = false } = $$props;
  let { onWhite: onWhite2 = false } = $$props;
  if ($$props.primary === void 0 && $$bindings.primary && primary2 !== void 0) $$bindings.primary(primary2);
  if ($$props.onWhite === void 0 && $$bindings.onWhite && onWhite2 !== void 0) $$bindings.onWhite(onWhite2);
  return `<button${add_attribute("class", `${primary2 && styles.primary} ${onWhite2 && styles.onWhite}`, 0)}>${slots.default ? slots.default({}) : ``}</button>`;
});
export {
  Button as B
};
