import { writable } from "svelte/store"

type toastType = "error" | "info" | "success" | "warning"

type Toast = {
	id: number
	message: string
	duration: number
	type: toastType
}

export const toasts = writable<Toast[]>([])

export function addToast(type: toastType, message: string, duration = 4000) {
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
