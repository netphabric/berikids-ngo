<script>
	import NoDonations from "$lib/components/noDonations.svelte"
	import PaymentBlock from "$lib/components/payment/paymentBlock.svelte"
</script>

<svelte:head>
	<title>Donate</title>
	<meta name="description" content="Support our cause by donating to us" />
</svelte:head>

<main>
	<PaymentBlock>
		<!-- <PaymentElement /> -->
		<NoDonations />
	</PaymentBlock>
</main>
