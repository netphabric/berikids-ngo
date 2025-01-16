<script lang="ts">
	import { slide } from "svelte/transition"
	import { cubicOut } from "svelte/easing"
	import Button from "./button.svelte"

	const navLinks = [
		{ label: "about", url: "/about" },
		{ label: "projects", url: "/projects" },
		{ label: "Vocation", url: "/vocation" },
		{ label: "contact", url: "contact" }
	]

	let navOpen = false
	const toggleNav = () => (navOpen = !navOpen)
</script>

<header class="header">
	<div class="nav-wrapper">
		<span
			role="button"
			tabindex="0"
			on:keypress={toggleNav}
			on:click={toggleNav}
			class:menu={!navOpen}
			class="material-symbols-sharp">widgets</span
		>

		{#if navOpen}
			<nav
				class="mobileNav"
				class:open={navOpen}
				transition:slide={{ duration: 100, easing: cubicOut }}
			>
				<ul class="navLinks">
					{#each navLinks as { label, url }}
						<li class="navLink"><a class="navHref" href={url} on:click={toggleNav}>{label}</a></li>
					{/each}
				</ul>
			</nav>
		{/if}

		<div class="nav-right">
			<nav class="desktopNav">
				<ul class="navLinks">
					<h3 class="logo">
						<a href="/">
							<span class="material-symbols-sharp">beach_access</span>
							<span>BERIKIDS</span>
						</a>
					</h3>

					{#each navLinks as { label, url }}
						<li class="navLink"><a class="navHref" href={url}>{label}</a></li>
					{/each}
				</ul>
			</nav>
		</div>

		<Button onWhite>
			<span class="material-symbols-sharp"> account_balance_wallet </span>
			<span>donate</span>
		</Button>
	</div>
</header>

<style lang="scss">
	.header {
		padding: 32px;
		margin-block-end: 64px;
		backdrop-filter: blur(20px);
		background-color: #f2f2f2a2;
		position: sticky;
		z-index: 100;
		top: 0;

		.logo {
			color: #2b4f81;

			a {
				font-family: "Aldrich", serif;
				font-style: normal;
				font-size: 18px;
				font-weight: 500;
				text-decoration: none;

				display: flex;
				align-items: center;
				gap: 4px;
			}
		}

		.nav-wrapper {
			max-width: 1440px;
			margin-inline: auto;
			display: flex;
			justify-content: space-between;
			align-items: center;

			.menu {
				display: none;
				cursor: pointer;
			}

			.navLinks {
				display: flex;
				align-items: center;
				list-style: none;
				gap: 32px;

				.navLink {
					cursor: pointer;
					font-weight: 500;
					text-transform: uppercase;
				}
			}
		}
	}
</style>
