<script lang="ts">
	import { slide } from "svelte/transition"
	import { cubicOut } from "svelte/easing"
	import Chip from "$lib/components/chip.svelte"
	import type { Writable } from "svelte/store"

	export let desc = ""
	export let faqs: Writable<
		{
			id: number
			ans: string
			isOpen: boolean
			question: string
		}[]
	>

	const handleShowFaqAns = (id: number) => {
		faqs.update((faqs) =>
			faqs.map((faq) => ({
				...faq,
				isOpen: faq.id === id ? !faq.isOpen : false
			}))
		)
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
			{#each $faqs as faq}
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
		padding: rem(32) rem(20);
		margin-block: rem(32);
		@include lightRedBg();

		.faq-wrapper {
			max-width: $max-width;
			margin-inline: auto;
			display: flex;
			flex-direction: column;
			gap: rem(32);

			.faq-header {
				display: flex;
				flex-direction: column;
				margin-block-start: rem(32);
				gap: rem(16);

				.faq-title {
					font-size: $h4;
					font-weight: 500;

					@include minWidth("tablet") {
						font-size: $h3;
						line-height: 40px;
					}

					@include minWidth("desktop") {
						font-size: $h2;
					}
				}

				.faq-desc {
					font-size: $small;
					font-weight: $normal;
					opacity: 0.6;

					@include minWidth("tablet") {
						line-height: rem(32);
						font-size: $regular;
					}
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

						color: inherit;
						font-size: $small;
						font-weight: $semiBold;
						padding: rem(16) rem(20);
						border: transparent;
						background: transparent;

						@include minWidth("tablet") {
							font-size: $regular;
							line-height: 32px;
						}

						.faq-icon {
							display: grid;
							place-items: center;
							span {
								font-size: $medium;
							}
						}
					}

					.answer {
						padding: rem(16);
						font-size: $small;
						font-weight: $normal;
						opacity: 0.5;

						@include minWidth("tablet") {
							font-size: $regular;
							line-height: rem(32);
						}
					}
				}
			}
		}
	}
</style>
