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
	@use "sass:color";

	$green: #6faf64;
	$blue: #2b4f81;
	$red: #f44336;

	.contact-details {
		padding: 32px;

		.contact-details-wrapper {
			max-width: 1440px;
			margin-inline: auto;

			.contact-cards-wrapper {
				display: grid;
				margin-block-start: 64px;
				grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
				gap: 32px;

				.contact-card {
					display: flex;
					flex-direction: column;
					align-items: center;
					gap: 16px;
					border-radius: 16px;
					padding: 20px;
					box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

					&:nth-child(1) {
						color: color.adjust($green, $lightness: -20%);
						background-color: color.adjust($green, $lightness: 35%);
					}

					&:nth-child(2) {
						color: color.adjust($blue, $lightness: -5%);
						background-color: color.adjust($blue, $lightness: 50%);
					}

					&:nth-child(3) {
						color: color.adjust($red, $lightness: -20%);
						background-color: color.adjust($red, $lightness: 35%);
					}

					.contact-title,
					.contact-icon {
						font-size: 28px;
						font-weight: 500;

						@media (min-width: 768px) {
							font-size: 32px;
							line-height: 64px;
						}

						@media (min-width: 1024px) {
							font-size: 52px;
						}
					}

					.contact {
						font-weight: 500;

						@media (min-width: 768px) {
							font-weight: 600;
						}
					}
				}
			}
		}
	}
</style>
