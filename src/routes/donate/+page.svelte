<script>
	import NoDonations from "$lib/components/noDonations.svelte"
	import PaymentBlock from "$lib/components/payment/paymentBlock.svelte"
</script>

<svelte:head>
	<title>Donate</title>
</svelte:head>

<main>
	<PaymentBlock>
		<!-- <PaymentElement /> -->
		<NoDonations />
	</PaymentBlock>
</main>
