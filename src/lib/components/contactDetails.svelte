<script lang="ts">
	const details = [
		{
			icon: "alternate_email",
			label: "Mail",
			text: "Reach out anytime.",
			contact: "Berikidsngo@gmx.de"
		},

		{
			icon: "add_call",
			label: "Phone",
			text: "call us for inquiries or support",
			contact: "+237 653 176 545"
		},

		{
			label: "Office",
			text: "visit for more information",
			contact: "123 office, location",
			icon: "apartment"
		}
	]
</script>

<section class="contact-details">
	<div class="contact-cards-wrapper">
		{#each details as detail}
			<article class="contact-card">
				<span class="material-symbols-sharp contact-icon">{detail.icon}</span>
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

				.contact-title,
				.contact-icon {
					font-size: 52px;
					font-weight: 500;
				}

				.contact-icon {
					opacity: 0.6;
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
