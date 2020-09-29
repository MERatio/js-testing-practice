const calculator = require('./calculator');

test('adding arbitrary integers', () => {
	const data = calculator.add(10, 20, 30, 40, 50);
	expect(data).toBe(150);
});

test('subtracting arbitrary integers', () => {
	const data = calculator.subtract(40, 20, 10);
	expect(data).toBe(10);
});

test('multiplying arbitrary integers', () => {
	const data = calculator.multiply(30, 60, 100, 10);
	expect(data).toBe(1800000);
});

test('dividing arbitrary integers', () => {
	const data = calculator.divide(1080, 20, 2);
	expect(data).toBe(27);
});

test('adding arbitrary floats', () => {
	const data = calculator.add(22.3, 800, 0.013, 0.5, 100.02);
	expect(data).toBeCloseTo(922.83);
});

test('subtracting arbitrary floats', () => {
	const data = calculator.subtract(22.3, 800, 0.013, 0.5, 100.02);
	expect(data).toBeCloseTo(-878.23);
});

test('multiplying arbitrary floats', () => {
	const data = calculator.multiply(22.3, 800, 0.013, 0.5, 100.02);
	expect(data).toBeCloseTo(11598.319);
});

test('dividing arbitrary floats', () => {
	const data = calculator.divide(22.3, 800, 0.013, 0.5, 100.02);
	expect(data).toBeCloseTo(0.04);
});
