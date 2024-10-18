import { g as getContext, c as create_ssr_component, f as subscribe, b as add_attribute, v as validate_component } from "../../chunks/ssr.js";
import "../../chunks/exports.js";
function get(key, parse = JSON.parse) {
  try {
    return parse(sessionStorage[key]);
  } catch {
  }
}
const SNAPSHOT_KEY = "sveltekit:snapshot";
const SCROLL_KEY = "sveltekit:scroll";
get(SCROLL_KEY) ?? {};
get(SNAPSHOT_KEY) ?? {};
const getStores = () => {
  const stores = getContext("__svelte__");
  return {
    /** @type {typeof page} */
    page: {
      subscribe: stores.page.subscribe
    },
    /** @type {typeof navigating} */
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    /** @type {typeof updated} */
    updated: stores.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
const wipRoot = "_wipRoot_6byt6_6";
const contentWrapper = "_contentWrapper_6byt6_12";
const styles = {
  wipRoot,
  contentWrapper
};
const Wip = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const pathname = $page.url.pathname;
  const navlinks = ["/about-us", "/get-involved", "/our-impact"];
  const matchesNavlinks = navlinks.includes(pathname);
  $$unsubscribe_page();
  return `<section${add_attribute("class", styles.wipRoot, 0)}><div${add_attribute("class", styles.contentWrapper, 0)}>${matchesNavlinks ? `<span class="material-symbols-sharp" data-svelte-h="svelte-1st7c3p">fire_truck</span> <h1 data-svelte-h="svelte-1y6jntc">pending construction...</h1>` : `<span class="material-symbols-sharp" style="color:salmon" data-svelte-h="svelte-1e26dhp">front_hand</span> <h1 data-svelte-h="svelte-1w5j9ux">nothing here...</h1>`} <a href="/" data-svelte-h="svelte-7z3m5j"><span class="material-symbols-sharp">arrow_left_alt</span> <span>go back home</span></a></div></section>`;
});
const Error$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Wip, "Wip").$$render($$result, {}, {}, {})}`;
});
export {
  Error$1 as default
};
