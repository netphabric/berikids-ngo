<script lang="ts">
	import Button from "$lib/components/button/button.svelte"
	import SectionWrapper from "$lib/components/sectionWrapper/sectionWrapper.svelte"
	import { projectTypes } from "./store"
	import styles from "./page.module.scss"
</script>

<main class={styles.root}>
	<SectionWrapper className={styles.hero}>
		<h2 class={styles.title}>
			<span class={styles.highlight}>transforming</span> lives together
		</h2>

		<div class={`${styles.sectionContent} ${styles.heroRight}`}>
			<p class={styles.desc}>
				Our projects are designed to uplift the most vulnerable members of our society, focusing on
				orphans and those in need. Through education, vocational training, and essential resources,
				we are making a lasting impact in Cameroon.
			</p>

			<div class={styles.ctaBtns}>
				<Button primary onWhite>
					<span>learn more</span>
					<span class="material-symbols-sharp">tools_installation_kit</span>
				</Button>

				<Button onWhite>
					<span>get involved</span>
					<span class="material-symbols-sharp">tools_power_drill</span>
				</Button>
			</div>
		</div>
	</SectionWrapper>

	<section class={styles.projectSection}>
		<div class={styles.projectHeader}>
			<h4 class={styles.chip}>
				<span class="material-symbols-sharp">tools_phillips</span>
				<span>Projects</span>
			</h4>

			<h2 class={styles.title}>
				Transforming Lives Through Our
				<span class={styles.highlight}>Diverse Projects</span>
			</h2>

			<p class={styles.desc}>
				Our projects are designed to uplift communities by addressing critical needs. We focus on
				socio-economic improvement, education, and essential resources.
			</p>
		</div>

		<div class={styles.projects}>
			{#each $projectTypes as project}
				<article class={styles.projectCard}>
					<span class="material-symbols-sharp">{project.icon}</span>

					<div class={styles.content}>
						<h3 class={styles.title}>{project.title}</h3>
						<p class={styles.text}>{project.desc}</p>
					</div>
				</article>
			{/each}
		</div>

		<div class={styles.ctaBtns}>
			<Button onWhite>
				<span>support us</span>
				<span class="material-symbols-sharp">partner_exchange</span>
			</Button>
		</div>
	</section>

	<SectionWrapper className={styles.section}>
		<div class={styles.sectionContent}>
			<h4 class={styles.chip}>
				<span class="material-symbols-sharp">person_apron</span>
				<span>initiatives</span>
			</h4>
			<h2 class={styles.title}>
				Empowering Orphans: Transforming lives through socio-economic
				<span class={styles.highlight}> development initiatives </span>
			</h2>

			<p class={styles.desc}>
				Our featured project focuses on enhancing the socio-economic conditions of orphans in
				Cameroon through targeted vocational training and support programs. By providing essential
				skills and resources, we aim to empower these vulnerable children to build sustainable
				futures.
			</p>
		</div>

		<div class={styles.sectionImage}>
			<img src="/images/giS1.webp" alt="berkids" />
		</div>
	</SectionWrapper>

	<SectionWrapper className={styles.section}>
		<div class={styles.sectionContent}>
			<h4 class={styles.chip}>
				<span class="material-symbols-sharp">robot_2</span>
				<span>tech</span>
			</h4>
			<h2 class={styles.title}>
				Empowering Communities Through Information
				<span class={styles.highlight}> Technology Education </span>
				and Development Initiatives
			</h2>

			<p class={styles.desc}>
				Our featured project focuses on enhancing IT education to uplift communities in Cameroon. By
				integrating technology into learning, we aim to equip orphans and vulnerable children with
				essential skills for a brighter future.
			</p>

			<div class={styles.subContainer}>
				<article class={styles.itemCard}>
					<h3 class={styles.title}>IT Education</h3>
					<p class={styles.text}>
						Transforming lives through technology and education for sustainable community
						development.
					</p>
				</article>

				<article class={styles.itemCard}>
					<h3 class={styles.title}>community impact</h3>
					<p class={styles.text}>
						Building a future where every child has access to technology and learning opportunities.
					</p>
				</article>
			</div>
		</div>

		<div class={styles.sectionImage}>
			<img src="/images/giS5.webp" alt="berkids" />
		</div>
	</SectionWrapper>

	<SectionWrapper className={styles.section}>
		<div class={styles.sectionContent}>
			<h4 class={styles.chip}>
				<span class="material-symbols-sharp">cleaning_bucket</span>
				<span>water</span>
			</h4>

			<h2 class={styles.title}>
				Transforming Lives: Our
				<span class={styles.highlight}> Portable Water </span>
				Project in North West of Cameroon
			</h2>

			<p class={styles.desc}>
				Access to clean water is a fundamental human right. Our project aims to provide sustainable
				potable water solutions to underserved communities in the North West Province of Cameroon.
			</p>

			<div class={styles.subContainer}>
				<article class={styles.itemCard}>
					<h3 class={styles.title}>
						<span class="material-symbols-sharp">water_voc</span>
					</h3>

					<p class={styles.text}>Empowering communities through clean water access.</p>
				</article>

				<article class={styles.itemCard}>
					<h3 class={styles.title}>
						<span class="material-symbols-sharp">health_and_safety</span>
					</h3>

					<p class={styles.text}>Join us in making a difference today.</p>
				</article>
			</div>
		</div>

		<div class={styles.sectionImage}>
			<img src="/images/giS2.webp" alt="berkids" />
		</div>
	</SectionWrapper>

	<SectionWrapper className={styles.section}>
		<div class={styles.sectionContent}>
			<h4 class={styles.chip}>
				<span class="material-symbols-sharp">face_5</span>
				<span>counseling</span>
			</h4>

			<h2 class={styles.title}>
				Empowering Lives Through Christian
				<span class={styles.highlight}> Counseling and Moral Instruction </span>
				Initiatives
			</h2>

			<p class={styles.desc}>
				Our Christian counseling and moral instruction campaigns aim to uplift and empower
				vulnerable communities. By integrating spiritual guidance with practical support, we foster
				holistic development.
			</p>

			<div class={styles.subContainer}>
				<article class={styles.itemCard}>
					<h3 class={styles.title}>
						<span class="material-symbols-sharp">water_voc</span>
						<span>spiritual growth</span>
					</h3>

					<p class={styles.text}>
						Nurturing faith while promoting socio-economic stability among orphans and marginalized
						groups.
					</p>
				</article>

				<article class={styles.itemCard}>
					<h3 class={styles.title}>
						<span class="material-symbols-sharp">health_and_safety</span>
						<span>Community Impact</span>
					</h3>

					<p class={styles.text}>
						Transforming lives through education, support, and spiritual guidance in local
						communities.
					</p>
				</article>
			</div>
		</div>

		<div class={styles.sectionImage}>
			<img src="/images/giS6.webp" alt="berkids" />
		</div>
	</SectionWrapper>

	<SectionWrapper className={styles.section}>
		<div class={styles.sectionContent}>
			<h4 class={styles.chip}>
				<span class="material-symbols-sharp">footprint</span>
				<span>capacity development</span>
			</h4>

			<h2 class={styles.title}>
				building stronger communities through
				<span class={styles.highlight}> capacity development </span>
			</h2>

			<p class={styles.desc}>
				Our capacity building projects are designed to uplift communities by enhancing skills and
				fostering volunteerism. We believe that empowering individuals leads to sustainable
				development and improved socio-economic conditions.
			</p>

			<div class={styles.subContainer}>
				<article class={styles.itemCard}>
					<h3 class={styles.title}>skill development</h3>

					<p class={styles.text}>
						We provide training programs that equip participants with essential life skills for
						success.
					</p>
				</article>

				<article class={styles.itemCard}>
					<h3 class={styles.title}>community engagement</h3>

					<p class={styles.text}>
						Volunteering opportunities foster collaboration and strengthen community ties for
						collective growth.
					</p>
				</article>
			</div>
		</div>

		<div class={styles.sectionImage}>
			<img src="/images/giS4.webp" alt="berkids" />
		</div>
	</SectionWrapper>

	<SectionWrapper className={styles.section}>
		<div class={styles.sectionContent}>
			<h4 class={styles.chip}>
				<span class="material-symbols-sharp">footprint</span>
				<span>collaborative research</span>
			</h4>

			<h2 class={styles.title}>
				transforming lives through
				<span class={styles.highlight}> collaborative research </span>
			</h2>

			<p class={styles.desc}>
				Our featured project focuses on conducting vital social, population, and Christian research
				to address the needs of vulnerable communities. By partnering with national and
				international organizations, we aim to gather insights that drive impactful change.
			</p>
		</div>

		<div class={styles.sectionImage}>
			<img src="/images/giS3.webp" alt="berkids" />
		</div>
	</SectionWrapper>

	<section class={styles.supportBlock}>
		<h2 class={styles.title}>
			support our <span class={styles.highlight}>life changing</span> projects
		</h2>
		<p class={styles.desc}>
			Join us in making a difference through donations, volunteering, or forming valuable
			partnerships.
		</p>

		<div class={styles.ctaBtns}>
			<Button onWhite secondary>
				<span>donate</span>
				<span class="material-symbols-sharp">monetization_on</span>
			</Button>

			<Button onWhite primary>
				<span>volunteer</span>
				<span class="material-symbols-sharp">garden_cart</span>
			</Button>
		</div>
	</section>
</main>
