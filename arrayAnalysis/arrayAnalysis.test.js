const arrayAnalysis = require('./arrayAnalysis');

test('array analysis returns corect object properties', () => {
	const output = {
		average: 4,
		min: 1,
		max: 8,
		length: 6,
	};
	expect(arrayAnalysis([1, 8, 3, 4, 2, 6])).toEqual(output);
});
