<script>
	import Ecobank from "$lib/components/ecobank.svelte"
	import PaymentBlock from "$lib/components/payment/paymentBlock.svelte"
	// import PaymentElement from "$lib/components/payment/paymentElement.svelte"
</script>

<svelte:head>
	<title>Donate</title>
	<meta name="description" content="Support our cause by donating to us" />
</svelte:head>

<main>
	<PaymentBlock status={null}>
		<Ecobank />
		<!-- <PaymentElement /> -->
	</PaymentBlock>
</main>
