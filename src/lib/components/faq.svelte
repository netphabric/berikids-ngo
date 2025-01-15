<script lang="ts">
	import { slide } from "svelte/transition"
	import { cubicOut } from "svelte/easing"
	import Chip from "$lib/components/chip.svelte"

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

<section class="faqs-root" id="faqs">
	<div class="faq-wrapper">
		<Chip chipText="most asked" chipIcon="help" chipColor="blue" />
		<div class="faq-header">
			<h2 class="faq-title">FAQs</h2>
			<p class="faq-desc">{desc}</p>
		</div>

		<div class="faq-container">
			{#each faqs as faq}
				<article class="faq">
					<button class="faq-question" on:click={() => handleShowFaqAns(faq.id)}>
						<span>{faq.question}</span>

						<div class="faq-icon">
							<span class="material-symbols-sharp"
								>{faq.isOpen ? "keyboard_arrow_up" : "keyboard_arrow_down"}</span
							>
						</div>
					</button>

					{#if faq.isOpen}
						<p class="answer" transition:slide={{ duration: 100, easing: cubicOut }}>
							{faq.ans}
						</p>
					{/if}
				</article>
			{/each}
		</div>
	</div>
</section>

<style lang="scss">
	.faqs-root {
		padding: 32px;

		.faq-wrapper {
			max-width: 1440px;
			margin-inline: auto;
			display: flex;
			flex-direction: column;
			gap: 32px;

			.faq-header {
				display: flex;
				flex-direction: column;
				margin-block-start: 32px;
				gap: 16px;

				.faq-title {
					font-size: 52px;
					font-weight: 500;
					line-height: 40px;
				}

				.faq-desc {
					font-size: 18px;
					font-weight: 400;
					line-height: 32px;
					opacity: 0.6;
				}
			}

			.faq-container {
				display: flex;
				flex-direction: column;
				border-radius: 16px;

				.faq {
					display: flex;
					flex-direction: column;
					box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;

					.faq-question {
						display: flex;
						justify-content: space-between;
						align-items: center;
						cursor: pointer;

						font-size: 18px;
						color: inherit;
						line-height: 32px;
						padding: 32px 20px;
						border: transparent;
						background: transparent;

						.faq-icon {
							display: grid;
							place-items: center;
							span {
								font-size: 32px;
							}
						}
					}

					.answer {
						padding: 20px;
						padding-inline-start: 32px;
						font-size: 18px;
						font-weight: 400;
						line-height: 32px;
						opacity: 0.5;
					}
				}
			}
		}
	}
</style>
