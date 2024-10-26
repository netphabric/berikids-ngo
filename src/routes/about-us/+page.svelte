<script>
	import Button from "$lib/components/button/button.svelte"
	import SectionWrapper from "$lib/components/sectionWrapper/sectionWrapper.svelte"
	import styles from "./page.module.scss"

	const sectors = [
		{
			image: "/images/s1.webp",
			title: "Enhancing Socio-Economic Conditions for Orphans",
			desc: "We provide vocational training to empower orphans with essential life skills."
		},
		{
			image: "/images/s2.webp",
			title: "Advancing Education and Technology in Cameroon",
			desc: "Our programs promote digital literacy as a key to development."
		},
		{
			image: "/images/s3.webp",
			title: "Providing Clean Water to Communities in Need",
			desc: "We ensure access to potable water for underserved populations."
		}
	]
	const teams = [
		{
			profile: "/dp/dp2.webp",
			name: "alice johnson",
			role: "program director",
			desc: "passionate about empowering orphans through education and vocational training",
			socials: []
		},
		{
			profile: "/dp/dp3.webp",
			name: "alice johnson",
			role: "program director",
			desc: "passionate about empowering orphans through education and vocational training",
			socials: []
		},
		{
			profile: "/dp/dp4.webp",
			name: "alice johnson",
			role: "program director",
			desc: "passionate about empowering orphans through education and vocational training",
			socials: []
		},
		{
			profile: "/dp/dp5.webp",
			name: "alice johnson",
			role: "program director",
			desc: "passionate about empowering orphans through education and vocational training",
			socials: []
		},
		{
			profile: "/dp/dp6.webp",
			name: "alice johnson",
			role: "program director",
			desc: "passionate about empowering orphans through education and vocational training",
			socials: []
		},
		{
			profile: "/dp/dp7.webp",
			name: "alice johnson",
			role: "program director",
			desc: "passionate about empowering orphans through education and vocational training",
			socials: []
		},
		{
			profile: "/dp/dp8.webp",
			name: "alice johnson",
			role: "program director",
			desc: "passionate about empowering orphans through education and vocational training",
			socials: []
		},
		{
			profile: "/dp/dp2.webp",
			name: "alice johnson",
			role: "program director",
			desc: "passionate about empowering orphans through education and vocational training",
			socials: []
		}
	]
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
			{#each sectors as sector}
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
			{#each teams as team}
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
