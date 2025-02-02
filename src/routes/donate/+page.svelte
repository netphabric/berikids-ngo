<script>
	import PaymentBlock from "$lib/components/payment/paymentBlock.svelte"
	import PaymentElement from "$lib/components/payment/paymentElement.svelte"
</script>

<svelte:head>
	<title>Donate</title>
</svelte:head>

<main>
	<PaymentBlock>
		<PaymentElement />
	</PaymentBlock>
</main>
