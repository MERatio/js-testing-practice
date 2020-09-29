const reverseString = require('./reverseString');

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
