const dictionary = {
	1: 'i',
	3: 'e',
	4: 'a',
	5: 's',
	0: 'o',
}

const replaceWords = arrayStrings => {
	const newArray = arrayStrings.map(string => {
		const stringSpaces = string.trim()

		const strLetters = stringSpaces.split('')

		const replacedChars = strLetters
			.map(letter => {
				return dictionary[letter] ? (letter = dictionary[letter]) : letter
			})
			.join('')

		return replacedChars
	})

	console.log('Array com alteração nas strings:\n', newArray)
}

export default replaceWords
