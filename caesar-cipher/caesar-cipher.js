const shiftChar = (char, shift) => {
	if (/[a-z]/i.test(char)) {
		const charCode = char.charCodeAt(0);
		if (charCode >= 65 && charCode <= 90) {
			return String.fromCharCode(((charCode - 65 + shift) % 26) + 65);
		} else if (charCode >= 97 && charCode <= 122) {
			return String.fromCharCode(((charCode - 97 + shift) % 26) + 97);
		}
	} else {
		return char;
	}
};

const caesarCipher = (str, shift) => {
	let shiftCopy = shift;
	while (shiftCopy < 0) {
		shiftCopy += 26;
	}
	return str
		.split('')
		.map((char) => shiftChar(char, shiftCopy))
		.join('');
};

module.exports = caesarCipher;
