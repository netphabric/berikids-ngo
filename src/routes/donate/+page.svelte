<script>
	import Ecobank from "$lib/components/ecobank.svelte"
	import GermanBank from "$lib/components/germanBank.svelte"
	import PaymentBlock from "$lib/components/payment/paymentBlock.svelte"
	// import PaymentElement from "$lib/components/payment/paymentElement.svelte"
</script>

<svelte:head>
	<title>Donate</title>
	<meta name="description" content="Support our cause by donating to us" />
</svelte:head>

<main>
	<PaymentBlock status={null}>
		<div class="payments-container">
			<Ecobank />
			<GermanBank />
		</div>
		<!-- <PaymentElement /> -->
	</PaymentBlock>
</main>

<style lang="scss">
	.payments-container {
		display: flex;
		flex-direction: column;
		gap: rem(24)
	}
</style>
