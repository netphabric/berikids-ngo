<script lang="ts">
	import { slide } from "svelte/transition"
	import { cubicOut } from "svelte/easing"
	import Button from "./button.svelte"

	const navLinks = [
		{ label: "home", url: "/" },
		{ label: "about", url: "/about" },
		{ label: "projects", url: "/projects" },
		{ label: "vocation", url: "/vocation" },
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
		>
			<span class="material-symbols-sharp">style</span>
			<span>menu</span>
		</span>

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
			<a href="/donate">
				<span class="material-symbols-sharp"> account_balance_wallet </span>
				<span>donate</span>
			</a>
		</Button>
	</div>
</header>

<style lang="scss">
	.header {
		padding: 20px;
		backdrop-filter: blur(20px);
		background-color: $opaque-white;
		position: sticky;
		z-index: 100;
		top: 0;

		@include minWidth("tablet") {
			margin-block-end: 64px;
			padding: 32px;
		}

		.logo {
			color: $primary;
			display: flex;
			align-items: center;
			gap: rem(4);

			a {
				font-size: $large;
				font-weight: $light;
				font-family: $logo-font;
			}
		}

		.nav-wrapper {
			max-width: $max-width;
			margin-inline: auto;
			display: flex;
			justify-content: space-between;
			align-items: center;

			.menu {
				min-width: rem(118);
				cursor: pointer;
				display: flex;
				align-items: center;
				gap: rem(8);
				color: $secondary;
				font-size: $medium;
				font-weight: $semiBold;
				border-radius: rem(8);
				padding: rem(8) rem(16);
				background-color: $primary;

				@include minWidth("tablet") {
					display: none;
				}
			}

			.nav-right {
				display: none;

				@include minWidth("tablet") {
					display: block;
				}
			}

			.mobileNav {
				width: 100%;
				height: 100dvh;
				overflow: hidden;

				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				gap: rem(16);

				top: 0;
				right: 0;
				position: fixed;
				padding: rem(32) rem(16);
				background-color: $white;

				.navLinks {
					display: flex;
					flex-direction: column;
					align-items: unset;
					gap: rem(16);

					.navLink {
						a {
							font-size: $large;
							font-weight: $semiBold;
						}
					}
				}
			}

			.navLinks {
				display: flex;
				align-items: center;
				list-style: none;
				gap: rem(32);

				.navLink {
					@include underlineOnHover;

					a {
						text-decoration: none;
						text-transform: uppercase;
						font-weight: $normal;

						@include minWidth("tablet") {
							font-size: $regular;
						}
					}
				}
			}
		}
	}
</style>
