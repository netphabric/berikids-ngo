<script>
	import Button from "$lib/components/button/button.svelte"
	import SectionWrapper from "$lib/components/sectionWrapper/sectionWrapper.svelte"
	import styles from "./page.module.scss"
</script>

<main class={styles.aboutRoot}>
	<section class={styles.hero}>
		<h4 class={styles.chip}>
			<span class="material-symbols-sharp">person_raised_hand</span>
			<span>empowerment</span>
		</h4>
		<h1 class={styles.title}>
			<span class={styles.highlight}>transforming</span>
			lives together
		</h1>
		<p class={styles.desc}>
			dedicated to uplifting orphans and vulnerable communites throught education, support and
			sustainable development
		</p>

		<div class={styles.ctaBtns}>
			<Button onWhite primary>
				<span>learn more</span>
				<span class="material-symbols-sharp">expand_content</span>
			</Button>

			<Button onWhite>
				<span>join us</span>
				<span class="material-symbols-sharp">handshake</span>
			</Button>
		</div>
	</section>

	<SectionWrapper className={styles.section}>
		<div class={styles.sectionContent}>
			<h4 class={styles.sectionChip}>
				<span class="material-symbols-sharp">person_play</span>
				<span>community</span>
			</h4>

			<h2 class={styles.sectionTitle}>
				<span class={styles.highlight}>empowering</span>
				orphans and vulnerable <span class={styles.highlight}>communities</span>
				through education and sustainable development
			</h2>

			<p class={styles.sectionDesc}>
				Founded with a vision to uplift the socio-economic conditions of orphans in Cameroon, our
				NGO has grown significantly since its inception. Key milestones include the launch of
				vocational training programs and successful partnerships with local and international
				organizations to enhance community development.
			</p>
		</div>

		<div class={styles.sectionImage}>
			<img src="/images/as1.webp" alt="about-us" />
		</div>
	</SectionWrapper>

	<SectionWrapper className={styles.section}>
		<div class={styles.sectionContent}>
			<h4 class={styles.sectionChip}>
				<span class="material-symbols-sharp">format_paint</span>
				<span>committment</span>
			</h4>

			<h2 class={styles.sectionTitle}>
				our <span class={styles.highlight}>committment</span>
				to transform lives in cameroon
			</h2>

			<p class={styles.sectionDesc}>
				We are dedicated to improving the socio-economic conditions of orphans, providing them with
				essential skills and resources. Our initiatives also focus on advancing IT education,
				ensuring access to potable water, and offering Christian counseling to foster holistic
				development.
			</p>

			<div class={styles.ctaBtns}>
				<Button onWhite primary>
					<span>learn more</span>
					<span class="material-symbols-sharp">expand_content</span>
				</Button>

				<Button onWhite>
					<span>join us</span>
					<span class="material-symbols-sharp">handshake</span>
				</Button>
			</div>
		</div>

		<div class={styles.sectionImage}>
			<img src="/images/as2.webp" alt="about-us" />
		</div>
	</SectionWrapper>
</main>
