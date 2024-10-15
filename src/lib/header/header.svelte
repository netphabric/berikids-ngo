<script lang="ts">
	import DonateBtn from "$lib/button/donateBtn.svelte"
	import SupportBtn from "$lib/button/supportBtn.svelte"
	import LogoYellow from "$lib/logo/logoYellow.svelte"
	import style from "./header.module.scss"

	const navLinks = [
		{ label: "about us", url: "/about-us" },
		{ label: "get involved", url: "/get-involved" },
		{ label: "our impact", url: "/our-impact" }
	]
</script>

<header>
	<div class={style.navRight}>
		<a href="/">
			<LogoYellow />
		</a>

		<nav>
			<ul>
				{#each navLinks as { label, url }}
					<li>
						<a href={url}>{label}</a>
					</li>
				{/each}
			</ul>
		</nav>
	</div>

	<div class={style.ctaBtns}>
		<SupportBtn />
		<DonateBtn />
	</div>
</header>
