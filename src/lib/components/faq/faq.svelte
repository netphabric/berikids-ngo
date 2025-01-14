<script lang="ts">
	import { slide } from "svelte/transition"
	import { cubicOut } from "svelte/easing"
	import styles from "./faq.module.scss"
	import Button from "../button/button.svelte"

	export let desc = ""
	export let faqs: {
		id: number
		ans: string
		isOpen: boolean
		question: string
	}[] = []

	const handleShowFaqAns = (id: number) => {
		faqs.forEach((faq) => {
			if (faq.id !== id) faq.isOpen = false
		})

		const faq = faqs.findIndex((faq) => faq.id === id)
		faqs[faq].isOpen = !faqs[faq].isOpen
	}
</script>

<section class={styles.faqRoot} id="faqs">
	<div class={styles.faqHeader}>
		<h2 class={styles.faqTitle}>FAQs</h2>

		<p class={styles.faqDescription}>
			{desc}
		</p>
	</div>

	<div class={styles.faqContainer}>
		{#each faqs as faq}
			<article class={styles.faq}>
				<button class={styles.question} on:click={() => handleShowFaqAns(faq.id)}>
					<span>{faq.question} </span>

					<div class={styles.faqArrow}>
						<span class="material-symbols-sharp"
							>{faq.isOpen ? "keyboard_arrow_up" : "keyboard_arrow_down"}</span
						>
					</div>
				</button>

				{#if faq.isOpen}
					<p class={styles.answer} transition:slide={{ duration: 100, easing: cubicOut }}>
						{faq.ans}
					</p>
				{/if}
			</article>
		{/each}
	</div>

	<div class={styles.moreQuestions}>
		<h2 class={styles.moreQtn}>Still have questions?</h2>
		<p class={styles.help}>we're here to help!</p>

		<Button secondary onWhite>
			<a href="contact">
				<span>Contact</span>
				<span class="material-symbols-sharp">connect_without_contact</span>
			</a>
		</Button>
	</div>
</section>
