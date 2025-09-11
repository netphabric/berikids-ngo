import type { RequestEvent } from "@sveltejs/kit"
import { CONTACT_EMAIL_PASSWORD } from "$env/static/private"
import nodemailer from "nodemailer"
import fs from "fs"
import path from "path"
import Handlebars from "handlebars"

export async function POST({ request }: RequestEvent) {
	const { email, name, message } = await request.json()
	let adminHtmlOuput
	let guestHtmlOutput

	// keep line breaks
	const formatMessage = (m: string) => m.replace(/\\n/g, "<br />")

	try {
		const adminTemp = path.join(
			process.cwd(),
			"src",
			"routes",
			"api",
			"contact",
			"adminMailTemp.html"
		)

		const guestTemp = path.join(
			process.cwd(),
			"src",
			"routes",
			"api",
			"contact",
			"guestMailTemp.html"
		)

		const adminTempSource = fs.readFileSync(adminTemp, "utf-8").toString()
		const guestTempSource = fs.readFileSync(guestTemp, "utf-8").toString()

		const mailToAdmin = Handlebars.compile(adminTempSource)
		const mailToGuest = Handlebars.compile(guestTempSource)

		adminHtmlOuput = mailToAdmin({ name, email, message: formatMessage(message) })
		guestHtmlOutput = mailToGuest({
			name,
			email: "abansekasly98@gmail.com",
			message: formatMessage(
				"This email is an acknowledgement that we have received your message, and will get back to you as soon as possible. "
			)
		})
	} catch (error) {
		console.error("Error processing template:", error)
		return new Response(JSON.stringify({ success: false, error }), { status: 500 })
	}

	const transporter = nodemailer.createTransport({
		service: "gmail",
		auth: {
			user: "abanyseka98@gmail.com",
			pass: CONTACT_EMAIL_PASSWORD
		}
	})

	const mailToAdminOptions = {
		from: email,
		html: adminHtmlOuput,
		subject: `Website Contact From ${name}`,
		to: "berryrelindis@gmail.com",
		bcc: "abansekasly98@gmail.com, njobamalvin17@gmail.com,wirnkarmeekness69@gmail.com"
	}

	const mailToGuestOptions = {
		to: email,
		from: "berryrelindis@gmail.com",
		subject: "Thank you for reaching out",
		html: guestHtmlOutput
	}

	try {
		await transporter.sendMail(mailToAdminOptions)
		await transporter.sendMail(mailToGuestOptions)
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
