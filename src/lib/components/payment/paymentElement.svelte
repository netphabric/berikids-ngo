<script lang="ts">
	import type { Stripe, StripeElements } from "@stripe/stripe-js"
	import Button from "$lib/components/button.svelte"
	import { PUBLIC_STRIPE_KEY, PUBLIC_BASE_URL } from "$env/static/public"
	import { onMount } from "svelte"
	import { loadStripe } from "@stripe/stripe-js"
	import { customStripeUI } from "./paymentUI"

	let name: string
	let email: string
	let finalAmount: string = ""
	let paymentIntentCreated = false
	let processingPayment = false

	let stripe: Stripe | null
	let clientSecret: string | undefined
	let elements: StripeElements | undefined

	onMount(async () => {
		stripe = await loadStripe(PUBLIC_STRIPE_KEY)
		initPaymentIntent()
	})

	async function initPaymentIntent(): Promise<void> {
		clientSecret = await createPaymentIntent()
		initStripeElements(clientSecret)
	}

	async function createPaymentIntent(): Promise<string> {
		const req = await fetch("/api/payment-intent", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				name,
				email,
				amount: finalAmount
			})
		})

		const { clientSecret } = await req.json()
		return clientSecret
	}

	function initStripeElements(clientSecret: string): void {
		elements = stripe?.elements({
			clientSecret,
			appearance: customStripeUI.appearance
		})

		const paymentElement = elements?.create("payment", { layout: "tabs" })
		paymentElement?.mount("#payment-element")
	}

	const formatAmount = (amount: number): string => {
		let num = parseFloat(amount + "")
		if (!isNaN(num)) return num.toFixed(2)
		return ""
	}

	async function handleCustomAmount(selectedAmount: string): Promise<void> {
		finalAmount = formatAmount(+selectedAmount)
		if (selectedAmount === finalAmount) return
		if (paymentIntentCreated) return

		if (finalAmount !== "") {
			initPaymentIntent()
			paymentIntentCreated = true
		}
	}

	async function handleDonate(): Promise<void> {
		processingPayment = true
		if (!stripe || !elements || !name || !email) return

		const { error } = await stripe
			.confirmPayment({
				elements: elements,
				confirmParams: {
					return_url: `${PUBLIC_BASE_URL}/donate/status`
				}
			})
			.finally(() => {
				processingPayment = false
			})

		if (error) {
			const msgElement = document.querySelector("#error-message") as HTMLDivElement
			msgElement.innerHTML += error.message
		}
	}
</script>

<svelte:head>
	<script src="https://js.stripe.com/v3/"></script>
</svelte:head>

<form id="payment-form" class="payment-form" on:submit|preventDefault={handleDonate}>
	<span class="test-mode">TEST MODE</span>

	<div class="input-wrapper">
		<span class="currency">$</span>
		<input
			required
			id="amount"
			step="0.01"
			type="number"
			class="amount"
			placeholder="0.00"
			bind:value={finalAmount}
			on:change={(e) => handleCustomAmount(e.currentTarget.value)}
			style:width={`${finalAmount.length}px`}
		/>
	</div>

	<!-- prettier-ignore -->
	<div class="amount-options">
		{#each ["20", "40", "60", "100"] as amount}
			<Button
        onWhite
        props={{ type: "button" }}
        onClick={()=> handleCustomAmount(amount)} 
      >
				<span class="currency">$</span>
				<span>{amount}</span>
			</Button>
		{/each}
	</div>

	{#if !clientSecret}
		<Button props={{ type: "button" }}>
			<span>
				{#if !finalAmount}
					select amount to donate
				{:else if !email || !name}
					enter your billing details
				{:else}
					Click to select your payment method
				{/if}
			</span>
		</Button>
	{/if}

	<input
		required
		id="name"
		type="text"
		bind:value={name}
		placeholder="Name"
		on:change={initPaymentIntent}
	/>

	<input
		required
		id="email"
		type="email"
		bind:value={email}
		placeholder="Email"
		on:change={initPaymentIntent}
	/>

	<div id="payment-element"></div>

	{#if clientSecret}
		<Button>
			<span>
				{#if processingPayment}
					processing...
				{:else}
					Donate ${finalAmount}
				{/if}
			</span>
		</Button>
	{/if}

	<div id="error-message"></div>
</form>

<style lang="scss">
	.payment-form {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: rem(16);

		font-family: $logo-font;

		@include minWidth("tablet") {
			max-width: rem(500);
			padding: rem(20);
		}

		.test-mode {
			font-size: $tiny;
			width: fit-content;
			border-radius: rem(4);
			padding: rem(4) rem(8);
			display: grid;
			place-items: center;
			@include yellowShade();
		}

		.input-wrapper {
			display: flex;
			align-items: center;
			justify-content: center;

			.currency,
			.amount {
				color: $primary;
				font-size: $h2;
				text-align: center;
				border: none;
				box-shadow: none;
				padding: 0;
				border-radius: 0;
				background-color: $white;
			}

			.amount {
				min-width: rem(200);
			}
		}

		.amount-options {
			display: grid;
			grid-template-columns: repeat(auto-fill, minmax(70px, 1fr));
			gap: rem(16);

			@include minWidth("tablet") {
				grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
			}

			@include minWidth("desktop") {
				grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
			}
		}
	}
</style>
