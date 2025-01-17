<script lang="ts">
	import Chip from "./chip.svelte"

	const details = [
		{ icon: "alternate_email", label: "Mail", contact: "Berikidsngo@gmx.de" },
		{ label: "Office", contact: "123 office, location", icon: "apartment" },
		{ icon: "add_call", label: "Phone", contact: "+237 653 176 545" }
	]
</script>

<section class="contact-details">
	<div class="contact-details-wrapper">
		<Chip chipText="How to reach us" chipIcon="thread_unread" chipColor="yellow" />

		<div class="contact-cards-wrapper">
			{#each details as detail}
				<article class="contact-card">
					<span class="material-symbols-sharp contact-icon">{detail.icon}</span>
					<h4 class="contact-title">{detail.label}</h4>
					<span class="contact">{detail.contact}</span>
				</article>
			{/each}
		</div>
	</div>
</section>

<style lang="scss">
	.contact-details {
		padding: rem(32) rem(20);

		.contact-details-wrapper {
			max-width: $max-width;
			margin-inline: auto;

			.contact-cards-wrapper {
				display: grid;
				margin-block-start: rem(64);
				grid-template-columns: repeat(auto-fit, minmax(rem(250), 1fr));
				gap: rem(32);

				.contact-card {
					display: flex;
					flex-direction: column;
					align-items: center;
					gap: rem(16);
					border-radius: rem(16);
					padding: rem(16);
					box-shadow: $shadow-soft;

					&:nth-child(1) {
						@include blueShade;
					}

					&:nth-child(2) {
						@include redShade;
					}

					&:nth-child(3) {
						@include greenShade;
					}

					.contact-title,
					.contact-icon {
						font-size: $h4;
						font-weight: $normal;

						@include minWidth("tablet") {
							font-size: $h3;
							line-height: rem(64);
						}

						@include minWidth("desktop") {
							font-size: $h2;
						}
					}

					.contact {
						font-weight: $semiBold;
					}
				}
			}
		}
	}
</style>
