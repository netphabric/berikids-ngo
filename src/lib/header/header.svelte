<script lang="ts">
	import Button from "$lib/button/button.svelte"
	import Logo from "$lib/logo/logo.svelte"
	import style from "./header.module.scss"

	const navLinks = [
		{ label: "about us", url: "/about-us" },
		{ label: "get involved", url: "/get-involved" },
		{ label: "our impact", url: "/our-impact" },
		{ label: "gallery", url: "/gallery" }
	]
</script>

<header>
	<div class={style.navRight}>
		<Logo />

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
		<Button primary onWhite>
			<span>join</span>
			<span class="material-symbols-sharp">handshake</span>
		</Button>

		<Button onWhite>
			<span>donate</span>
			<span class="material-symbols-sharp">compost</span>
		</Button>
	</div>
</header>
