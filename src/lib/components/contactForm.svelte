<script>
	import { addToast } from "$lib/stores/toasts"
	import Button from "./button.svelte"
	import Chip from "./chip.svelte"

	let name = ""
	let email = ""
	let message = ""

	const handleSubmit = async () => {
		const formData = { email, name, message }
		if (!name || !email || !message) {
			addToast("error", "Please fill in all fields")
			return
		}

		const res = await fetch("/api/contact", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(formData)
		})

		if (res.ok) {
			name = email = message = ""
			addToast("success", "Message sent successfully")
		} else {
			addToast("error", "Failed to send message")
		}
	}
</script>

<form class="contact-Form" on:submit|preventDefault={handleSubmit}>
	<div class="form-wrapper">
		<header class="form-header">
			<Chip
				chipText="What can we help you with?"
				chipIcon="emoji_food_beverage"
				chipColor="green"
			/>

			<h1 class="form-title">Reach out to us</h1>
		</header>

		<div class="form-fields">
			<input id="name" type="text" placeholder="Your Name" bind:value={name} />
			<input id="email" type="email" placeholder="Your Email" bind:value={email} />
			<textarea id="message" placeholder="Your Message" bind:value={message} />

			<Button>
				<span>submit</span>
				<span class="material-symbols-sharp">send</span>
			</Button>
		</div>
	</div>
</form>

<style lang="scss">
	.contact-Form {
		padding: 32px 20px;

		@media (min-width: 768px) {
			height: calc(70dvh - 48px);
		}

		.form-wrapper {
			width: 100%;
			max-width: 1440px;
			margin-inline: auto;
		}

		.form-header {
			display: flex;
			flex-direction: column;
			align-items: center;
			margin-bottom: 32px;
			gap: 32px;

			.form-title {
				font-size: 28px;
				font-weight: 600;

				@media (min-width: 768px) {
					font-size: 32px;
					line-height: 40px;
				}

				@media (min-width: 1024px) {
					font-size: 52px;
				}
			}
		}

		.form-fields {
			margin-inline: auto;
			display: flex;
			flex-direction: column;
			gap: 20px;

			@media (min-width: 768px) {
				max-width: 60%;
			}

			:global(button) {
				width: fit-content;
			}

			input {
				height: 60px;
			}

			textarea {
				height: 150px;
				resize: none;
			}

			input,
			textarea {
				padding: 8px 16px;
				border-radius: 8px;
				border: transparent;
				font-size: 14px;
				font-weight: 400;
				box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

				@media (min-width: 768px) {
					font-size: 16px;
					line-height: 32px;
				}

				&::placeholder {
					opacity: 0.5;
				}

				&:focus {
					outline: none;
				}
			}
		}
	}
</style>
