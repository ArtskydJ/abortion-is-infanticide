(function (doc) {
	
	var isTextNode = function itn(node) {
		return node.nodeName === '#text'
	}

	var changeAbortionToInfanticide = function cati(text) {
		return text.replace(/(abortion)(ist)?/ig, (_, abortion) => {
			return (abortion[0] === 'A' ? 'I' : 'i') + 'nfanticide'
		})
		.replace(/(received|got|had) (an )?infanticide/, 'committed infanticide')
		.replace(/(receives|gets|has) an infanticide/, 'commits infanticide')
		.replace(/(receive|get|have) (an )?infanticide/, 'commit infanticide')
	}

	Array.from(doc.querySelectorAll('*')).forEach(el => {
		return Array.from(el.childNodes)
			.filter(isTextNode)
			.forEach(node => node.textContent = changeAbortionToInfanticide(node.textContent))
	})

})(document)
