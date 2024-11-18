import {
	c as create_ssr_component,
	b as add_attribute,
	v as validate_component,
	e as each,
	d as escape
} from "../../chunks/ssr.js"
import { B as Button } from "../../chunks/button.js"
const css = {
	code: "a.svelte-1an5rw0{width:120px}",
	map: '{"version":3,"file":"logo.svelte","sources":["logo.svelte"],"sourcesContent":["<a href=\\"/\\">\\n\\t<img src=\\"/logo.png\\" alt=\\"logo\\" />\\n</a>\\n\\n<style lang=\\"scss\\">a {\\n  width: 120px;\\n}</style>\\n"],"names":[],"mappings":"AAImB,gBAAE,CACnB,KAAK,CAAE,KACT"}'
}
const Logo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	$$result.css.add(css)
	return `<a href="/" class="svelte-1an5rw0" data-svelte-h="svelte-sfa9rn"><img src="/logo.png" alt="logo"> </a>`
})
const navRight = "_navRight_rf326_18"
const ctaBtns = "_ctaBtns_rf326_55"
const style = {
	navRight,
	ctaBtns
}
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	const navLinks = [
		{ label: "about us", url: "/about-us" },
		{
			label: "get involved",
			url: "/get-involved"
		},
		{ label: "our impact", url: "/our-impact" }
	]
	return `<header><div${add_attribute("class", style.navRight, 0)}>${validate_component(Logo, "Logo").$$render($$result, {}, {}, {})} <nav><ul>${each(
		navLinks,
		({ label, url }) => {
			return `<li><a${add_attribute("href", url, 0)}>${escape(label)}</a> </li>`
		}
	)}</ul></nav></div> <div${add_attribute("class", style.ctaBtns, 0)}>${validate_component(
		Button,
		"Button"
	).$$render(
		$$result,
		{ primary: true, onWhite: true },
		{},
		{
			default: () => {
				return `<span data-svelte-h="svelte-hkqajq">join</span> <span class="material-symbols-sharp" data-svelte-h="svelte-10wwtzw">handshake</span>`
			}
		}
	)} ${validate_component(Button, "Button").$$render(
		$$result,
		{ onWhite: true },
		{},
		{
			default: () => {
				return `<span data-svelte-h="svelte-1c5bl9">donate</span> <span class="material-symbols-sharp" data-svelte-h="svelte-dko6le">compost</span>`
			}
		}
	)}</div></header>`
})
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})} ${slots.default ? slots.default({}) : ``}`
})
export { Layout as default }
