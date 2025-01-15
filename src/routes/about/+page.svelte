<script>
	import ContentBlock from "$lib/components/contentBlock.svelte"
	import Partners from "$lib/components/partners.svelte"
	import Team from "$lib/components/team.svelte"
</script>

<main class="root">
	<ContentBlock
		contentChipColor="yellow"
		contentChipText="berikids"
		contentChipIcon="person_play"
		contentTitle="who we are & what we stand for: Goals, Vision and Mission"
		contentTitleHighlight="Goals, Vision and Mission"
		contentMedia="/images/about-hero.webp"
		contentDescription="
      Berikids, a Cameroonian NGO founded in 2004, focuses on improving the lives of underprivileged children and orphans. Based in the North West Region, the organization has been working to provide support and resources to vulnerable populations.
      Currently, Berikids is prioritizing interventions to address the challenges created by the ongoing armed conflict in the North West Region. This work aims to provide critical assistance to those affected by the conflict and contribute to long-term positive change in the region.
    "
	/>

	<Team />

	<ContentBlock
		flexReverse
		contentChipColor="blue"
		contentChipText="what we do"
		contentChipIcon="person_play"
		contentTitle="supporting vulnerable communities via sustainability programs"
		contentTitleHighlight="vulnerable communities"
		contentMedia="/images/Hs1-img.webp"
		contentDescription="Founded with a vision to uplift the socio-economic conditions of orphans in Cameroon, our
      NGO has grown significantly since its inception. Key milestones include the launch of
      vocational training programs and successful partnerships with local and international
      organizations to enhance community development.
    "
	/>

	<Partners />

	<ContentBlock
		contentChipColor="green"
		contentChipText="what keeps us going"
		contentChipIcon="format_paint"
		contentTitle="Our committment to transforming lives in Cameroon"
		contentTitleHighlight="committment"
		contentMedia="/images/as2.webp"
		contentDescription=" We are dedicated to improving the socio-economic conditions of orphans, providing them with
      essential skills and resources. Our initiatives also focus on advancing IT education,
      ensuring access to potable water, and offering Christian counseling to foster holistic
      development.
    "
	/>
</main>

<style lang="scss">
	.root {
		display: flex;
		flex-direction: column;
		gap: 100px;
	}
</style>
