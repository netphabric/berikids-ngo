import { c as create_ssr_component, b as add_attribute, v as validate_component, e as each, d as escape } from "../../chunks/ssr.js";
import { B as Button } from "../../chunks/button.js";
const heroImg$1 = "/_app/immutable/assets/heroImg.DZpwW_4p.webp";
const heroSection = "_heroSection_1guod_6";
const heroTitle = "_heroTitle_1guod_20";
const highlight$4 = "_highlight_1guod_20";
const heroDescription = "_heroDescription_1guod_59";
const ctaBtns$3 = "_ctaBtns_1guod_76";
const heroImageContainer = "_heroImageContainer_1guod_90";
const heroImg = "_heroImg_1guod_96";
const styles$7 = {
  heroSection,
  heroTitle,
  highlight: highlight$4,
  heroDescription,
  ctaBtns: ctaBtns$3,
  heroImageContainer,
  heroImg
};
const Hero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section${add_attribute("class", styles$7.heroSection, 0)}><h1${add_attribute("class", styles$7.heroTitle, 0)} data-svelte-h="svelte-77gq33"><span>empowering lives</span> <span>through <span${add_attribute("class", styles$7.highlight, 0)}>sustainable</span></span> <span><span${add_attribute("class", styles$7.highlight, 0)}>development</span> initiatives</span></h1> <p${add_attribute("class", styles$7.heroDescription, 0)} data-svelte-h="svelte-1icqlfe">Our mission is to uplift orphans and vulnerable communities in Cameroon by enhancing their
		socio-economic conditions and providing essential resources. We focus on education, access to
		clean water, and spiritual guidance to foster holistic development.</p> <div${add_attribute("class", styles$7.ctaBtns, 0)}>${validate_component(Button, "Button").$$render($$result, { primary: true, onWhite: true }, {}, {
    default: () => {
      return `<span data-svelte-h="svelte-em924d">learn more</span> <span class="material-symbols-sharp" data-svelte-h="svelte-t96cdn">video_chat</span>`;
    }
  })} ${validate_component(Button, "Button").$$render($$result, { onWhite: true }, {}, {
    default: () => {
      return `<span data-svelte-h="svelte-1n6wo7t">get involved</span> <span class="material-symbols-sharp" data-svelte-h="svelte-jgo6xk">agriculture</span>`;
    }
  })}</div> <div${add_attribute("class", styles$7.heroImageContainer, 0)} data-svelte-h="svelte-1vthdd"><img${add_attribute("src", heroImg$1, 0)} alt="berikids"${add_attribute("class", styles$7.heroImg, 0)}></div></section>`;
});
const sectionWrapper$2 = "_sectionWrapper_1ivyq_6";
const isFlipped = "_isFlipped_1ivyq_27";
const styles$6 = {
  sectionWrapper: sectionWrapper$2,
  isFlipped
};
const SectionWrapper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { className = "" } = $$props;
  let { isFlipped: isFlipped2 = false } = $$props;
  if ($$props.className === void 0 && $$bindings.className && className !== void 0) $$bindings.className(className);
  if ($$props.isFlipped === void 0 && $$bindings.isFlipped && isFlipped2 !== void 0) $$bindings.isFlipped(isFlipped2);
  return `<section${add_attribute(
    "class",
    `${className && className}
    ${styles$6.sectionWrapper}
    ${isFlipped2 && styles$6.isFlipped}`,
    0
  )}>${slots.default ? slots.default({}) : ``}</section>`;
});
const Hs1Img = "/_app/immutable/assets/Hs1-img.B8VCNwmY.webp";
const homeSection1 = "_homeSection1_1ku9s_6";
const sectionContent$3 = "_sectionContent_1ku9s_14";
const contentChip$1 = "_contentChip_1ku9s_25";
const contentTitle$3 = "_contentTitle_1ku9s_34";
const highlight$3 = "_highlight_1ku9s_37";
const contentDesc$2 = "_contentDesc_1ku9s_60";
const ctaBtns$2 = "_ctaBtns_1ku9s_73";
const sectionImage = "_sectionImage_1ku9s_87";
const styles$5 = {
  homeSection1,
  sectionContent: sectionContent$3,
  contentChip: contentChip$1,
  contentTitle: contentTitle$3,
  highlight: highlight$3,
  contentDesc: contentDesc$2,
  ctaBtns: ctaBtns$2,
  sectionImage
};
const HomeSection1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(SectionWrapper, "SectionWrapper").$$render($$result, { className: styles$5.homeSection1 }, {}, {
    default: () => {
      return `<div${add_attribute("class", styles$5.sectionContent, 0)}><h4${add_attribute("class", styles$5.contentChip, 0)} data-svelte-h="svelte-87c4y4"><span class="material-symbols-sharp">altitude</span> <span>empower</span></h4> <h3${add_attribute("class", styles$5.contentTitle, 0)} data-svelte-h="svelte-121zuat">transforming
			<span${add_attribute("class", styles$5.highlight, 0)}>lives</span> through
			<span${add_attribute("class", styles$5.highlight, 0)}>compassionate</span> action</h3> <div${add_attribute("class", styles$5.contentDesc, 0)} data-svelte-h="svelte-s9yd91">Our NGO is dedicated to uplifting orphans and vulnerable children in Cameroon by enhancing
			their socio-economic conditions and educational opportunities. Through initiatives like
			vocational training and access to clean water, we strive to create sustainable change in
			communities.</div> <div${add_attribute("class", styles$5.ctaBtns, 0)}>${validate_component(Button, "Button").$$render($$result, { onWhite: true }, {}, {
        default: () => {
          return `<span data-svelte-h="svelte-1c5bl9">donate</span> <span class="material-symbols-sharp" data-svelte-h="svelte-dko6le">compost</span>`;
        }
      })} ${validate_component(Button, "Button").$$render($$result, { onWhite: true, primary: true }, {}, {
        default: () => {
          return `<span data-svelte-h="svelte-1n6wo7t">get involved</span> <span class="material-symbols-sharp" data-svelte-h="svelte-ynofb3">thread_unread</span>`;
        }
      })}</div></div> <div${add_attribute("class", styles$5.sectionImage, 0)} data-svelte-h="svelte-hvqzgw"><img${add_attribute("src", Hs1Img, 0)} alt="berkids"></div>`;
    }
  })}`;
});
const homeSection2 = "_homeSection2_1cynx_6";
const sectionWrapper$1 = "_sectionWrapper_1cynx_19";
const contentTitle$2 = "_contentTitle_1cynx_36";
const highlight$2 = "_highlight_1cynx_40";
const sectionContent$2 = "_sectionContent_1cynx_65";
const borderRotate = "_borderRotate_1cynx_1";
const styles$4 = {
  homeSection2,
  sectionWrapper: sectionWrapper$1,
  contentTitle: contentTitle$2,
  highlight: highlight$2,
  sectionContent: sectionContent$2,
  borderRotate
};
const HomeSection2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const options = [
    {
      icon: "lightbulb_2",
      title: "innovative solutions for sustanable development in cameroon",
      description: "We focus on enhancing the socio-economic conditions of orphans through targeted initiatives."
    },
    {
      icon: "school",
      title: "Transforming Lives Through Education and Technology",
      description: "Our IT education programs equip orphans with essential skills for the future."
    },
    {
      icon: "water_bottle",
      title: "Providing Clean Water for Healthier Communities",
      description: "We implement potable water projects to ensure access to clean drinking water."
    }
  ];
  return `<section${add_attribute("class", styles$4.homeSection2, 0)}><div${add_attribute("class", styles$4.sectionWrapper, 0)}><h2${add_attribute("class", styles$4.contentTitle, 0)} data-svelte-h="svelte-r2hwu3">empowering
			<span${add_attribute("class", styles$4.highlight, 0)}>orphans</span> and vulnerable communities for a
			<span${add_attribute("class", styles$4.highlight, 0)}>brighter future</span></h2> <div${add_attribute("class", styles$4.sectionContent, 0)}>${each(options, ({ icon, title, description }) => {
    return `<article><span class="material-symbols-sharp">${escape(icon)}</span> <h4>${escape(title)}</h4> <p>${escape(description)}</p> </article>`;
  })}</div></div></section>`;
});
const homeSection3 = "_homeSection3_x4xrf_6";
const sectionContent$1 = "_sectionContent_x4xrf_14";
const contentChip = "_contentChip_x4xrf_31";
const contentTitle$1 = "_contentTitle_x4xrf_40";
const highlight$1 = "_highlight_x4xrf_43";
const contentDesc$1 = "_contentDesc_x4xrf_67";
const statDesc = "_statDesc_x4xrf_76";
const statsContainer = "_statsContainer_x4xrf_91";
const statPercent = "_statPercent_x4xrf_102";
const ctaBtns$1 = "_ctaBtns_x4xrf_110";
const sectionMediaContainer = "_sectionMediaContainer_x4xrf_124";
const styles$3 = {
  homeSection3,
  sectionContent: sectionContent$1,
  contentChip,
  contentTitle: contentTitle$1,
  highlight: highlight$1,
  contentDesc: contentDesc$1,
  statDesc,
  statsContainer,
  statPercent,
  ctaBtns: ctaBtns$1,
  sectionMediaContainer
};
const HomeSection3 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(SectionWrapper, "SectionWrapper").$$render($$result, { className: styles$3.homeSection3 }, {}, {
    default: () => {
      return `<div${add_attribute("class", styles$3.sectionContent, 0)}><h4${add_attribute("class", styles$3.contentChip, 0)} data-svelte-h="svelte-18teudt"><span class="material-symbols-sharp">mountain_flag</span> <span>impact</span></h4> <h2${add_attribute("class", styles$3.contentTitle, 0)} data-svelte-h="svelte-pzdfsk">transforming lives through
			<span${add_attribute("class", styles$3.highlight, 0)}>community support</span></h2> <p${add_attribute("class", styles$3.contentDesc, 0)} data-svelte-h="svelte-uro2ad">Our NGO has positively impacted over 1,000 orphans and vulnerable children. We have
			successfully implemented 50 community projects across the North West Province</p> <div${add_attribute("class", styles$3.statsContainer, 0)} data-svelte-h="svelte-k0fmt"><article${add_attribute("class", styles$3.statItem, 0)}><h3${add_attribute("class", styles$3.statPercent, 0)}>75%</h3> <p${add_attribute("class", styles$3.statDesc, 0)}>of assisted children have improved their educational outcomes.</p></article> <article${add_attribute("class", styles$3.statItem, 0)}><h3${add_attribute("class", styles$3.statPercent, 0)}>80%</h3> <p${add_attribute("class", styles$3.statDesc, 0)}>of communities now have access to clean water.</p></article></div> <div${add_attribute("class", styles$3.ctaBtns, 0)}>${validate_component(Button, "Button").$$render($$result, { primary: true, onWhite: true }, {}, {
        default: () => {
          return `<span data-svelte-h="svelte-hkqajq">join</span> <span class="material-symbols-sharp" data-svelte-h="svelte-10wwtzw">handshake</span>`;
        }
      })} ${validate_component(Button, "Button").$$render($$result, { onWhite: true }, {}, {
        default: () => {
          return `<span data-svelte-h="svelte-1c5bl9">donate</span> <span class="material-symbols-sharp" data-svelte-h="svelte-dko6le">compost</span>`;
        }
      })}</div></div> <div${add_attribute("class", styles$3.sectionMediaContainer, 0)} data-svelte-h="svelte-zuryn4"><video muted playsinline disablepictureinpicture controls><source src="/video.mp4" type="video/mp4"></video></div>`;
    }
  })}`;
});
const homeSection4 = "_homeSection4_1o6hs_6";
const sectionWrapper = "_sectionWrapper_1o6hs_24";
const contentTitle = "_contentTitle_1o6hs_27";
const highlight = "_highlight_1o6hs_31";
const sectionContent = "_sectionContent_1o6hs_56";
const contentDesc = "_contentDesc_1o6hs_61";
const ctaBtns = "_ctaBtns_1o6hs_75";
const styles$2 = {
  homeSection4,
  sectionWrapper,
  contentTitle,
  highlight,
  sectionContent,
  contentDesc,
  ctaBtns
};
const HomeSection4 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section${add_attribute("class", styles$2.homeSection4, 0)}>${validate_component(SectionWrapper, "SectionWrapper").$$render($$result, { className: styles$2.sectionWrapper }, {}, {
    default: () => {
      return `<h2${add_attribute("class", styles$2.contentTitle, 0)} data-svelte-h="svelte-13xcdj0"><span${add_attribute("class", styles$2.highlight, 0)}>join us</span>
			in making a difference</h2> <div${add_attribute("class", styles$2.sectionContent, 0)}><p${add_attribute("class", styles$2.contentDesc, 0)} data-svelte-h="svelte-1ekjoe7">your support can transform the lives of orphans and vulnerable communities in cameroon.
				whether through donations, volunteering, or partnerships, every effort count towards
				creating a brighter futur.</p> <div${add_attribute("class", styles$2.ctaBtns, 0)}>${validate_component(Button, "Button").$$render($$result, {}, {}, {
        default: () => {
          return `<span data-svelte-h="svelte-1c5bl9">donate</span> <span class="material-symbols-sharp" data-svelte-h="svelte-dko6le">compost</span>`;
        }
      })} ${validate_component(Button, "Button").$$render($$result, { primary: true }, {}, {
        default: () => {
          return `<span data-svelte-h="svelte-10tcr90">volunteer</span> <span class="material-symbols-sharp" data-svelte-h="svelte-15ezy9c">cheer</span>`;
        }
      })}</div></div>`;
    }
  })}</section>`;
});
const testimonialsSection = "_testimonialsSection_1n45x_6";
const testimony = "_testimony_1n45x_20";
const testimonyAuthor = "_testimonyAuthor_1n45x_42";
const authorDP = "_authorDP_1n45x_47";
const spin = "_spin_1n45x_1";
const authorsName = "_authorsName_1n45x_91";
const authorsRole = "_authorsRole_1n45x_92";
const styles$1 = {
  testimonialsSection,
  testimony,
  testimonyAuthor,
  authorDP,
  spin,
  authorsName,
  authorsRole
};
const Testimonials = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section${add_attribute("class", styles$1.testimonialsSection, 0)} data-svelte-h="svelte-7k07wv"><h2${add_attribute("class", styles$1.testimony, 0)}>&quot;This organization has transformed my life and the lives of many others. Their support has given
		us hope and a brighter future.&quot;</h2> <article${add_attribute("class", styles$1.testimonyAuthor, 0)}><div${add_attribute("class", styles$1.authorDP, 0)}><div${add_attribute("class", styles$1.circle, 0)}></div> <img src="https://i.pravatar.cc/300?img=11" alt="testimonial avatar"></div> <h6${add_attribute("class", styles$1.authorsName, 0)}>John Doe</h6> <p${add_attribute("class", styles$1.authorsRole, 0)}>volunteer, NGO partner</p></article></section>`;
});
const homeRoot = "_homeRoot_1ngrp_6";
const styles = {
  homeRoot
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main${add_attribute("class", styles.homeRoot, 0)}>${validate_component(Hero, "Hero").$$render($$result, {}, {}, {})} ${validate_component(HomeSection1, "HomeSection1").$$render($$result, {}, {}, {})} ${validate_component(HomeSection2, "HomeSection2").$$render($$result, {}, {}, {})} ${validate_component(HomeSection3, "HomeSection3").$$render($$result, {}, {}, {})} ${validate_component(Testimonials, "Testimonials").$$render($$result, {}, {}, {})} ${validate_component(HomeSection4, "HomeSection4").$$render($$result, {}, {}, {})}</main>`;
});
export {
  Page as default
};
