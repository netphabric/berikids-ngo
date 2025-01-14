<script lang="ts">
	import ContactForm from "$lib/components/contactForm/contactForm.svelte"
	import Faq from "$lib/components/faq.svelte"
	import NewsletterForm from "$lib/components/newsletterForm/newsletterForm.svelte"
	import PageSection from "$lib/components/pageSection/pageSection.svelte"
	import SectionWrapper from "$lib/components/sectionWrapper/sectionWrapper.svelte"
	import { contactFaqs } from "$lib/stores/faqStore"
	import styles from "./page.module.scss"
</script>

<main class={styles.root}>
	<PageSection
		isBlockLayout
		chip="contact"
		title="Get in touch"
		chipIcon="wifi_calling_bar_3"
		desc="We’re here to answer your questions and explore ways to collaborate for a better future."
	/>

	<SectionWrapper className={styles.section}>
		<ContactForm />

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
