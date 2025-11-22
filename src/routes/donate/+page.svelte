<script>
	import Ecobank from "$lib/components/ecobank.svelte"
	import PaymentBlock from "$lib/components/payment/paymentBlock.svelte"
</script>

<svelte:head>
	<title>Donate</title>
	<meta name="description" content="Support our cause by donating to us" />
</svelte:head>

<main>
	<PaymentBlock>
		<Ecobank />
	</PaymentBlock>
</main>
