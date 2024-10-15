<script>
	// fonts
	import "@fontsource-variable/montserrat"
	import "@fontsource/poppins/300.css"
	import "@fontsource/poppins/400.css"
	import "@fontsource/poppins/500.css"
	import "@fontsource/poppins/600.css"
	import "@fontsource/poppins/700.css"
	import "@fontsource/poppins/800.css"

	// icon fonts
	import "material-symbols/sharp.scss"

	// global style
	import "styles/global.scss"

	import Header from "$lib/header/header.svelte"
</script>

<Header />
<slot />
