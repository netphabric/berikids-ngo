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
			class="material-symbols-sharp">filter_list</span
		>

		{#if navOpen}
			<nav
				class="mobileNav"
				class:open={navOpen}
				transition:slide={{ duration: 100, easing: cubicOut }}
			>
				<h3 class="logo">
					<a href="/" on:click={toggleNav}>
						<span class="material-symbols-sharp">beach_access</span>
						<span>BERIKIDS</span>
					</a>
				</h3>

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

		<Button>
			<span class="material-symbols-sharp"> account_balance_wallet </span>
			<span>donate</span>
		</Button>
	</div>
</header>

<style lang="scss">
	.header {
		padding: 32px;
		backdrop-filter: blur(20px);
		background-color: #f2f2f2a2;
		position: sticky;
		z-index: 100;
		top: 0;

		@media (min-width: 768px) {
			margin-block-end: 64px;
		}

		.logo {
			color: #2b4f81;

			a {
				font-family: "Aldrich", serif;
				font-style: normal;
				font-size: 24px;
				font-weight: 200;
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
				font-size: 40px;
				cursor: pointer;

				@media (min-width: 768px) {
					display: none;
				}
			}

			.nav-right {
				display: none;

				@media (min-width: 768px) {
					display: block;
				}
			}

			.mobileNav {
				position: absolute;
				top: 0;
				right: 0;
				width: 100%;
				height: 100vh;
				padding: 32px 20px;
				backdrop-filter: blur(100px);
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				gap: 16px;

				.navLinks {
					display: flex;
					flex-direction: column;
					align-items: unset;
					gap: 16px;

					.navLink {
						a {
							font-size: 22px;
							font-weight: 600;
						}
					}
				}
			}

			.navLinks {
				display: flex;
				align-items: center;
				list-style: none;
				gap: 32px;

				.navLink {
					cursor: pointer;

					a {
						text-decoration: none;
						text-transform: uppercase;
						font-weight: 400;

						@media (min-width: 768px) {
							font-size: 16px;
						}

						@media (min-width: 1024px) {
							font-size: 18px;
						}
					}
				}
			}
		}
	}
</style>
