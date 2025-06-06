<script>
	// fonts
	import "@fontsource-variable/montserrat"
	import "@fontsource/poppins/300.css"
	import "@fontsource/poppins/400.css"
	import "@fontsource/poppins/500.css"
	import "@fontsource/poppins/600.css"
	import "@fontsource/poppins/700.css"
	import "@fontsource/poppins/800.css"
	import "material-symbols/sharp.css"
	import "styles/global.scss"

	import Header from "$lib/components/header.svelte"
	import Footer from "$lib/components/footer.svelte"
	import Toast from "$lib/components/toast.svelte"

	import { PUBLIC_BASE_URL } from "$env/static/public"
</script>

<svelte:head>
	<!-- Fonts -->
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="use-credentials" />
	<link href="https://fonts.googleapis.com/css2?family=Aldrich&display=swap" rel="stylesheet" />

	<!-- Open Graph / Facebook -->
	<meta
		property="og:description"
		content="Connecting communities through creative solutions for sustainable development"
	/>
	<meta property="og:type" content="website" />
	<meta property="og:title" content="berikids" />
	<meta property="og:url" content={PUBLIC_BASE_URL} />
	<meta property="og:image" content={`${PUBLIC_BASE_URL}/opengraph.webp`} />

	<!-- Twitter -->
	<meta
		property="twitter:description"
		content="Berikids is a non-profit organization dedicated to connecting communities through creative solutions for sustainable development."
	/>
	<meta property="twitter:title" content="berikids NGO" />
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content={PUBLIC_BASE_URL} />
	<meta property="twitter:image" content={`${PUBLIC_BASE_URL}/opengraph.webp`} />
</svelte:head>

<Header />
<Toast />
<slot />
<Footer />
