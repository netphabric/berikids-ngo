<script lang="ts">
	const bankingDetails = [
		{ label: "name", value: "Wiesbadener Volksbank" },
		{ label: "account name", value: "Förderverein Stiftung Berikids in Cameroon e.V." },
		{ label: "iban", value: "DE19 5109 0000 0052 1525 00" }
	]
</script>

<div class="bank-root">
	<div class="logo-container">
		<img src="/images/icons/german-bank.png" alt="Wiesbadener Volksbank logo" />
	</div>

	<div class="details-container">
		{#each bankingDetails as { label, value }}
			<div class="detail">
				<p class="detail-label">{label}</p>
				<p class="detail-value">{value}</p>
			</div>
		{/each}
	</div>
</div>

<style lang="scss">
	.bank-root {
		flex-grow: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: rem(16);

		@include minWidth("tablet") {
			padding: rem(16);
			align-items: flex-start;
		}

		.logo-container {
			display: grid;
			place-items: center;
			max-width: rem(200);

			@include minWidth("tablet") {
				max-width: rem(350);
			}
		}

		.details-container {
			width: 100%;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			gap: rem(16);

			.detail {
				width: 100%;
				display: grid;
				grid-template-columns: 1fr 2fr;
				align-items: center;
				gap: rem(8);

				.detail-label,
				.detail-value {
					color: $primary;
					font-size: $small;
					font-family: $logo-font;

					@include minWidth("tablet") {
						font-size: $medium;
					}

					@include minWidth("desktop") {
						font-size: $large;
					}
				}

				.detail-label {
					font-weight: $medium;
				}
			}
		}
	}
</style>
