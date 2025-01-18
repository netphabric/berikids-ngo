<!-- prettier-ignore -->
<script lang="ts">
	import Chip from "./chip.svelte"

	export let authorName = "Valery Ayuni"
	export let authorAvatar = "/images/testimony-dp.webp"
	export let testimonial = "I'm one of the first orphans to be educated and empowered by Berikids International and its partners. I'm grateful for their support and guidance."
	export let authorTitle = "Chief of post @berikids intl mental health unit Nkapa Souza Douala Cameroon."
</script>

<section class="testimonialsSection">
	<div class="testimony-wrapper">
		<Chip chipText="Success stories" chipIcon="mic" chipColor="red" />

		<article class="testimony-card">
			<div class="avatar">
				<img src={authorAvatar} alt="avatar" />
			</div>

			<h2 class="testimony">
				<p class="testimony-text">{testimonial}</p>

				<div class="author-details">
					<h4 class="author-name">{authorName}</h4>
					<p class="author-title">{authorTitle}</p>
				</div>
			</h2>
		</article>
	</div>
</section>

<style lang="scss">
	.testimonialsSection {
		padding: rem(32) rem(20);

		.testimony-wrapper {
			max-width: $max-width;
			margin-inline: auto;

			.testimony-card {
				display: flex;
				flex-direction: column;
				justify-content: space-around;
				margin-block-start: rem(32);
				padding-block: rem(32);
				gap: rem(32);

				@include minWidth("mobile") {
					flex-direction: row;
				}

				.testimony {
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					gap: rem(16);

					@include minWidth("mobile") {
						max-width: 50%;
					}

					.testimony-text {
						font-size: $h6;
						font-weight: $medium;
						position: relative;
						text-wrap: auto;

						@include minWidth("tablet") {
							font-size: $h5;
							line-height: rem(32);
						}

						@include minWidth("desktop") {
							font-size: $h4;
							line-height: rem(40);
						}
					}

					.author-details {
						display: flex;
						flex-direction: column;
						gap: rem(8);

						.author-name,
						.author-title {
							font-size: $regular;
							font-weight: $medium;
							line-height: rem(24);

							@include minWidth("tablet") {
								font-size: $large;
							}
						}
					}

					.author-title {
						opacity: 0.5;
						font-weight: $normal;
					}
				}

				.avatar {
					max-width: rem(350);
					border-radius: rem(16);
					position: relative;
					display: grid;
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
	}
</style>
