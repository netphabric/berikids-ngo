<script>
	import { addToast } from "$lib/stores/toasts"
	import Button from "./button.svelte"
	import Chip from "./chip.svelte"

	let name = ""
	let email = ""
	let message = ""
	let isSending = false

	const handleSubmit = async () => {
		const formData = { email, name, message }
		if (!name || !email || !message) {
			addToast("error", "Please fill in all fields")
			return
		}

		isSending = true

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

		isSending = false
	}
</script>

<form class="contact-Form" on:submit|preventDefault={handleSubmit}>
	<div class="form-wrapper">
		<header class="form-header">
			<Chip chipText="Got something to say?" chipIcon="emoji_food_beverage" chipColor="green" />

			<h1 class="form-title">Drop us a message</h1>
		</header>

		<div class="form-fields">
			<input id="name" type="text" placeholder="Your Name" bind:value={name} />
			<input id="email" type="email" placeholder="Your Email" bind:value={email} />
			<textarea id="message" placeholder="Your Message" bind:value={message} />

			<Button>
				<span class="material-symbols-sharp">send</span>
				<span>{isSending ? "Sending ..." : "Submit"}</span>
			</Button>
		</div>
	</div>
</form>

<style lang="scss">
	.contact-Form {
		padding: rem(32) rem(20);

		@media (min-width: 768px) {
			height: calc(75dvh - 50px);
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

			textarea {
				height: rem(150);
				resize: none;
			}

			input,
			textarea {
				transition: all 3ms ease-in-out;

				&:active,
				&:focus-visible {
					outline: 2px solid $accent;
				}
			}
		}
	}
</style>
