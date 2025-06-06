<script lang="ts">
	import ContactDetails from "$lib/components/contactDetails.svelte"
	import ContactForm from "$lib/components/contactForm.svelte"
</script>

<svelte:head>
	<title>Contact</title>
	<meta
		name="description"
		content="How you can easily reach us through our various contact channels"
	/>
</svelte:head>

<main>
	<ContactDetails />
	<ContactForm />
</main>
