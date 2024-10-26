<script>
	import Button from "$lib/components/button/button.svelte"
	import SectionWrapper from "$lib/components/sectionWrapper/sectionWrapper.svelte"
	import { sectors, teams, partners } from "./store"
	import styles from "./page.module.scss"
</script>

<main class={styles.root}>
	<section class={styles.hero}>
		<h4 class={styles.chip}>
			<span class="material-symbols-sharp">person_raised_hand</span>
			<span>empowerment</span>
		</h4>

		<h1 class={styles.title}>bio</h1>

		<p class={styles.desc}>
			Berikids is a non-governmental organization (NGO) operating in Cameroon. Founded in 2004 and
			officially registered in 2005, it serves as a charitable and developmental group focused on
			improving the welfare of underprivileged individuals and children in the country.
		</p>

		<p class={styles.desc}>
			Headquartered in Njavnyuy-Kumbo, Bui Division, North West Region, Berikids aims to support
			vulnerable children and orphans of both genders. Since its inception, the organization has
			made significant positive impacts in the community, but there remains much work to be done.
		</p>

		<div class={styles.desc}>
			Currently, Berikids is developing critical interventions to address the challenges posed by
			armed conflict in Cameroon's North West and South West regions. The organization invites
			individuals and groups to join them in their mission to create lasting change in the lives of
			those who need it most.
		</div>

		<div class={styles.ctaBtns}>
			<Button onWhite>
				<span>join us</span>
				<span class="material-symbols-sharp">handshake</span>
			</Button>
		</div>
	</section>

	<SectionWrapper className={styles.section}>
		<div class={styles.sectionContent}>
			<h4 class={styles.chip}>
				<span class="material-symbols-sharp">person_play</span>
				<span>community</span>
			</h4>

			<h2 class={styles.title}>
				<span class={styles.highlight}>empowering</span>
				orphans and vulnerable <span class={styles.highlight}>communities</span>
				through education and sustainable development
			</h2>

			<p class={styles.desc}>
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
			<h4 class={styles.chip}>
				<span class="material-symbols-sharp">format_paint</span>
				<span>committment</span>
			</h4>

			<h2 class={styles.title}>
				our <span class={styles.highlight}>committment</span>
				to transform lives in cameroon
			</h2>

			<p class={styles.desc}>
				We are dedicated to improving the socio-economic conditions of orphans, providing them with
				essential skills and resources. Our initiatives also focus on advancing IT education,
				ensuring access to potable water, and offering Christian counseling to foster holistic
				development.
			</p>

			<div class={styles.ctaBtns}>
				<Button onWhite primary>
					<span>support us</span>
					<span class="material-symbols-sharp">donut_large</span>
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

	<section class={styles.sectorSection}>
		<div class={styles.sectorHeader}>
			<h4 class={styles.chip}>
				<span class="material-symbols-sharp">potted_plant</span>
				<span>development</span>
			</h4>

			<h2 class={styles.title}>
				our commitment to community
				<span class={styles.highlight}>development</span>
			</h2>

			<p class={styles.desc}>
				We strive to uplift the lives of orphans and vulnerable communities in Cameroon. Our
				comprehensive approach combines education, health, and spiritual guidance to foster
				sustainable growth.
			</p>
		</div>

		<div class={styles.sectors}>
			{#each $sectors as sector}
				<article class={styles.sectorCard}>
					<div class={styles.imageContainer}>
						<img src={sector.image} alt="sector" />
					</div>

					<div class={styles.content}>
						<h3 class={styles.title}>{sector.title}</h3>
						<p class={styles.text}>{sector.desc}</p>
					</div>
				</article>
			{/each}
		</div>

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

	<section class={styles.ourTeam}>
		<div class={styles.header}>
			<h4 class={styles.chip}>
				<span class="material-symbols-sharp">social_leaderboard</span>
				<span>together</span>
			</h4>

			<h2 class={styles.title}>our team</h2>
			<p class={styles.desc}>dedicated professionals committed to making a difference.</p>
		</div>

		<div class={styles.teams}>
			{#each $teams as team}
				<article class={styles.memberCard}>
					<div class={styles.imageContainer}>
						<img src={team.profile} alt="profile" />
					</div>

					<div class={styles.content}>
						<div class={styles.memberDetails}>
							<h3 class={styles.title}>{team.name}</h3>
							<p class={styles.subTitle}>{team.role}</p>
						</div>

						<p class={styles.text}>{team.desc}</p>
						<div class={styles.memberSocials}></div>
					</div>
				</article>
			{/each}
		</div>
	</section>

	<section class={styles.partners}>
		<div class={styles.sectionContent}>
			<h4 class={styles.chip}>
				<span class="material-symbols-sharp">handshake</span>
				<span>partners</span>
			</h4>
			<h2 class={styles.title}>Our partners</h2>
		</div>

		<div class={styles.partnersWrapper}>
			{#each $partners as partner}
				<article class={styles.partnerCard}>
					<span class={`material-symbols-sharp ${styles.cardIcon}`}>temp_preferences_eco</span>
					<h4 class={styles.title}>{partner.name}</h4>

					<partner class={styles.text}>
						<span class="material-symbols-sharp">share_location</span>
						{partner.location}</partner
					>
				</article>
			{/each}
		</div>
	</section>

	<section class={styles.makeADiff}>
		<div class={styles.sectionWrapper}>
			<h2 class={styles.title}>
				Join us in making a <span class={styles.highlight}>difference</span>
			</h2>

			<p class={styles.desc}>
				your support can transform lives. help us empower orphans and vulnerable communities in
				cameroon today.
			</p>

			<div class={styles.ctaBtns}>
				<Button>
					<span>donate</span>
					<span class="material-symbols-sharp">compost</span>
				</Button>

				<Button secondary>
					<span>volunteer</span>
					<span class="material-symbols-sharp">volunteer_activism</span>
				</Button>
			</div>
		</div>
	</section>
</main>
