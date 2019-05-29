(function (doc) {
	
	var isTextNode = function itn(node) {
		return node.nodeName === '#text'
	}

	var sameCase = function (prevWord, nextWord) {
		var startsUpper = /^[A-Z]/.test(prevWord)
		var toCase = startsUpper ? 'toUpperCase' : 'toLowerCase'
		var nextWordStart = nextWord[0][toCase]()
		return nextWordStart + nextWord.slice(1)
	}

	var changeAbortionToInfanticide = function cati(text) {
		return text.replace(/(abortion)(ist)?/ig, (_, abortion) => sameCase(abortion, 'infanticide'))
		.replace(/(received|got|had) (?:an )?(infanticide)/gi, (_, a, b) => sameCase(a, 'committed ') + sameCase(b, 'infanticide'))
		.replace(/(receives|gets|has) (?:an )(infanticide)/gi, (_, a, b) => sameCase(a, 'commits ') + sameCase(b, 'infanticide'))
		.replace(/(receive|get|have) (?:an )?(infanticide)/gi, (_, a, b) => sameCase(a, 'commit ') + sameCase(b, 'infanticide'))
	}

	Array.from(doc.querySelectorAll('*')).forEach(el => {
		return Array.from(el.childNodes)
			.filter(isTextNode)
			.forEach(node => node.textContent = changeAbortionToInfanticide(node.textContent))
	})

})(document)
