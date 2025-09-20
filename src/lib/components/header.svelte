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
		position: sticky;
		z-index: 100;
		top: 0;
		background-color: $opaque-white;
		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg fill='%23e2e2e2' fill-opacity='0.13'%3E%3Cpath fill-rule='evenodd' d='M11 0l5 20H6l5-20zm42 31a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM0 72h40v4H0v-4zm0-8h31v4H0v-4zm20-16h20v4H20v-4zM0 56h40v4H0v-4zm63-25a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM53 41a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-30 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-28-8a5 5 0 0 0-10 0h10zm10 0a5 5 0 0 1-10 0h10zM56 5a5 5 0 0 0-10 0h10zm10 0a5 5 0 0 1-10 0h10zm-3 46a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM21 0l5 20H16l5-20zm43 64v-4h-4v4h-4v4h4v4h4v-4h4v-4h-4zM36 13h4v4h-4v-4zm4 4h4v4h-4v-4zm-4 4h4v4h-4v-4zm8-8h4v4h-4v-4z'/%3E%3C/g%3E%3C/svg%3E");

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
			gap: rem(16);
			justify-content: space-between;
			align-items: center;

			.menu {
				cursor: pointer;
				display: flex;
				align-items: center;
				gap: rem(8);
				color: $secondary;
				font-size: $medium;
				font-weight: $semiBold;
				border-radius: rem(8);
				padding: rem(4) rem(8);
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
				gap: rem(48);

				@include minWidth("tablet") {
					gap: rem(32);
				}

				.navLink {
					@include underlineOnHover;

					a {
						text-decoration: none;
						text-transform: uppercase;
						font-weight: $normal;

						@include minWidth("tablet") {
							font-size: $medium;
						}

						@include minWidth("desktop") {
							font-size: $regular;
						}
					}
				}
			}
		}
	}
</style>
