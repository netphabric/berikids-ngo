<script lang>
	import Button from "$lib/components/button/button.svelte"
	import Faq from "$lib/components/faq/faq.svelte"
	import NewsletterForm from "$lib/components/newsletterForm/newsletterForm.svelte"
	import PageSection from "$lib/components/pageSection/pageSection.svelte"
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
			addToast("error", "Failed to send message")
		}
	}
</script>

<main class={styles.root}>
	<PageSection
		isBlockLayout
		chip="contact"
		chipIcon="wifi_calling_bar_3"
		title="Get in touch"
		desc="We’re here to answer your questions and explore ways to collaborate for a better future."
	/>

	<SectionWrapper className={styles.section}>
		<form class={styles.sectionContent} on:submit|preventDefault={handleSubmit}>
			<h4 class={styles.chip}>
				<span class="material-symbols-sharp">outgoing_mail</span>
				<span>connect</span>
			</h4>

			<h2 class={styles.title}>Reach out to us</h2>
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

	<PageSection
		isBlockLayout
		chip="connect"
		chipIcon="location_on"
		title="locations"
		desc="find our officess and project locations in cameroon"
		blockListItems={[
			{
				title: "Yaounde",
				img: "/images/ctl1.webp",
				desc: "456 Main St, Yaoundé, Cameroon"
			},
			{
				title: "Douala",
				img: "/images/ctl2.webp",
				desc: "789 Market St, Douala, Cameroon"
			}
		]}
	/>

	<Faq
		desc="Have questions about our NGO? Here are some common inquiries and their answers."
		faqs={$contactFaqs}
	/>

	<SectionWrapper className={styles.newsletter}>
		<NewsletterForm
			largeTitle
			title="stay connected with our mission"
			titleHighlight="mission"
			desc="Subscribe to our newsletter for updates on projects and how you can make a difference."
			noticeText="No spam, we promise."
			btnText="sign up"
		/>

		<div class={styles.sectionImage}>
			<img src="/images/giS4.webp" alt="berkids" />
		</div>
	</SectionWrapper>
</main>
