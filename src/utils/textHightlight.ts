export const highlightText = (sentence: string, highlight: string) => {
	const sentenceWords = sentence.toLowerCase().split(" ")
	const highlightWords = highlight.toLowerCase().split(" ")
	const result = []

	let i = 0
	while (i < sentenceWords.length) {
		const segment = sentenceWords.slice(i, i + highlightWords.length).join(" ")
		if (segment === highlight.toLowerCase()) {
			result.push({
				text: segment,
				isHighlighted: true
			})

			i += highlightWords.length
		} else {
			result.push({
				text: sentenceWords[i],
				isHighlighted: false
			})
			i += 1
		}
	}

	return result
}
