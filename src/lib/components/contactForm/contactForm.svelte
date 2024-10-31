<script>
	import Button from "../button/button.svelte"
	import styles from "./contactForm.module.scss"
	import { addToast } from "$lib/stores/toastStore"

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

<form class={styles.contactForm} on:submit|preventDefault={handleSubmit}>
	<div class={styles.formHeader}>
		<h4 class={styles.chip}>
			<span class="material-symbols-sharp">outgoing_mail</span>
			<span>connect</span>
		</h4>

		<h2 class={styles.title}>
			<span class={styles.highlight}>Reach out</span>
			to us
		</h2>

		<p class={styles.desc}>we'd love to hear from you</p>
	</div>

	<div class={styles.formGroup}>
		<label for="name">
			Name:
			<input id="name" type="text" placeholder="Name" bind:value={name} />
		</label>

		<label for="email">
			Email:
			<input id="email" type="email" placeholder="email" bind:value={email} />
		</label>

		<label for="message">
			Message:
			<textarea id="message" placeholder="send us a message" bind:value={message} />
		</label>
	</div>

	<div class={styles.ctaBtns}>
		<Button onWhite secondary>
			<span>submit</span>
			<span class="material-symbols-sharp">send</span>
		</Button>
	</div>
</form>
