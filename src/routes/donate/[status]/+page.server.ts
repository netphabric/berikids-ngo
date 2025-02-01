import type { ServerLoadEvent } from "@sveltejs/kit"

export const load = async (loadEvent: ServerLoadEvent) => {
	const status =
		String(loadEvent?.url)
			.split(/[+/?&= ]+/)
			.pop() ?? ""

	return {
		status
	}
}
