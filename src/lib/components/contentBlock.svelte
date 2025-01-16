<script lang="ts">
	import { highlightText } from "utils/textHightlight"
	import Button from "$lib/components/button.svelte"
	import Chip from "./chip.svelte"

	export let heroBlock = false
	export let blockLayout = false
	export let flexReverse = false
	export let contentMedia = ""
	export let contentChipIcon: string
	export let contentChipText: string
	export let contentTitle: string
	export let contentTitleHighlight: string
	export let contentDescription: string
	export let ctaButtons: { label: string; icon?: string; url?: string }[] = []
	export let contentChipColor: "red" | "blue" | "green" | "yellow"

	function parseContentMediaType(mediaURL: string) {
		return mediaURL.endsWith(".mp4") ? { type: "video" } : { type: "image" }
	}
</script>

<section class="content-render">
	<div class="content-wrapper" class:blockLayout class:flexReverse>
		<div class="block-content">
			<Chip chipIcon={contentChipIcon} chipText={contentChipText} chipColor={contentChipColor} />

			{#if heroBlock}
				<h1 class="content-title">
					{#each highlightText(contentTitle, contentTitleHighlight) as word}
						<span class:highlight={word.isHighlighted}>{word.text} </span>
					{/each}
				</h1>
			{:else}
				<h2 class="content-title">
					{#each highlightText(contentTitle, contentTitleHighlight) as word}
						<span class:highlight={word.isHighlighted}>{word.text} </span>
					{/each}
				</h2>
			{/if}

			<p class="content-des">{contentDescription}</p>

			{#if ctaButtons}
				<div class="content-cta-container">
					{#each ctaButtons as cta}
						<Button primary onWhite>
							<span class="material-symbols-sharp">{cta.icon ?? ""}</span>
							<span> {cta.label} </span>
						</Button>
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
				<img src={contentMedia} alt="" />
			{/if}
		</div>
	</div>
</section>

<style lang="scss">
	.content-render {
		padding: 32px;

		.content-wrapper {
			display: grid;
			max-width: 1440px;
			margin-inline: auto;
			gap: 64px;
			grid-template-areas:
				"a a ."
				"b b b";

			&.flexReverse {
				grid-template-areas:
					"b b b"
					"a a .";

				@media (min-width: 840px) {
					grid-template-areas: "b b b a a";
				}
			}

			@media (min-width: 840px) {
				grid-template-areas: "a a b b b";
			}

			&.blockLayout {
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;

				.block-content,
				.content-cta-container {
					max-width: 70%;
					margin-inline: auto;
					text-align: center;
					justify-content: center;
					align-items: center;
				}

				.content-media {
					max-width: 70%;
					max-height: 600px;
					margin-inline: auto;
				}
			}

			.block-content {
				grid-area: a;
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
							color: #6faf64;
						}
					}
				}

				.content-des {
					font-size: 18px;
					font-weight: 400;
					line-height: 1.5;
					opacity: 0.8;
				}

				.content-cta-container {
					display: flex;
					gap: 16px;
				}
			}

			.content-media {
				grid-area: b;
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
		}
	}
</style>
