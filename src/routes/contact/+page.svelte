<script lang="ts">
	import ContactForm from "$lib/components/contactForm/contactForm.svelte"
	import Faq from "$lib/components/faq.svelte"
	import NewsletterForm from "$lib/components/newsletterForm/newsletterForm.svelte"
	import { contactFaqs } from "$lib/stores/faqs"
	import styles from "./page.module.scss"
</script>

<main class={styles.root}>
	<section class={styles.section}>
		<ContactForm />

		<div class={styles.sectionImage}>
			<img src="/images/cS1.webp" alt="berkids" />
		</div>
	</section>

	<Faq
		desc="Have questions about our NGO? Here are some common inquiries and their answers."
		faqs={$contactFaqs}
	/>

	<section class={styles.newsletter}>
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
	</section>
</main>
