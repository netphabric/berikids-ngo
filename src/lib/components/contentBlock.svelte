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
							{#if cta.url}
								<a href={cta.url}>
									<span class="material-symbols-sharp">{cta.icon ?? ""}</span>
									<span> {cta.label} </span>
								</a>
							{:else}
								<span class="material-symbols-sharp">{cta.icon ?? ""}</span>
								<span> {cta.label} </span>
							{/if}
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
		padding: rem(32) rem(20);

		.content-wrapper {
			display: grid;
			max-width: $max-width;
			margin-inline: auto;
			gap: rem(32);
			grid-template-areas:
				"a a"
				"b b";

			&.flexReverse {
				grid-template-areas:
					"b b"
					"a a";

				@include minWidth("tablet") {
					gap: 64px;
					grid-template-areas: "b b b a a";
				}
			}

			@include minWidth("tablet") {
				grid-template-areas: "a a b b b";
				gap: rem(64);
			}

			&.blockLayout {
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;

				.block-content,
				.content-cta-container {
					text-align: center;
					justify-content: center;
					align-items: center;

					@include minWidth("tablet") {
						max-width: 70%;
						margin-inline: auto;
					}
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
				gap: rem(16);

				.content-title {
					font-size: $h5;
					font-weight: 600;
					line-height: 1.2;

					@include minWidth("mobile") {
						font-size: $h4;
					}

					@include minWidth("tablet") {
						font-size: $h3;
					}

					@include minWidth("desktop") {
						font-size: $h2;
					}

					span {
						&.highlight {
							@include highlight;
						}
					}
				}

				.content-des {
					font-size: $small;
					line-height: rem(24);
					opacity: 0.6;

					@include minWidth("mobile") {
						font-size: $regular;
					}

					@include minWidth("tablet") {
						font-size: $large;
						font-weight: $normal;
						line-height: rem(32);
					}
				}

				.content-cta-container {
					display: flex;
					gap: rem(16);
				}
			}

			.content-media {
				grid-area: b;
				display: grid;
				border-radius: rem(8);
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
