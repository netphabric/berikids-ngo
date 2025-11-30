<script lang="ts">
	import PaymentBlock from "$lib/components/payment/paymentBlock.svelte"

	export let data
	const status = data?.status ?? "failed"
</script>

<main>
	{#if status === "succeeded"}
		<PaymentBlock
			status="succeeded"
			chipColor="green"
			chipIcon="check_circle"
			statusColor="green"
			statusIcon="order_approve"
			chipText="Transaction successful"
			statusMessage="Thank you for supporting our cause!"
		></PaymentBlock>
	{:else}
		<PaymentBlock
			status="failed"
			chipColor="red"
			chipIcon="error"
			statusColor="red"
			statusIcon="inactive_order"
			chipText="Transaction failed"
			statusMessage="Sorry, We were unable to process your payment. Please try again."
		/>
	{/if}
</main>
