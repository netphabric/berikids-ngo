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
		padding: rem(32) rem(20);

		@media (min-width: 768px) {
			height: calc(70dvh - 48px);
		}

		.form-wrapper {
			width: 100%;
			max-width: $max-width;
			margin-inline: auto;
		}

		.form-header {
			display: flex;
			flex-direction: column;
			align-items: center;
			margin-bottom: rem(32);
			gap: rem(32);

			.form-title {
				font-size: $h4;
				font-weight: $semiBold;

				@include minWidth("tablet") {
					font-size: $h3;
					line-height: 40px;
				}

				@include minWidth("desktop") {
					font-size: $h2;
				}
			}
		}

		.form-fields {
			margin-inline: auto;
			display: flex;
			flex-direction: column;
			gap: rem(20);

			@include minWidth("tablet") {
				max-width: 60%;
			}

			:global(button) {
				width: fit-content;
			}

			input {
				height: rem(60);
			}

			textarea {
				height: rem(150);
				resize: none;
			}

			input,
			textarea {
				padding: rem(8) rem(16);
				border-radius: rem(8);
				border: transparent;
				font-size: $small;
				font-weight: $normal;
				box-shadow: $shadow-soft;

				@include minWidth("tablet") {
					font-size: $regular;
					line-height: rem(32);
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
