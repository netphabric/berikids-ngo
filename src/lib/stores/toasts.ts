import { writable } from "svelte/store"

type Toast = {
	id: number
	message: string
	duration: number
	type: string
}

export const toasts = writable<Toast[]>([])

export function addToast(type: string, message: string, duration = 4000) {
	toasts.update((toasts) => [
		...toasts,
		{
			id: Date.now(),
			message,
			type,
			duration
		}
	])
}
