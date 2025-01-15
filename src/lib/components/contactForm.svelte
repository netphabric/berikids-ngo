<script>
	import { addToast } from "$lib/stores/toasts"
	import Button from "./button/button.svelte"
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
			<Chip chipText="contact us" chipIcon="emoji_food_beverage" chipColor="green" />

			<h2 class="form-title">Reach out to us</h2>
		</header>

		<div class="form-fields">
			<input id="name" type="text" placeholder="Your Name" bind:value={name} />
			<input id="email" type="email" placeholder="Your Email" bind:value={email} />
			<textarea id="message" placeholder="Your Message" bind:value={message} />

			<Button onWhite secondary>
				<span>submit</span>
				<span class="material-symbols-sharp">send</span>
			</Button>
		</div>
	</div>
</form>

<style lang="scss">
	.contact-Form {
		padding: 32px;
		height: calc(100dvh - 335px);

		.form-wrapper {
			width: 100%;
			max-width: 1440px;
			margin-inline: auto;
		}

		.form-header {
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 10px;
			margin-bottom: 20px;

			.form-title {
				font-size: 54px;
				font-weight: 600;
			}
		}

		.form-fields {
			max-width: 60%;
			margin-inline: auto;
			display: flex;
			flex-direction: column;
			gap: 20px;

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
				font-size: 18px;
				font-weight: 400;
				line-height: 32px;
				box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

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
