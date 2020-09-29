const capitalize = require('./capitalize');

test('capitalizing an empty string returns the same thing', () => {
	const str = capitalize('');
	expect(str).toBe('');
});

test('capitalizing white spaces returns the same thing', () => {
	const str = capitalize('   ');
	expect(str).toBe('   ');
});

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
