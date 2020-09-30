const caesarCipher = require('./caesar-cipher');

test('caesar cipher shift of 0 to a string returns the same string', () => {
	expect(caesarCipher('Hello World', 0)).toBe('Hello World');
});

test('caesar cipher keeps the same case', () => {
	expect(caesarCipher('fUuQJ', -5)).toBe('aPpLE');
});

test('caesar cipher shift of 10 to "a" returns "k"', () => {
	expect(caesarCipher('a', 10)).toBe('k');
});

test('caesar cipher wrapping from z to a', () => {
	expect(caesarCipher('z', 1)).toBe('a');
});

test('caesar cipher shift can take negative integer', () => {
	expect(caesarCipher('a', -10)).toBe('q');
});

test('caesar cipher shift of 9000 wraps Too high to Xss lmkl', () => {
	expect(caesarCipher('Too high', 9000)).toBe('Xss lmkl');
});

test('caesar cipher shift of -9000 wraps Too low to Pkk hks', () => {
	expect(caesarCipher('Too low', -9000)).toBe('Pkk hks');
});

test('caesar cipher ignores punctations', () => {
	const str = `!@#"word"$dog%'cat'^&*(1 / 1)_+`;
	const output = `!@#"sknz"$zkc%'ywp'^&*(1 / 1)_+`;
	expect(caesarCipher(str, 100)).toBe(output);
});

test('caesar cipher can take multiple words', () => {
	const str =
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id fermentum sem. Vivamus ligula elit, efficitur ac arcu vel, luctus finibus dui.';
	const output =
		'Filyg cjmog xifil mcn ugyn, wihmywnynol uxcjcmwcha yfcn. Myx cx zylgyhnog myg. Pcpugom fcaofu yfcn, yzzcwcnol uw ulwo pyf, fownom zchcvom xoc.';
	expect(caesarCipher(str, 150)).toBe(output);
});
