<script lang="ts">
	import Button from "$lib/components/button.svelte"

	// user-details
	let name = ""
	let email = ""

	// card-details
	let cardNumber = ""
	let expiryDate = ""
	let cvv = ""

	// amount-details
	let donation = ""
	const defaultAmounts = ["20", "40", "60", "80", "100"]

	// Handlers.......................................................
	const handleSelectAmount = (selectedAmount: string) => (donation = selectedAmount)

	const handleDonate = () => {
		if ([!name, !email, !cardNumber, !donation, !expiryDate, !cvv].includes(true)) return
		console.log("working...")
	}
</script>

<form action="" class="payment-form" on:submit|preventDefault={handleDonate}>
	<input type="text" placeholder="Name" id="name" minlength="10" bind:value={name} />
	<input type="email" placeholder="Email" id="email" pattern=".+@.+" bind:value={email} />
	<input type="number" placeholder="Amount" id="amount" bind:value={donation} />

	<div class="amount-container">
		{#each defaultAmounts as amount}
			<button
				class="amount"
				class:activeAmount={amount === donation}
				on:click={() => handleSelectAmount(amount)}
			>
				<span class="currency">$</span>
				<span>{amount}</span>
			</button>
		{/each}
	</div>

	<div class="card-details">
		<input
			type="text"
			maxlength="16"
			id="cardNumber"
			placeholder="Card number"
			bind:value={cardNumber}
		/>

		<input
			type="text"
			maxlength="5"
			id="expiryDate"
			placeholder="Expiry date"
			bind:value={expiryDate}
		/>

		<input type="text" maxlength="3" id="cvv" placeholder="CVV" bind:value={cvv} />
	</div>

	<Button>
		<span class="material-symbols-sharp">loyalty</span>
		<span> Donate</span>
	</Button>
</form>

<style lang="scss">
	.payment-form {
		display: flex;
		flex-direction: column;
		grid-area: payment-form;
		gap: rem(16);
		width: 100%;
		max-width: rem(500);
		margin-inline: auto;

		@include minWidth("tablet") {
			padding: rem(40);
		}

		input {
			width: 100%;
			height: rem(60);
			border: none;
			outline: none;
			padding: rem(8) rem(16);
			border-radius: rem(8);
			box-shadow: $shadow-soft;
			font-family: $logo-font;
			font-size: $medium;

			&:focus {
				box-shadow: $shadow-hard;
			}
		}

		.card-details {
			display: grid;
			gap: rem(16);
			grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
		}

		.amount-container {
			display: grid;
			gap: rem(16);
			grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));

			.amount {
				width: 100%;
				height: rem(60);
				border: none;
				outline: none;
				border-radius: rem(8);
				box-shadow: $shadow-soft;
				background-color: $white;

				color: $accent;
				font-size: $medium;
				font-family: $logo-font;
				cursor: pointer;

				&.activeAmount {
					color: $white;
					background-color: $accent;
				}

				@include minWidth("tablet") {
					padding: rem(20);
					font-size: $large;
				}

				.currency {
					font-size: $tiny;
				}

				&:hover {
					color: $black;
					background-color: $secondary;
				}
			}
		}
	}
</style>
