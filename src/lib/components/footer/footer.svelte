<script>
	import Button from "../button/button.svelte"
	import Logo from "../logo/logo.svelte"
	import styles from "./footer.module.scss"
	import { stringify } from "utils/stringify"

	const invoLinks = [
		{
			heading: "get involved",
			links: ["donate now", "volunteer today", "our projects", "success stories", "contact us"]
		},
		{
			heading: "Resources",
			links: ["blog posts", "faqs", "annual reports", "community events", "partnerships"]
		},
		{
			heading: "stay updated",
			links: ["newsletter", "social media", "events calendar", "support us", "get help"]
		}
	]
</script>

<footer class={styles.footerRoot}>
	<div class={styles.footerWrapper}>
		<div class={styles.logo}>
			<Logo />
		</div>

		<nav class={styles.footerContent}>
			{#each invoLinks as nav}
				<div class={styles.navContainer}>
					<h6 class={styles.navHeading}>{nav.heading}</h6>

					<ul class={styles.navLinks}>
						{#each nav.links as link}
							<li><a href={stringify(link)}>{link}</a></li>
						{/each}
					</ul>
				</div>
			{/each}

			<form class={styles.footerForm}>
				<h6>Subscribe!</h6>
				<p>Join our newletter to stay informed about our initiatives and updates</p>

				<div class={styles.inputContainer}>
					<input placeholder="Your Email Here" />
					<Button secondary onWhite>subscribe</Button>
				</div>

				<span>
					By subscribing, you agree to our Privacy Policy and consent to receive updates.
				</span>
			</form>
		</nav>

		<div class={styles.footerBase}>
			© {new Date().getFullYear()} berikids. All rights reserved.
		</div>
	</div>
</footer>
