<script lang="ts">
	import { page } from "$app/stores"
	import Button from "$lib/components/button.svelte"

	const pathname = $page.url.pathname
	const navlinks = ["/projects", "/vocation", "/contact"]
	const matchesNavlinks = navlinks.includes(pathname)
</script>

<section class="wip-root">
	<div class="content-wrapper">
		{#if matchesNavlinks}
			<span class="material-symbols-sharp not-found-icon"> fire_truck </span>
			<h1>pending construction...</h1>
		{:else}
			<span class="material-symbols-sharp not-found-icon" style="color:salmon">cloud</span>
			<h1>🤿 Nothing here!!...</h1>
		{/if}

		<Button>
			<a href="/">
				<span class="material-symbols-sharp">villa</span>
				<span>go back home</span>
			</a>
		</Button>
	</div>
</section>

<style lang="scss">
	.wip-root {
		height: calc(75vh - 70px);
		display: grid;
		place-items: center;
		padding-inline: 20px;

		.content-wrapper {
			display: flex;
			flex-direction: column;
			align-items: center;
			text-align: center;
			gap: 16px;

			.not-found-icon {
				font-size: rem(150);

				@include minWidth("tablet") {
					font-size: rem(200);
				}
			}

			h1 {
				color: #2b4f81;
				font-size: $h5;
				text-transform: uppercase;

				@include minWidth("tablet") {
					font-size: $h3;
				}

				@include minWidth("desktop") {
					font-size: $h2;
				}
			}

			a {
				display: flex;
				align-items: center;
				gap: rem(8);

				span {
					color: $white;
					font-size: $large;
				}
			}
		}
	}
</style>
