import type { RequestEvent } from "@sveltejs/kit"
import { CONTACT_EMAIL_PASSWORD } from "$env/static/private"
import nodemailer from "nodemailer"
import fs from "fs"
import path from "path"
import Handlebars from "handlebars"

export async function POST({ request }: RequestEvent) {
	const { email, name, message } = await request.json()
	let recipientHtmlOutput
	let replyHtmlOutput

	// keep line breaks
	const formatMessage = (m: string) => m.replace(/\\n/g, "<br />")

	try {
		const recipeintTemplatePath = path.join(
			process.cwd(),
			"src",
			"routes",
			"api",
			"contact",
			"recipientTemplate.html"
		)

		const replyTemplatePath = path.join(
			process.cwd(),
			"src",
			"routes",
			"api",
			"contact",
			"replyTemplate.html"
		)

		const recipientTempSource = fs.readFileSync(recipeintTemplatePath, "utf-8").toString()
		const replyTempSource = fs.readFileSync(replyTemplatePath, "utf-8").toString()

		const recipientTemplate = Handlebars.compile(recipientTempSource)
		const replyTemplate = Handlebars.compile(replyTempSource)

		console.log(formatMessage(message))

		recipientHtmlOutput = recipientTemplate({ name, email, message: formatMessage(message) })
		replyHtmlOutput = replyTemplate({
			name,
			email: "abansekasly98@gmail.com",
			message: formatMessage(
				"We acknowledge receiving your message and will get back to you as soon as possible."
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

	const recipientmailOptions = {
		from: email,
		to: "abansekasly98@gmail.com",
		subject: `Website Contact From ${name}`,
		html: recipientHtmlOutput
	}

	const replymailOptions = {
		to: email,
		from: "abansekasly98@gmail.com",
		subject: "Thank you for reaching out",
		html: replyHtmlOutput
	}

	try {
		await transporter.sendMail(recipientmailOptions)
		await transporter.sendMail(replymailOptions)
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
