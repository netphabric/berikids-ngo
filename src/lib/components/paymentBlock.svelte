<script>
	import Chip from "$lib/components/chip.svelte"
	import PaymentForm from "./paymentForm.svelte"
</script>

<main class="donate-root">
	<div class="donations-wrapper">
		<div class="banner-left">
			<Chip chipIcon="help" chipColor="green" chipText="help support our cause" />
			<span class="material-symbols-sharp org-icon">barefoot</span>
		</div>

		<PaymentForm />
	</div>
</main>

<style lang="scss">
	.donate-root {
		padding-inline: rem(20);
		min-height: 85vh;

		.donations-wrapper {
			width: 100%;
			max-width: $max-width;
			margin-inline: auto;
			display: grid;
			padding-block: rem(20);
			gap: rem(32);
			grid-template-areas: "banner-left banner-left" "payment-form payment-form";

			@include minWidth("tablet") {
				padding-block: 0;
				grid-template-areas: "banner-left payment-form";
			}

			.banner-left {
				display: flex;
				flex-direction: column;
				align-items: center;
				grid-area: banner-left;
				gap: rem(32);

				@include minWidth("tablet") {
					padding: rem(20);
				}

				.org-icon {
					font-size: rem(150);
					font-weight: 100;
					color: $accent;
					margin-block: auto;

					@include minWidth("tablet") {
						font-size: rem(200);
					}

					@include minWidth("desktop") {
						font-size: rem(300);
					}
				}
			}
		}
	}
</style>
