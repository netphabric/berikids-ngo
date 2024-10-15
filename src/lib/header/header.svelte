<script lang="ts">
	import Button from "$lib/button/button.svelte"
	import LogoYellow from "$lib/logo/logoYellow.svelte"
	import style from "./header.module.scss"

	const navLinks = [
		{ label: "About us", url: "/about-us" },
		{ label: "Get Involved", url: "/get-involved" },
		{ label: "Our Impact", url: "/our-impact" }
	]
</script>

<header>
	<div class={style.navRight}>
		<LogoYellow />

		<nav>
			<ul>
				{#each navLinks as { label, url }}
					<li><a href={url}>{label}</a></li>
				{/each}
			</ul>
		</nav>
	</div>

	<div class={style.ctaBtns}>
		<Button primary>Join</Button>
		<Button>Donate</Button>
	</div>
</header>
