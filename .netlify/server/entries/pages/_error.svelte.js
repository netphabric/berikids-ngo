import { g as getContext, c as create_ssr_component, d as subscribe } from "../../chunks/ssr.js";
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
const css = {
  code: '@property --angle{syntax:"<angle>";initial-value:90deg;inherits:true}.wip-root.svelte-724kxo.svelte-724kxo{display:grid;place-items:center;padding-inline:20px;margin-top:100px}.wip-root.svelte-724kxo .content-wrapper.svelte-724kxo{display:flex;flex-direction:column;align-items:center;text-align:center;gap:16px}.wip-root.svelte-724kxo .content-wrapper span.svelte-724kxo{color:#2b4f81;font-size:52px}.wip-root.svelte-724kxo .content-wrapper h1.svelte-724kxo{color:#2b4f81;font-size:52px;text-transform:uppercase}.wip-root.svelte-724kxo .content-wrapper a.svelte-724kxo{display:flex;align-items:center;gap:8px}.wip-root.svelte-724kxo .content-wrapper a span.svelte-724kxo{color:#4e2c14;font-size:18px}',
  map: '{"version":3,"file":"+error.svelte","sources":["+error.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { page } from \\"$app/stores\\";\\nconst pathname = $page.url.pathname;\\nconst navlinks = [\\"/about-us\\", \\"/projects\\", \\"/vocation\\", \\"/contact\\", \\"/gallery\\"];\\nconst matchesNavlinks = navlinks.includes(pathname);\\n<\/script>\\n\\n<section class=\\"wip-root\\">\\n\\t<div class=\\"content-wrapper\\">\\n\\t\\t{#if matchesNavlinks}\\n\\t\\t\\t<span class=\\"material-symbols-sharp\\">fire_truck</span>\\n\\t\\t\\t<h1>pending construction...</h1>\\n\\t\\t{:else}\\n\\t\\t\\t<span class=\\"material-symbols-sharp\\" style=\\"color:salmon\\">front_hand</span>\\n\\t\\t\\t<h1>🤿 Nothing here!!...</h1>\\n\\t\\t{/if}\\n\\n\\t\\t<a href=\\"/\\">\\n\\t\\t\\t<span class=\\"material-symbols-sharp\\">arrow_left_alt</span>\\n\\t\\t\\t<span>go back home</span>\\n\\t\\t</a>\\n\\t</div>\\n</section>\\n\\n<style lang=\\"scss\\">@property --angle {\\n  syntax: \\"<angle>\\";\\n  initial-value: 90deg;\\n  inherits: true;\\n}\\n.wip-root {\\n  display: grid;\\n  place-items: center;\\n  padding-inline: 20px;\\n  margin-top: 100px;\\n}\\n.wip-root .content-wrapper {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  text-align: center;\\n  gap: 16px;\\n}\\n.wip-root .content-wrapper span {\\n  color: #2b4f81;\\n  font-size: 52px;\\n}\\n.wip-root .content-wrapper h1 {\\n  color: #2b4f81;\\n  font-size: 52px;\\n  text-transform: uppercase;\\n}\\n.wip-root .content-wrapper a {\\n  display: flex;\\n  align-items: center;\\n  gap: 8px;\\n}\\n.wip-root .content-wrapper a span {\\n  color: #4e2c14;\\n  font-size: 18px;\\n}</style>\\n"],"names":[],"mappings":"AAuBmB,UAAU,OAAQ,CACnC,MAAM,CAAE,SAAS,CACjB,aAAa,CAAE,KAAK,CACpB,QAAQ,CAAE,IACZ,CACA,qCAAU,CACR,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,cAAc,CAAE,IAAI,CACpB,UAAU,CAAE,KACd,CACA,uBAAS,CAAC,8BAAiB,CACzB,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,WAAW,CAAE,MAAM,CACnB,UAAU,CAAE,MAAM,CAClB,GAAG,CAAE,IACP,CACA,uBAAS,CAAC,gBAAgB,CAAC,kBAAK,CAC9B,KAAK,CAAE,OAAO,CACd,SAAS,CAAE,IACb,CACA,uBAAS,CAAC,gBAAgB,CAAC,gBAAG,CAC5B,KAAK,CAAE,OAAO,CACd,SAAS,CAAE,IAAI,CACf,cAAc,CAAE,SAClB,CACA,uBAAS,CAAC,gBAAgB,CAAC,eAAE,CAC3B,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,GAAG,CAAE,GACP,CACA,uBAAS,CAAC,gBAAgB,CAAC,CAAC,CAAC,kBAAK,CAChC,KAAK,CAAE,OAAO,CACd,SAAS,CAAE,IACb"}'
};
const Error$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const pathname = $page.url.pathname;
  const navlinks = ["/about-us", "/projects", "/vocation", "/contact", "/gallery"];
  const matchesNavlinks = navlinks.includes(pathname);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `<section class="wip-root svelte-724kxo"><div class="content-wrapper svelte-724kxo">${matchesNavlinks ? `<span class="material-symbols-sharp svelte-724kxo" data-svelte-h="svelte-1st7c3p">fire_truck</span> <h1 class="svelte-724kxo" data-svelte-h="svelte-1y6jntc">pending construction...</h1>` : `<span class="material-symbols-sharp svelte-724kxo" style="color:salmon" data-svelte-h="svelte-1e26dhp">front_hand</span> <h1 class="svelte-724kxo" data-svelte-h="svelte-1wzvcko">🤿 Nothing here!!...</h1>`} <a href="/" class="svelte-724kxo" data-svelte-h="svelte-7z3m5j"><span class="material-symbols-sharp svelte-724kxo">arrow_left_alt</span> <span class="svelte-724kxo">go back home</span></a></div> </section>`;
});
export {
  Error$1 as default
};
