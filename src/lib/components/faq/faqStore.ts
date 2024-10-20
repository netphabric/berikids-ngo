import { writable } from "svelte/store"

export const faqs = writable([
	{
		id: 1,
		question: "What are your goals?",
		ans: "Our primary goals include improving socio-economic conditions for orphans and vulnerable children in Cameroon. We focus on education, vocational training, and providing essential resources like potable water. Additionally, we aim to foster spiritual growth through Christian counseling ",
		isOpen: true
	},
	{
		id: 2,
		question: "How can i contribute?",
		ans: "You can contribute by donating, volunteering your time, or spreading awareness about our initiatives. Every effort counts and helps us reach more individuals in need. Visit our 'Get Involved' page for more details.",
		isOpen: false
	},
	{
		id: 3,
		question: "What projects are on going?",
		ans: "We currently run several projects focused on vocational training, education enhancement, and water supply initiatives. Our programs are designed to empower orphans and vulnerable communities. Stay updated on our website for the latest project news.",
		isOpen: false
	},
	{
		id: 4,
		question: "Who do you help?",
		ans: "Our NGO primarily supports orphans, single mothers, mentally ill individuals, and other vulnerable children in Cameroon. We aim to provide them with the necessary skills and resources to improve their lives. Our focus is on holistic development—socially, economically, and spiritually.",
		isOpen: false
	},
	{
		id: 5,
		question: "How can i volunteer?",
		ans: "Volunteering with us is a rewarding experience where you can make a tangible impact. You can apply through our website, where we list current opportunities and requirements. Join us in our mission to uplift communities in need.",
		isOpen: false
	}
])
