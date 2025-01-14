<script>
	import NewsletterForm from "../newsletterForm/newsletterForm.svelte"
	import styles from "./footer.module.scss"
	import { stringify } from "utils/stringify"

	const invoLinks = [
		{
			heading: "get involved",
			links: [
				{ link: "donate", label: "Donate Now" },
				{ link: "/contact#contact-form", label: "Volunteer Today" },
				{ link: "get-involved", label: "Our Projects" },
				{ link: "/vocational-training#vacation-testimony", label: "Success Stories" },
				{ link: "/contact#contact-form", label: "Contact Us" }
			]
		},
		{
			heading: "Resources",
			links: [
				{ link: "blog", label: "Blog Posts" },
				{ link: "/#faqs", label: "FAQs" },
				{ link: "reports", label: "Annual Reports" },
				{ link: "events", label: "Community Events" },
				{ link: "/about-us#partners", label: "Partnerships" }
			]
		},
		{
			heading: "stay updated",
			links: [
				{ label: "newsletter", link: "/contact#newsletter" },
				{ label: "social", link: "social media" },
				{ label: "events", link: "events calendar" },
				{ label: "support", link: "support us" },
				{ label: "help", link: "/contact#contact-form" }
			]
		}
	]
</script>

<footer class={styles.footerRoot}>
	<div class={styles.footerWrapper}>
		<div class={styles.logo}></div>

		<nav class={styles.footerContent}>
			{#each invoLinks as nav}
				<div class={styles.navContainer}>
					<h6 class={styles.navHeading}>{nav.heading}</h6>

					<ul class={styles.navLinks}>
						{#each nav.links as { link, label }}
							<li><a href={stringify(link)}>{label}</a></li>
						{/each}
					</ul>
				</div>
			{/each}

			<NewsletterForm
				title="Subscribe"
				desc="Join our newletter to stay informed about our initiatives and updates"
				noticeText="By subscribing, you agree to our Privacy Policy and consent to receive updates."
				btnText="subscribe"
			/>
		</nav>

		<div class={styles.footerBase}>
			© {new Date().getFullYear()} berikids. All rights reserved.
		</div>
	</div>
</footer>
