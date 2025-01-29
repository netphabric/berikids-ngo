<script lang="ts">
	import type { Stripe, StripeElements } from "@stripe/stripe-js"
	import { PUBLIC_STRIPE_KEY, PUBLIC_BASE_URL } from "$env/static/public"
	import { onMount } from "svelte"
	import { loadStripe } from "@stripe/stripe-js"
	import { customStripeUI } from "./paymentUI"
	import Button from "$lib/components/button.svelte"

	let stripe: Stripe | null
	let clientSecret: string
	let elements: StripeElements | undefined

	onMount(async () => {
		stripe = await loadStripe(PUBLIC_STRIPE_KEY)
		clientSecret = await createPaymentIntent()
		elements = stripe?.elements({
			clientSecret,
			appearance: customStripeUI.appearance
		})

		const paymentElement = elements?.create("payment", { layout: "tabs" })
		paymentElement?.mount("#payment-element")
	})

	const createPaymentIntent = async (): Promise<string> => {
		const req = await fetch("/api/payment-intent", {
			method: "POST",
			body: JSON.stringify({}),
			headers: { "Content-Type": "application/json" }
		})
		const { clientSecret } = await req.json()
		return clientSecret
	}

	const handleDonate = async () => {
		if (!stripe || !elements) return

		const { error } = await stripe.confirmPayment({
			elements: elements,
			confirmParams: {
				return_url: `${PUBLIC_BASE_URL}/donate/success`
			}
		})

		console.log(error)

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
	<div id="payment-element"></div>

	<Button>
		<span class="material-symbols-sharp">loyalty</span>
		<span> Donate</span>
	</Button>

	<div id="error-message"></div>
</form>

<style lang="scss">
	.payment-form {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: rem(16);

		@include minWidth("tablet") {
			max-width: rem(500);
			padding: rem(20);
		}

		:global(button) {
			margin-top: rem(20);
			height: rem(60);
		}
	}
</style>
