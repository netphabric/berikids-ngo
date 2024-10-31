<script lang>
	import Button from "$lib/components/button/button.svelte"
	import ContactDetails from "$lib/components/contactDetails/contactDetails.svelte"
	import Faq from "$lib/components/faq/faq.svelte"
	import SectionWrapper from "$lib/components/sectionWrapper/sectionWrapper.svelte"
	import { contactFaqs } from "$lib/stores/faqStore"
	import { addToast } from "$lib/stores/toastStore"
	import styles from "./page.module.scss"

	let name = ""
	let email = ""
	let message = ""

	const handleSubmit = async () => {
		const formData = { email, name, message }
		if (!name || !email || !message) {
			addToast("error", "Please fill in all fields")
			return
		}

		const res = await fetch("/api/contact", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(formData)
		})

		if (res.ok) {
			name = email = message = ""
			addToast("success", "Message sent successfully")
		} else {
			addToast("success", "Message sent successfully")
		}
	}
</script>

<main class={styles.root}>
	<section class={styles.hero}>
		<h4 class={styles.chip}>
			<span class="material-symbols-sharp">wifi_calling_bar_3</span>
			<span>contact</span>
		</h4>

		<h1 class={styles.title}>Get in touch</h1>
		<p class={styles.dess}>
			We’re here to answer your questions and explore ways to collaborate for a better future.
		</p>
	</section>

	<ContactDetails isCentered />

	<SectionWrapper className={styles.section}>
		<form class={styles.sectionContent} on:submit|preventDefault={handleSubmit}>
			<h4 class={styles.chip}>
				<span class="material-symbols-sharp">outgoing_mail</span>
				<span>connect</span>
			</h4>

			<h2 class={styles.title}>Get in touch</h2>
			<p class={styles.desc}>we'd love to hear from you</p>

			<div class={styles.formGroup}>
				<label for="name">
					Name:
					<input id="name" type="text" placeholder="Name" bind:value={name} />
				</label>

				<label for="email">
					Email:
					<input id="email" type="email" placeholder="email" bind:value={email} />
				</label>

				<label for="message">
					Message:
					<textarea id="message" placeholder="send us a message" bind:value={message} />
				</label>
			</div>

			<div class={styles.ctaBtns}>
				<Button onWhite secondary>
					<span>submit</span>
					<span class="material-symbols-sharp">send</span>
				</Button>
			</div>
		</form>

		<div class={styles.sectionImage}>
			<img src="/images/cS1.webp" alt="berkids" />
		</div>
	</SectionWrapper>

	<Faq
		desc="Have questions about our NGO? Here are some common inquiries and their answers."
		faqs={$contactFaqs}
	/>
</main>
