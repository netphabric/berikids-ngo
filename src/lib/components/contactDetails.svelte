<script lang="ts">
	const details = [
		{
			label: "Mail",
			text: "Reach out anytime.",
			contact: "Berikidsngo@gmx.de",
			icon: "icons/alternate_email_30dp_434343_FILL0_wght300_GRAD0_opsz24.svg"
		},

		{
			label: "Phone",
			text: "call us for inquiries or support",
			contact: "+237 653 176 545",
			icon: "icons/add_call_30dp_434343_FILL0_wght300_GRAD0_opsz24.svg"
		},

		{
			label: "Office",
			text: "visit for more information",
			contact: "123 office, location",
			icon: "icons/apartment_30dp_434343_FILL0_wght300_GRAD0_opsz24.svg"
		}
	]
</script>

<section class="contact-details">
	<div class="contact-cards-wrapper">
		{#each details as detail}
			<article class="contact-card">
				<div class="icon-container">
					<img src={detail.icon} alt="svg" />
				</div>

				<h4 class="contact-title">{detail.label}</h4>
				<p class="contact-text">{detail.text}</p>
				<span class="contact">{detail.contact}</span>
			</article>
		{/each}
	</div>
</section>

<style lang="scss">
	.contact-details {
		padding: 32px;
		margin-block: 64px;

		.contact-cards-wrapper {
			max-width: 1440px;
			margin-inline: auto;
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			gap: 32px;

			.contact-card {
				display: flex;
				flex-direction: column;
				align-items: center;
				gap: 16px;
				border-radius: 16px;
				padding: 20px;
				box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

				.icon-container {
					width: 64px;
					height: 64px;
					display: grid;
					place-items: center;

					img {
						width: 100%;
						object-fit: cover;
					}
				}

				.contact-title {
					font-size: 52px;
					font-weight: 500;
				}

				.contact-text,
				.contact {
					font-size: 18px;
				}

				.contact {
					font-weight: 600;
					color: orangered;
				}
			}
		}
	}
</style>
