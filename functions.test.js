const { capitalize, reverseString } = require('./functions');

// capitalize test

test('capitalize a letter', () => {
	const str = capitalize('a');
	expect(str).toBe('A');
});

test('capitalize a word', () => {
	const str = capitalize('hello');
	expect(str).toBe('Hello');
});

test('capitalize a word with mixed letter case', () => {
	const str = capitalize('hElLo');
	expect(str).toBe('Hello');
});

test('capitalize multiple words', () => {
	const str = capitalize('this is a sentence');
	expect(str).toBe('This Is A Sentence');
});

test('capitalize multiple words with mixed letter case', () => {
	const str = capitalize('tHiS iS A seNTeNcE');
	expect(str).toBe('This Is A Sentence');
});

test('capitalize multiple words with punctuations', () => {
	const str = capitalize(
		'lorem ipsum dolor sit amet, consectetur adipiscing elit.'
	);
	expect(str).toBe('Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.');
});

test('capitalize multiple words with punctuation at the beggining of a word', () => {
	const str = capitalize(
		'"lorem ipsum dolor sit amet, consectetur adipiscing elit."'
	);
	expect(str).toBe(
		'"Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit."'
	);
});

test('accepts nonletter', () => {
	const str = capitalize('the clothing costs $30.');
	expect(str).toBe('The Clothing Costs $30.');
});

// reverseString tests

test('reversing empty string returns the same thing', () => {
	const str = reverseString('');
	expect(str).toBe('');
});

test('reversing whitespaces returns the same thing', () => {
	const str = reverseString('   ');
	expect(str).toBe('   ');
});

test('reversing a char returns the same thing', () => {
	const str = reverseString('a');
	expect(str).toBe('a');
});

test('reverse a word', () => {
	const str = reverseString('Hello');
	expect(str).toBe('olleH');
});

test('reverse multiple words', () => {
	const str = reverseString('Hello World');
	expect(str).toBe('dlroW olleH');
});
