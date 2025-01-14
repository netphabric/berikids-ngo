<script lang="ts">
	import { page } from "$app/stores"

	const pathname = $page.url.pathname
	const navlinks = ["/", "/about-us", "/projects", "/vocational-training", "/contact", "/gallery"]
	const matchesNavlinks = navlinks.includes(pathname)
</script>

<section class="wip-root">
	<div class="content-wrapper">
		{#if matchesNavlinks}
			<span class="material-symbols-sharp">fire_truck</span>
			<h1>pending construction...</h1>
		{:else}
			<span class="material-symbols-sharp" style="color:salmon">front_hand</span>
			<h1>🤿 Nothing here!!...</h1>
		{/if}

		<a href="/">
			<span class="material-symbols-sharp">arrow_left_alt</span>
			<span>go back home</span>
		</a>
	</div>
</section>

<style lang="scss">
	.wip-root {
		display: grid;
		place-items: center;
		padding-inline: 20px;
		margin-top: 100px;

		.content-wrapper {
			display: flex;
			flex-direction: column;
			align-items: center;
			text-align: center;
			gap: 16px;

			span {
				color: #2b4f81;
				font-size: 52px;
			}

			h1 {
				color: #2b4f81;
				font-size: 52px;
				text-transform: uppercase;
			}

			a {
				display: flex;
				align-items: center;
				gap: 8px;

				span {
					color: #4e2c14;
					font-size: 18px;
				}
			}
		}
	}
</style>
