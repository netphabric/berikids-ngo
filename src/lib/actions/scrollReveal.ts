interface ScrollOpts {
	threshold?: number
	rootMargin?: string
}

export function scrollReveal(node: HTMLElement, options: ScrollOpts = {}): { destroy: () => void } {
	const { threshold = 0.2, rootMargin = "1px" } = options

	const optionsForObserver: IntersectionObserverInit = {
		threshold,
		rootMargin
	}

	const handleIntersect = (entries: IntersectionObserverEntry[]) => {
		entries.forEach((entry) => {
			node.classList.toggle("reveal-visible", entry.isIntersecting)
		})
	}

	const observer = new IntersectionObserver(handleIntersect, optionsForObserver)
	observer.observe(node)

	return {
		destroy() {
			observer.unobserve(node)
		}
	}
}
