(function (doc) {
	
	var isTextNode = function itn(node) {
		return node.nodeName === '#text'
	}

	var changeAbortionToInfanticide = function cati(text) {
		return text.replace(/(abortion)(ist)?/ig, (_, abortion) => {
			return (abortion[0] === 'A' ? 'I' : 'i') + 'nfanticide'
		})
	}

	Array.from(doc.querySelectorAll('*')).forEach(el => {
		return Array.from(el.childNodes)
			.filter(isTextNode)
			.forEach(node => node.textContent = changeAbortionToInfanticide(node.textContent))
	})

})(document)
