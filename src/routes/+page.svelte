<script lang="ts">
	import SectionWrapper from "$lib/components/sectionWrapper/sectionWrapper.svelte"
	import Hero from "$lib/components/hero/hero.svelte"
	import Testimonials from "$lib/components/testimonials/testimonials.svelte"
	import Faq from "$lib/components/faq/faq.svelte"
	import ContactDetails from "$lib/components/contactDetails/contactDetails.svelte"
	import Button from "$lib/components/button/button.svelte"

	import { communityOpts } from "./store"
	import styles from "./page.module.scss"
</script>

<main class={styles.root}>
	<Hero />

	<SectionWrapper className={styles.section}>
		<div class={styles.sectionContent}>
			<h4 class={styles.chip}>
				<span class="material-symbols-sharp">altitude</span>
				<span>empower</span>
			</h4>

			<h3 class={styles.title}>
				transforming
				<span class={styles.highlight}>lives</span> through
				<span class={styles.highlight}>compassionate</span> action
			</h3>

			<div class={styles.desc}>
				Our NGO is dedicated to uplifting orphans and vulnerable children in Cameroon by enhancing
				their socio-economic conditions and educational opportunities. Through initiatives like
				vocational training and access to clean water, we strive to create sustainable change in
				communities.
			</div>

			<div class={styles.ctaBtns}>
				<Button onWhite>
					<span>donate</span>
					<span class="material-symbols-sharp">compost</span>
				</Button>

				<Button onWhite primary>
					<span>get involved</span>
					<span class="material-symbols-sharp">thread_unread</span>
				</Button>
			</div>
		</div>

		<div class={styles.sectionImage}>
			<img src="/images/Hs1-img.webp" alt="berkids" />
		</div>
	</SectionWrapper>

	<section class={styles.aidOptionsSection}>
		<div class={styles.sectionWrapper}>
			<h2 class={styles.title}>
				empowering
				<span class={styles.highlight}>orphans</span> and vulnerable communities for a
				<span class={styles.highlight}>brighter future</span>
			</h2>

			<div class={styles.sectionContent}>
				{#each $communityOpts as { icon, title, description }}
					<article>
						<span class={`material-symbols-sharp ${styles.cardIcon}`}>{icon}</span>
						<div class={styles.content}>
							<h4 class={styles.title}>{title}</h4>
							<p class={styles.text}>{description}</p>
						</div>
					</article>
				{/each}
			</div>
		</div>
	</section>

	<SectionWrapper className={styles.section}>
		<div class={styles.sectionContent}>
			<h4 class={styles.chip}>
				<span class="material-symbols-sharp">mountain_flag</span>
				<span>impact</span>
			</h4>

			<h2 class={styles.title}>
				transforming lives through
				<span class={styles.highlight}>community support</span>
			</h2>

			<p class={styles.desc}>
				Our NGO has positively impacted over 1,000 orphans and vulnerable children. We have
				successfully implemented 50 community projects across the North West Province
			</p>

			<div class={styles.statsContainer}>
				<article class={styles.statItem}>
					<h3 class={styles.title}>75%</h3>
					<p class={styles.text}>of assisted children have improved their educational outcomes.</p>
				</article>

				<article class={styles.statItem}>
					<h3 class={styles.title}>80%</h3>
					<p class={styles.text}>of communities now have access to clean water.</p>
				</article>
			</div>

			<div class={styles.ctaBtns}>
				<Button primary onWhite>
					<span>join</span>
					<span class="material-symbols-sharp">handshake</span>
				</Button>

				<Button onWhite>
					<span>donate</span>
					<span class="material-symbols-sharp">compost</span>
				</Button>
			</div>
		</div>

		<div class={styles.sectionMediaContainer}>
			<video muted playsinline disablepictureinpicture controls>
				<source src="/video.mp4" type="video/mp4" />
			</video>
		</div>
	</SectionWrapper>

	<Testimonials />

	<section class={styles.supportSection}>
		<SectionWrapper className={styles.sectionWrapper}>
			<h2 class={styles.contentTitle}>
				<span class={styles.highlight}>join us</span>
				in making a difference
			</h2>

			<div class={styles.sectionContent}>
				<p class={styles.desc}>
					your support can transform the lives of orphans and vulnerable communities in cameroon.
					whether through donations, volunteering, or partnerships, every effort count towards
					creating a brighter futur.
				</p>

				<div class={styles.ctaBtns}>
					<Button>
						<span>donate</span>
						<span class="material-symbols-sharp">compost</span>
					</Button>

					<Button primary>
						<span>volunteer</span>
						<span class="material-symbols-sharp">cheer</span>
					</Button>
				</div>
			</div>
		</SectionWrapper>
	</section>

	<Faq />

	<ContactDetails />
</main>
