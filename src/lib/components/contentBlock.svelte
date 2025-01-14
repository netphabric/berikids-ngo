<script lang="ts">
	import { highlightText } from "utils/textHightlight"
	import Chip from "./chip.svelte"

	export let blockLayout = false
	export let contentChipIcon: string
	export let contentChipText: string
	export let contentChipColor: "red" | "blue" | "green"
	export let contentTitle: string
	export let contentTitleHighlight: string
	export let contentDescription: string
	export let contentMedia: string
	export let ctaButtons: { label: string }[] = []

	function parseContentMediaType(mediaURL: string) {
		return mediaURL.endsWith(".mp4") ? { type: "video" } : { type: "image" }
	}
</script>

<section class="content-render">
	<div class="content-wrapper" class:blockLayout>
		<div class="block-content">
			<Chip chipIcon={contentChipIcon} chipText={contentChipText} chipColor={contentChipColor} />

			<h2 class="content-title">
				{#each highlightText(contentTitle, contentTitleHighlight) as word}
					<span class:highlight={word.isHighlighted}>{word.text}</span>{" "}
				{/each}
			</h2>

			<p class="content-des">{contentDescription}</p>

			{#if ctaButtons}
				<div class="content-cta-container">
					{#each ctaButtons as cta}
						<button>{cta.label}</button>
					{/each}
				</div>
			{/if}
		</div>

		<div class="content-media">
			{#if parseContentMediaType(contentMedia).type === "video"}
				<video muted playsinline disablepictureinpicture controls>
					<source src={contentMedia} type="video/mp4" />
				</video>
			{:else}
				<img src={contentMedia} alt="hero" />
			{/if}
		</div>
	</div>
</section>

<style lang="scss">
	.content-render {
		padding: 32px;
		margin-block: 64px;

		.content-wrapper {
			display: grid;
			grid-template-columns: 1fr 1fr;
			max-width: 1440px;
			margin-inline: auto;
			gap: 64px;

			&.blockLayout {
				display: flex;
				flex-direction: column;
				align-items: center;

				.block-content,
				.content-cta-container {
					max-width: 70%;
					margin-inline: auto;
					text-align: center;
					justify-content: center;
				}
			}

			.block-content {
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				align-items: flex-start;
				gap: 16px;

				.content-title {
					font-size: 52px;
					font-weight: 700;
					line-height: 1.2;

					span {
						&.highlight {
							color: orangered;
						}
					}
				}

				.content-des {
					font-size: 18px;
					font-weight: 400;
					line-height: 1.5;
					opacity: 0.8;
				}
			}

			.content-media {
				display: grid;
				border-radius: 8px;
				place-items: center;
				overflow: hidden;

				img {
					width: 100%;
					height: 100%;
					object-fit: cover;
				}
			}

			.content-cta-container {
				display: flex;
				gap: 16px;
			}
		}
	}
</style>
