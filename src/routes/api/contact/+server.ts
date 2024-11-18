import type { RequestEvent } from "@sveltejs/kit"
import { CONTACT_EMAIL_PASSWORD } from "$env/static/private"
import nodemailer from "nodemailer"

export async function POST({ request }: RequestEvent) {
	const { email, name, message } = await request.json()

	const transporter = nodemailer.createTransport({
		service: "gmail",
		auth: {
			user: "abanyseka98@gmail.com",
			pass: CONTACT_EMAIL_PASSWORD
		}
	})

	const mailOptions = {
		from: email,
		to: "abansekasly98@gmail.com",
		subject: `Website Contact From ${name}`,
		text: `mail from berikids contact form:\n\nName: ${name}\nEmail (${email}):\n\n${message}`
	}

	try {
		await transporter.sendMail(mailOptions)
		return new Response(JSON.stringify({ success: true }), {
			status: 200
		})
	} catch (err) {
		console.log("Error sending email", err)
		return new Response(JSON.stringify({ success: false }), {
			status: 500
		})
	}
}
