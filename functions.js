const capitalize = (str) => {
	return str
		.split(' ')
		.map((word) => {
			const firstLetterArr = word.match(/[a-zA-Z]/);
			if (!firstLetterArr) {
				return word;
			}
			const firstLetter = firstLetterArr[0];
			const firstLetterIndex = word.indexOf(firstLetter);
			const wordArr = word.split('').map((char, index) => {
				return index === firstLetterIndex
					? char.toUpperCase()
					: char.toLowerCase();
			});
			return wordArr.join('');
		})
		.join(' ');
};

const reverseString = (str) => str.split('').reverse().join('');

module.exports = {
	capitalize,
	reverseString,
};
