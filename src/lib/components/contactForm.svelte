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
			<Chip chipText="Got something to say?" chipIcon="emoji_food_beverage" chipColor="green" />

			<h1 class="form-title">Drop us a message</h1>
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
		background-color: #ffffff;
		background-image: url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h16v2h-6v6h6v8H8v-6H2v6H0V0zm4 4h2v2H4V4zm8 8h2v2h-2v-2zm-8 0h2v2H4v-2zm8-8h2v2h-2V4z' fill='%23d6d6d6' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E");

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
		}
	}
</style>
