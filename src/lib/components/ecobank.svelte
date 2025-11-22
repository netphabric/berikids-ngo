<script lang="ts">
	const bankingDetails = [
		{ label: "name", value: "ecobank" },
		{ label: "account number", value: "30830055087" },
		{ label: "account name", value: "Beri Kindness" },
		{ label: "swift code", value: "ECOCCMCX" },
		{ label: "iban", value: "CM 21 10029 26011 30830055087 44" }
	]
</script>

<div class="ecobank-root">
	<div class="logo-container">
		<img src="/images/icons/ecobank.png" alt="ecobank-logo" />
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
	.ecobank-root {
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
			max-width: rem(100);

			@include minWidth("tablet") {
				max-width: rem(150);
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
					font-size: $small;

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
