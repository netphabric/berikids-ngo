<script lang="ts">
	import Button from "$lib/button/button.svelte"
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
		<Button primary>
			<span>join</span>
			<span class="material-symbols-sharp">handshake</span>
		</Button>

		<Button>
			<span>donate</span>
			<span class="material-symbols-sharp">compost</span>
		</Button>
	</div>
</header>
