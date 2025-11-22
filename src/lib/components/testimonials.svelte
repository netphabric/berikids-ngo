<script lang="ts">
	// prettier-ignore
	let testimony = {
		authorName: "Valery Ayuni",
		authorAvatar: "/images/testimony-dp.webp",
		authorTitle: "Chief of post @berikids intl mental health unit Nkapa Souza Douala Cameroon.",
		testimonial: "I'm one of the first orphans to be educated and empowered by Berikids International and its partners. I'm grateful for their support and guidance."
	}
</script>

<section class="testimonialsSection">
	<div class="testimony-wrapper">
		<article class="testimony-card">
			<div class="avatar">
				<img src={testimony.authorAvatar} alt="avatar" />
			</div>

			<h2 class="testimony">
				<p class="testimony-text">{testimony.testimonial}</p>

				<div class="author-details">
					<h4 class="author-name">{testimony.authorName}</h4>
					<p class="author-title">{testimony.authorTitle}</p>
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
				border: 1px solid $gray;
				gap: rem(32);
				@include borderGradient();

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
