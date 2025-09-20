import { writable } from "svelte/store"

export const homeFaqs = writable([
	{
		id: 1,
		question: "How can I contact you?",
		ans: "You can reach us via email at contact@berikids.org or call us at +237 653 176 545. Our office hours are Monday to Friday, 9 AM to 5 PM. We look forward to hearing from you!",
		isOpen: true
	},
	{
		id: 2,
		question: "Can I visit your office?",
		ans: "Yes, we welcome visitors! Please schedule an appointment in advance to ensure someone is available to meet with you. Our office is located at 123 NGO Lane, City, State.",
		isOpen: false
	},
	{
		id: 3,
		question: "How can I volunteer?",
		ans: "Volunteering with us is easy! send us an email , and we will get back to you with opportunities that match your skills. Your support makes a difference!",
		isOpen: false
	},
	{
		id: 4,
		question: "What programs do you offer?",
		ans: "We offer various programs focused on rehabilitation, education, vocational training, and community development. Our initiatives aim to empower orphans and vulnerable individuals in Cameroon. Visit our vocation page for more details.",
		isOpen: false
	}
])

export const contactFaqs = writable([
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

export const trainingFaqs = writable([
	{
		id: 1,
		question: "Who is eligible?",
		ans: "Our training programs are open to orphans, single mothers, and vulnerable children. We aim to empower those in need by providing essential skills. Eligibility is determined based on individual circumstances and our assessment process.",
		isOpen: true
	},
	{
		id: 2,
		question: "What is the duration?",
		ans: "The duration of our training programs varies based on the specific skill being taught. Typically, programs last between three to six months. Participants can expect a comprehensive curriculum designed to enhance their employability.",
		isOpen: false
	},
	{
		id: 3,
		question: "How to apply?",
		ans: "To apply for our training programs, email your application to contact@berikids.org After submission, our team will review your application and contact you for further steps. We encourage all eligible individuals to apply.",
		isOpen: false
	},
	{
		id: 4,
		question: "Are there any fees?",
		ans: "Our vocational training programs are offered at no cost to participants. We believe in providing equal opportunities for all, regardless of financial status. Donations and grants support our mission to empower the community.",
		isOpen: false
	}
])
