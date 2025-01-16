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
  code: ".wip-root.svelte-1c58eng.svelte-1c58eng{display:grid;place-items:center;padding-inline:20px;margin-top:100px}.wip-root.svelte-1c58eng .content-wrapper.svelte-1c58eng{display:flex;flex-direction:column;align-items:center;text-align:center;gap:16px}.wip-root.svelte-1c58eng .content-wrapper span.svelte-1c58eng{color:#2b4f81;font-size:52px}.wip-root.svelte-1c58eng .content-wrapper h1.svelte-1c58eng{color:#2b4f81;font-size:52px;text-transform:uppercase}.wip-root.svelte-1c58eng .content-wrapper a.svelte-1c58eng{display:flex;align-items:center;gap:8px}.wip-root.svelte-1c58eng .content-wrapper a span.svelte-1c58eng{color:#4e2c14;font-size:18px}",
  map: '{"version":3,"file":"+error.svelte","sources":["+error.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { page } from \\"$app/stores\\";\\nconst pathname = $page.url.pathname;\\nconst navlinks = [\\"/about-us\\", \\"/projects\\", \\"/vocation\\", \\"/contact\\", \\"/gallery\\"];\\nconst matchesNavlinks = navlinks.includes(pathname);\\n<\/script>\\n\\n<section class=\\"wip-root\\">\\n\\t<div class=\\"content-wrapper\\">\\n\\t\\t{#if matchesNavlinks}\\n\\t\\t\\t<span class=\\"material-symbols-sharp\\">fire_truck</span>\\n\\t\\t\\t<h1>pending construction...</h1>\\n\\t\\t{:else}\\n\\t\\t\\t<span class=\\"material-symbols-sharp\\" style=\\"color:salmon\\">front_hand</span>\\n\\t\\t\\t<h1>🤿 Nothing here!!...</h1>\\n\\t\\t{/if}\\n\\n\\t\\t<a href=\\"/\\">\\n\\t\\t\\t<span class=\\"material-symbols-sharp\\">arrow_left_alt</span>\\n\\t\\t\\t<span>go back home</span>\\n\\t\\t</a>\\n\\t</div>\\n</section>\\n\\n<style lang=\\"scss\\">.wip-root {\\n  display: grid;\\n  place-items: center;\\n  padding-inline: 20px;\\n  margin-top: 100px;\\n}\\n.wip-root .content-wrapper {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  text-align: center;\\n  gap: 16px;\\n}\\n.wip-root .content-wrapper span {\\n  color: #2b4f81;\\n  font-size: 52px;\\n}\\n.wip-root .content-wrapper h1 {\\n  color: #2b4f81;\\n  font-size: 52px;\\n  text-transform: uppercase;\\n}\\n.wip-root .content-wrapper a {\\n  display: flex;\\n  align-items: center;\\n  gap: 8px;\\n}\\n.wip-root .content-wrapper a span {\\n  color: #4e2c14;\\n  font-size: 18px;\\n}</style>\\n"],"names":[],"mappings":"AAuBmB,uCAAU,CAC3B,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,cAAc,CAAE,IAAI,CACpB,UAAU,CAAE,KACd,CACA,wBAAS,CAAC,+BAAiB,CACzB,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,WAAW,CAAE,MAAM,CACnB,UAAU,CAAE,MAAM,CAClB,GAAG,CAAE,IACP,CACA,wBAAS,CAAC,gBAAgB,CAAC,mBAAK,CAC9B,KAAK,CAAE,OAAO,CACd,SAAS,CAAE,IACb,CACA,wBAAS,CAAC,gBAAgB,CAAC,iBAAG,CAC5B,KAAK,CAAE,OAAO,CACd,SAAS,CAAE,IAAI,CACf,cAAc,CAAE,SAClB,CACA,wBAAS,CAAC,gBAAgB,CAAC,gBAAE,CAC3B,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,GAAG,CAAE,GACP,CACA,wBAAS,CAAC,gBAAgB,CAAC,CAAC,CAAC,mBAAK,CAChC,KAAK,CAAE,OAAO,CACd,SAAS,CAAE,IACb"}'
};
const Error$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const pathname = $page.url.pathname;
  const navlinks = ["/about-us", "/projects", "/vocation", "/contact", "/gallery"];
  const matchesNavlinks = navlinks.includes(pathname);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `<section class="wip-root svelte-1c58eng"><div class="content-wrapper svelte-1c58eng">${matchesNavlinks ? `<span class="material-symbols-sharp svelte-1c58eng" data-svelte-h="svelte-1st7c3p">fire_truck</span> <h1 class="svelte-1c58eng" data-svelte-h="svelte-1y6jntc">pending construction...</h1>` : `<span class="material-symbols-sharp svelte-1c58eng" style="color:salmon" data-svelte-h="svelte-1e26dhp">front_hand</span> <h1 class="svelte-1c58eng" data-svelte-h="svelte-1wzvcko">🤿 Nothing here!!...</h1>`} <a href="/" class="svelte-1c58eng" data-svelte-h="svelte-7z3m5j"><span class="material-symbols-sharp svelte-1c58eng">arrow_left_alt</span> <span class="svelte-1c58eng">go back home</span></a></div> </section>`;
});
export {
  Error$1 as default
};
