<script lang="ts">
	import styles from "./contactDetails.module.scss"
	export let isCentered = false

	const details = [
		{
			icon: "attach_email",
			label: "contact",
			text: "We'd love to hear from you! Reach out anytime.",
			contact: "originalberikids@outlook.com"
		},

		{
			icon: "lift_to_talk",
			label: "phone",
			text: "call us for inquiries or support",
			contact: "+237 653 176 545"
		},

		{
			icon: "home_work",
			label: "office",
			text: "visit us at our headquater for more information",
			contact: "123 office, location"
		}
	]
</script>

<section class={styles.contactDetails}>
	{#each details as d}
		<article class={` ${isCentered && styles.centered}`}>
			<span class={`material-symbols-sharp ${styles.icon}`}>{d.icon}</span>
			<h4 class={styles.label}>{d.label}</h4>
			<p class={styles.text}>{d.text}</p>
			<span class={styles.contact}>{d.contact}</span>
		</article>
	{/each}
</section>
