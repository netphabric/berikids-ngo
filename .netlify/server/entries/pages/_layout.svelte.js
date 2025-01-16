import { c as create_ssr_component, e as each, v as validate_component, a as add_attribute, b as escape, d as subscribe, f as set_store_value } from "../../chunks/ssr.js";
import { B as Button } from "../../chunks/button.js";
import { w as writable } from "../../chunks/index.js";
const css$2 = {
  code: '.header.svelte-9584bf.svelte-9584bf{padding:32px;margin-block-end:64px;backdrop-filter:blur(20px);background-color:rgba(242, 242, 242, 0.6352941176);position:sticky;z-index:100;top:0}.header.svelte-9584bf .logo.svelte-9584bf{color:#2b4f81}.header.svelte-9584bf .logo a.svelte-9584bf{font-family:"Aldrich", serif;font-style:normal;font-size:18px;font-weight:500;text-decoration:none;display:flex;align-items:center;gap:4px}.header.svelte-9584bf .nav-wrapper.svelte-9584bf{max-width:1440px;margin-inline:auto;display:flex;justify-content:space-between;align-items:center}.header.svelte-9584bf .nav-wrapper .menu.svelte-9584bf{display:none;cursor:pointer}.header.svelte-9584bf .nav-wrapper .navLinks.svelte-9584bf{display:flex;align-items:center;list-style:none;gap:32px}.header.svelte-9584bf .nav-wrapper .navLinks .navLink.svelte-9584bf{cursor:pointer;font-weight:400;text-transform:uppercase}',
  map: '{"version":3,"file":"header.svelte","sources":["header.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { slide } from \\"svelte/transition\\";\\nimport { cubicOut } from \\"svelte/easing\\";\\nimport Button from \\"./button.svelte\\";\\nconst navLinks = [\\n    { label: \\"about\\", url: \\"/about\\" },\\n    { label: \\"projects\\", url: \\"/projects\\" },\\n    { label: \\"Vocation\\", url: \\"/vocation\\" },\\n    { label: \\"contact\\", url: \\"contact\\" }\\n];\\nlet navOpen = false;\\nconst toggleNav = () => (navOpen = !navOpen);\\n<\/script>\\n\\n<header class=\\"header\\">\\n\\t<div class=\\"nav-wrapper\\">\\n\\t\\t<span\\n\\t\\t\\trole=\\"button\\"\\n\\t\\t\\ttabindex=\\"0\\"\\n\\t\\t\\ton:keypress={toggleNav}\\n\\t\\t\\ton:click={toggleNav}\\n\\t\\t\\tclass:menu={!navOpen}\\n\\t\\t\\tclass=\\"material-symbols-sharp\\">widgets</span\\n\\t\\t>\\n\\n\\t\\t{#if navOpen}\\n\\t\\t\\t<nav\\n\\t\\t\\t\\tclass=\\"mobileNav\\"\\n\\t\\t\\t\\tclass:open={navOpen}\\n\\t\\t\\t\\ttransition:slide={{ duration: 100, easing: cubicOut }}\\n\\t\\t\\t>\\n\\t\\t\\t\\t<ul class=\\"navLinks\\">\\n\\t\\t\\t\\t\\t{#each navLinks as { label, url }}\\n\\t\\t\\t\\t\\t\\t<li class=\\"navLink\\"><a class=\\"navHref\\" href={url} on:click={toggleNav}>{label}</a></li>\\n\\t\\t\\t\\t\\t{/each}\\n\\t\\t\\t\\t</ul>\\n\\t\\t\\t</nav>\\n\\t\\t{/if}\\n\\n\\t\\t<div class=\\"nav-right\\">\\n\\t\\t\\t<nav class=\\"desktopNav\\">\\n\\t\\t\\t\\t<ul class=\\"navLinks\\">\\n\\t\\t\\t\\t\\t<h3 class=\\"logo\\">\\n\\t\\t\\t\\t\\t\\t<a href=\\"/\\">\\n\\t\\t\\t\\t\\t\\t\\t<span class=\\"material-symbols-sharp\\">beach_access</span>\\n\\t\\t\\t\\t\\t\\t\\t<span>BERIKIDS</span>\\n\\t\\t\\t\\t\\t\\t</a>\\n\\t\\t\\t\\t\\t</h3>\\n\\n\\t\\t\\t\\t\\t{#each navLinks as { label, url }}\\n\\t\\t\\t\\t\\t\\t<li class=\\"navLink\\"><a class=\\"navHref\\" href={url}>{label}</a></li>\\n\\t\\t\\t\\t\\t{/each}\\n\\t\\t\\t\\t</ul>\\n\\t\\t\\t</nav>\\n\\t\\t</div>\\n\\n\\t\\t<Button onWhite>\\n\\t\\t\\t<span class=\\"material-symbols-sharp\\"> account_balance_wallet </span>\\n\\t\\t\\t<span>donate</span>\\n\\t\\t</Button>\\n\\t</div>\\n</header>\\n\\n<style lang=\\"scss\\">.header {\\n  padding: 32px;\\n  margin-block-end: 64px;\\n  backdrop-filter: blur(20px);\\n  background-color: rgba(242, 242, 242, 0.6352941176);\\n  position: sticky;\\n  z-index: 100;\\n  top: 0;\\n}\\n.header .logo {\\n  color: #2b4f81;\\n}\\n.header .logo a {\\n  font-family: \\"Aldrich\\", serif;\\n  font-style: normal;\\n  font-size: 18px;\\n  font-weight: 500;\\n  text-decoration: none;\\n  display: flex;\\n  align-items: center;\\n  gap: 4px;\\n}\\n.header .nav-wrapper {\\n  max-width: 1440px;\\n  margin-inline: auto;\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n}\\n.header .nav-wrapper .menu {\\n  display: none;\\n  cursor: pointer;\\n}\\n.header .nav-wrapper .navLinks {\\n  display: flex;\\n  align-items: center;\\n  list-style: none;\\n  gap: 32px;\\n}\\n.header .nav-wrapper .navLinks .navLink {\\n  cursor: pointer;\\n  font-weight: 400;\\n  text-transform: uppercase;\\n}</style>\\n"],"names":[],"mappings":"AA8DmB,mCAAQ,CACzB,OAAO,CAAE,IAAI,CACb,gBAAgB,CAAE,IAAI,CACtB,eAAe,CAAE,KAAK,IAAI,CAAC,CAC3B,gBAAgB,CAAE,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,YAAY,CAAC,CACnD,QAAQ,CAAE,MAAM,CAChB,OAAO,CAAE,GAAG,CACZ,GAAG,CAAE,CACP,CACA,qBAAO,CAAC,mBAAM,CACZ,KAAK,CAAE,OACT,CACA,qBAAO,CAAC,KAAK,CAAC,eAAE,CACd,WAAW,CAAE,SAAS,CAAC,CAAC,KAAK,CAC7B,UAAU,CAAE,MAAM,CAClB,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,GAAG,CAChB,eAAe,CAAE,IAAI,CACrB,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,GAAG,CAAE,GACP,CACA,qBAAO,CAAC,0BAAa,CACnB,SAAS,CAAE,MAAM,CACjB,aAAa,CAAE,IAAI,CACnB,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,aAAa,CAC9B,WAAW,CAAE,MACf,CACA,qBAAO,CAAC,YAAY,CAAC,mBAAM,CACzB,OAAO,CAAE,IAAI,CACb,MAAM,CAAE,OACV,CACA,qBAAO,CAAC,YAAY,CAAC,uBAAU,CAC7B,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,UAAU,CAAE,IAAI,CAChB,GAAG,CAAE,IACP,CACA,qBAAO,CAAC,YAAY,CAAC,SAAS,CAAC,sBAAS,CACtC,MAAM,CAAE,OAAO,CACf,WAAW,CAAE,GAAG,CAChB,cAAc,CAAE,SAClB"}'
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const navLinks = [
    { label: "about", url: "/about" },
    { label: "projects", url: "/projects" },
    { label: "Vocation", url: "/vocation" },
    { label: "contact", url: "contact" }
  ];
  $$result.css.add(css$2);
  return `<header class="header svelte-9584bf"><div class="nav-wrapper svelte-9584bf"><span role="button" tabindex="0" class="${["material-symbols-sharp svelte-9584bf", "menu"].join(" ").trim()}" data-svelte-h="svelte-1yhx2sr">widgets</span> ${``} <div class="nav-right"><nav class="desktopNav"><ul class="navLinks svelte-9584bf"><h3 class="logo svelte-9584bf" data-svelte-h="svelte-i7152f"><a href="/" class="svelte-9584bf"><span class="material-symbols-sharp">beach_access</span> <span>BERIKIDS</span></a></h3> ${each(navLinks, ({ label, url }) => {
    return `<li class="navLink svelte-9584bf"><a class="navHref svelte-9584bf"${add_attribute("href", url, 0)}>${escape(label)}</a></li>`;
  })}</ul></nav></div> ${validate_component(Button, "Button").$$render($$result, { onWhite: true }, {}, {
    default: () => {
      return `<span class="material-symbols-sharp" data-svelte-h="svelte-14p641t">account_balance_wallet</span> <span data-svelte-h="svelte-1c5bl9">donate</span>`;
    }
  })}</div> </header>`;
});
const css$1 = {
  code: "footer.svelte-1fxett9.svelte-1fxett9{padding:64px 20px;background-color:#ffd966}footer.svelte-1fxett9 .footer-wrapper.svelte-1fxett9{max-width:1440px;margin-inline:auto}footer.svelte-1fxett9 .footer-wrapper .copyright.svelte-1fxett9{text-align:center;font-size:18px}",
  map: '{"version":3,"file":"footer.svelte","sources":["footer.svelte"],"sourcesContent":["<footer>\\n\\t<div class=\\"footer-wrapper\\">\\n\\t\\t<p class=\\"copyright\\">\\n\\t\\t\\t© {new Date().getFullYear()} berikids. All rights reserved.\\n\\t\\t</p>\\n\\t</div>\\n</footer>\\n\\n<style lang=\\"scss\\">footer {\\n  padding: 64px 20px;\\n  background-color: #ffd966;\\n}\\nfooter .footer-wrapper {\\n  max-width: 1440px;\\n  margin-inline: auto;\\n}\\nfooter .footer-wrapper .copyright {\\n  text-align: center;\\n  font-size: 18px;\\n}</style>\\n"],"names":[],"mappings":"AAQmB,oCAAO,CACxB,OAAO,CAAE,IAAI,CAAC,IAAI,CAClB,gBAAgB,CAAE,OACpB,CACA,qBAAM,CAAC,8BAAgB,CACrB,SAAS,CAAE,MAAM,CACjB,aAAa,CAAE,IACjB,CACA,qBAAM,CAAC,eAAe,CAAC,yBAAW,CAChC,UAAU,CAAE,MAAM,CAClB,SAAS,CAAE,IACb"}'
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<footer class="svelte-1fxett9"><div class="footer-wrapper svelte-1fxett9"><p class="copyright svelte-1fxett9">© ${escape((/* @__PURE__ */ new Date()).getFullYear())} berikids. All rights reserved.</p></div> </footer>`;
});
const toasts = writable([]);
const css = {
  code: ".toast-container.svelte-ggxik1.svelte-ggxik1{position:fixed;bottom:32px;left:32px;margin-inline:auto;display:flex;flex-direction:column;z-index:1000;gap:16px;transition:all 0.3s ease-in-out}.toast-container.svelte-ggxik1 .toast.svelte-ggxik1{min-height:50px;width:max-content;display:flex;align-items:center;gap:0.5rem;padding:8px 16px;border-radius:16px;cursor:pointer;border:none;font-size:24px;text-transform:capitalize;transition:all 0.3s ease-in-out}.toast-container.svelte-ggxik1 .toast .material-symbols-sharp.svelte-ggxik1{font-size:24px}.toast-container.svelte-ggxik1 .toast.info.svelte-ggxik1{color:rgb(36.625, 67.2877906977, 109.875);background-color:rgb(211.875, 223.9098837209, 240.625)}.toast-container.svelte-ggxik1 .toast.success.svelte-ggxik1{color:rgb(66.9914893617, 114.1063829787, 58.8936170213);background-color:rgb(220.3787234043, 235.7659574468, 217.7340425532)}.toast-container.svelte-ggxik1 .toast.error.svelte-ggxik1{color:rgb(185.8301886792, 22.1886792453, 10.1698113208);background-color:rgb(253.2617924528, 225.2924528302, 223.2382075472)}.toast-container.svelte-ggxik1 .toast span.svelte-ggxik1{font-size:0.9rem}",
  map: '{"version":3,"file":"toast.svelte","sources":["toast.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { toasts } from \\"$lib/stores/toasts\\";\\nimport { fade } from \\"svelte/transition\\";\\nconst removeToast = (id) => {\\n    $toasts = $toasts.filter((toast) => toast.id !== id);\\n};\\n// prettier-ignore\\nconst renderIcon = (type) => {\\n    switch (type) {\\n        case \\"success\\": return \\"check_circle\\";\\n        case \\"error\\": return \\"error\\";\\n        case \\"warning\\": return \\"warning\\";\\n        case \\"info\\": return \\"info\\";\\n    }\\n};\\n$: {\\n    $toasts.forEach(({ id, duration }) => {\\n        setTimeout(() => {\\n            removeToast(id);\\n        }, duration);\\n    });\\n}\\n<\/script>\\n\\n<div class=\\"toast-container\\" transition:fade={{ duration: 500, delay: 300 }}>\\n\\t{#each $toasts as toast}\\n\\t\\t<button\\n\\t\\t\\tclass=\\"toast\\"\\n\\t\\t\\tclass:success={toast.type === \\"success\\"}\\n\\t\\t\\tclass:error={toast.type === \\"error\\"}\\n\\t\\t\\tclass:warning={toast.type === \\"warning\\"}\\n\\t\\t\\tclass:info={toast.type === \\"info\\"}\\n\\t\\t\\ton:click={() => removeToast(toast.id)}\\n\\t\\t>\\n\\t\\t\\t<span class=\\"material-symbols-sharp\\">{renderIcon(toast.type)}</span>\\n\\t\\t\\t<span>{toast.message}</span>\\n\\t\\t</button>\\n\\t{/each}\\n</div>\\n\\n<style lang=\\"scss\\">.toast-container {\\n  position: fixed;\\n  bottom: 32px;\\n  left: 32px;\\n  margin-inline: auto;\\n  display: flex;\\n  flex-direction: column;\\n  z-index: 1000;\\n  gap: 16px;\\n  transition: all 0.3s ease-in-out;\\n}\\n.toast-container .toast {\\n  min-height: 50px;\\n  width: max-content;\\n  display: flex;\\n  align-items: center;\\n  gap: 0.5rem;\\n  padding: 8px 16px;\\n  border-radius: 16px;\\n  cursor: pointer;\\n  border: none;\\n  font-size: 24px;\\n  text-transform: capitalize;\\n  transition: all 0.3s ease-in-out;\\n}\\n.toast-container .toast .material-symbols-sharp {\\n  font-size: 24px;\\n}\\n.toast-container .toast.info {\\n  color: rgb(36.625, 67.2877906977, 109.875);\\n  background-color: rgb(211.875, 223.9098837209, 240.625);\\n}\\n.toast-container .toast.success {\\n  color: rgb(66.9914893617, 114.1063829787, 58.8936170213);\\n  background-color: rgb(220.3787234043, 235.7659574468, 217.7340425532);\\n}\\n.toast-container .toast.error {\\n  color: rgb(185.8301886792, 22.1886792453, 10.1698113208);\\n  background-color: rgb(253.2617924528, 225.2924528302, 223.2382075472);\\n}\\n.toast-container .toast span {\\n  font-size: 0.9rem;\\n}</style>\\n"],"names":[],"mappings":"AAuCmB,4CAAiB,CAClC,QAAQ,CAAE,KAAK,CACf,MAAM,CAAE,IAAI,CACZ,IAAI,CAAE,IAAI,CACV,aAAa,CAAE,IAAI,CACnB,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,OAAO,CAAE,IAAI,CACb,GAAG,CAAE,IAAI,CACT,UAAU,CAAE,GAAG,CAAC,IAAI,CAAC,WACvB,CACA,8BAAgB,CAAC,oBAAO,CACtB,UAAU,CAAE,IAAI,CAChB,KAAK,CAAE,WAAW,CAClB,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,GAAG,CAAE,MAAM,CACX,OAAO,CAAE,GAAG,CAAC,IAAI,CACjB,aAAa,CAAE,IAAI,CACnB,MAAM,CAAE,OAAO,CACf,MAAM,CAAE,IAAI,CACZ,SAAS,CAAE,IAAI,CACf,cAAc,CAAE,UAAU,CAC1B,UAAU,CAAE,GAAG,CAAC,IAAI,CAAC,WACvB,CACA,8BAAgB,CAAC,MAAM,CAAC,qCAAwB,CAC9C,SAAS,CAAE,IACb,CACA,8BAAgB,CAAC,MAAM,mBAAM,CAC3B,KAAK,CAAE,IAAI,MAAM,CAAC,CAAC,aAAa,CAAC,CAAC,OAAO,CAAC,CAC1C,gBAAgB,CAAE,IAAI,OAAO,CAAC,CAAC,cAAc,CAAC,CAAC,OAAO,CACxD,CACA,8BAAgB,CAAC,MAAM,sBAAS,CAC9B,KAAK,CAAE,IAAI,aAAa,CAAC,CAAC,cAAc,CAAC,CAAC,aAAa,CAAC,CACxD,gBAAgB,CAAE,IAAI,cAAc,CAAC,CAAC,cAAc,CAAC,CAAC,cAAc,CACtE,CACA,8BAAgB,CAAC,MAAM,oBAAO,CAC5B,KAAK,CAAE,IAAI,cAAc,CAAC,CAAC,aAAa,CAAC,CAAC,aAAa,CAAC,CACxD,gBAAgB,CAAE,IAAI,cAAc,CAAC,CAAC,cAAc,CAAC,CAAC,cAAc,CACtE,CACA,8BAAgB,CAAC,MAAM,CAAC,kBAAK,CAC3B,SAAS,CAAE,MACb"}'
};
const Toast = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $toasts, $$unsubscribe_toasts;
  $$unsubscribe_toasts = subscribe(toasts, (value) => $toasts = value);
  const removeToast = (id) => {
    set_store_value(toasts, $toasts = $toasts.filter((toast) => toast.id !== id), $toasts);
  };
  const renderIcon = (type) => {
    switch (type) {
      case "success":
        return "check_circle";
      case "error":
        return "error";
      case "warning":
        return "warning";
      case "info":
        return "info";
    }
  };
  $$result.css.add(css);
  {
    {
      $toasts.forEach(({ id, duration }) => {
        setTimeout(
          () => {
            removeToast(id);
          },
          duration
        );
      });
    }
  }
  $$unsubscribe_toasts();
  return `<div class="toast-container svelte-ggxik1">${each($toasts, (toast) => {
    return `<button class="${[
      "toast svelte-ggxik1",
      (toast.type === "success" ? "success" : "") + " " + (toast.type === "error" ? "error" : "") + " " + (toast.type === "warning" ? "warning" : "") + " " + (toast.type === "info" ? "info" : "")
    ].join(" ").trim()}"><span class="material-symbols-sharp svelte-ggxik1">${escape(renderIcon(toast.type))}</span> <span class="svelte-ggxik1">${escape(toast.message)}</span> </button>`;
  })} </div>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-jfmht1_START -->${$$result.title = `<title>berikids</title>`, ""}<meta name="title" content="berikids"><meta name="description" content="empowering lives through sustainable development initiatives"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="use-credentials"><link href="https://fonts.googleapis.com/css2?family=Aldrich&amp;display=swap" rel="stylesheet"><meta property="og:description" content="empowering lives through sustainable development initiatives"><meta property="og:type" content="website"><meta property="og:title" content="berikids"><meta property="og:url" content="/opengraph.png"><meta property="og:image" content="/opengraph.png"><meta property="twitter:description" content="empowering lives through sustainable development initiatives"><meta property="twitter:title" content="berikids"><meta property="twitter:card" content="summary_large_image"><meta property="twitter:image" content="/opengraph.png"><meta property="twitter:url" content="/opengraph.png"><!-- HEAD_svelte-jfmht1_END -->`, ""} ${validate_component(Header, "Header").$$render($$result, {}, {}, {})} ${validate_component(Toast, "Toast").$$render($$result, {}, {}, {})} ${slots.default ? slots.default({}) : ``} ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Layout as default
};
