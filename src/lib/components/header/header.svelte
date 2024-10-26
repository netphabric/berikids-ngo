<script lang="ts">
	import { slide } from "svelte/transition"
	import { cubicOut } from "svelte/easing"
	import Button from "$lib/components/button/button.svelte"
	import Logo from "$lib/components/logo/logo.svelte"
	import styles from "./header.module.scss"

	const navLinks = [
		{ label: "home", url: "/" },
		{ label: "about us", url: "/about-us" },
		{ label: "get involved", url: "/get-involved" },
		{ label: "our impact", url: "/our-impact" },
		{ label: "contact", url: "contact" }
	]

	let navOpen = false
	const toggleNav = () => (navOpen = !navOpen)
</script>

<header>
	<span
		role="button"
		tabindex="0"
		on:keypress={toggleNav}
		on:click={toggleNav}
		class={`material-symbols-sharp ${styles.menu}`}>widgets</span
	>

	{#if navOpen}
		<nav
			transition:slide={{ duration: 100, easing: cubicOut }}
			class={`${styles.mobileNav} ${navOpen && styles.open}`}
		>
			<ul>
				{#each navLinks as { label, url }}
					<li><a href={url} on:click={toggleNav}>{label}</a></li>
				{/each}
			</ul>
		</nav>
	{/if}

	<div class={styles.navRight}>
		<Logo />

		<nav>
			<ul>
				{#each navLinks as { label, url }}
					<li><a href={url}>{label}</a></li>
				{/each}
			</ul>
		</nav>
	</div>

	<div class={styles.ctaBtns}>
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
