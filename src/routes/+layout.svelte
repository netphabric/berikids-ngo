<script>
	// fonts
	import "@fontsource-variable/montserrat"
	import "@fontsource/poppins/300.css"
	import "@fontsource/poppins/400.css"
	import "@fontsource/poppins/500.css"
	import "@fontsource/poppins/600.css"
	import "@fontsource/poppins/700.css"
	import "@fontsource/poppins/800.css"
	import "material-symbols/sharp.scss"
	import "styles/global.scss"
	import Header from "$lib/components/header.svelte"
	import Footer from "$lib/components/footer/footer.svelte"
	import Toast from "$lib/components/toast/toast.svelte"
</script>

<svelte:head>
	<!-- Primary Meta Tags -->
	<title>berikids</title>
	<meta name="title" content="berikids" />
	<meta name="description" content="empowering lives through sustainable development initiatives" />

	<!-- Open Graph / Facebook -->
	<meta
		property="og:description"
		content="empowering lives through sustainable development initiatives"
	/>
	<meta property="og:type" content="website" />
	<meta property="og:title" content="berikids" />
	<meta property="og:url" content="/opengraph.png" />
	<meta property="og:image" content="/opengraph.png" />

	<!-- Twitter -->
	<meta
		property="twitter:description"
		content="empowering lives through sustainable development initiatives"
	/>
	<meta property="twitter:title" content="berikids" />
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:image" content="/opengraph.png" />
	<meta property="twitter:url" content="/opengraph.png" />
</svelte:head>

<Header />
<Toast />
<slot />
<Footer />
