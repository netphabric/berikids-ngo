import { SECRET_STRIPE_KEY } from "$env/static/private"
import Stripe from "stripe"

const stripe = new Stripe(SECRET_STRIPE_KEY)

export async function POST({ request }: { request: Request }) {
	const { name, email, amount } = await request.json()
	if (!name || !email || !amount) return

	try {
		const customer = await stripe.customers.create({ name, email })
		const paymentIntent = await stripe.paymentIntents.create({
			currency: "usd",
			customer: customer.id,
			amount: parseInt(amount) * 100,
			automatic_payment_methods: {
				enabled: true
			}
		})

		return new Response(JSON.stringify({ clientSecret: paymentIntent.client_secret }))
	} catch (error) {
		return new Response(JSON.stringify({ error }), { status: 500 })
	}
}
