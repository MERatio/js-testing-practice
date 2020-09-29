const calculator = (() => {
	const add = (...nums) => nums.reduce((acc, cur) => acc + cur);
	const subtract = (...nums) => nums.reduce((acc, cur) => acc - cur);
	const multiply = (...nums) => nums.reduce((acc, cur) => acc * cur);
	const divide = (...nums) => nums.reduce((acc, cur) => acc / cur);

	return {
		add,
		subtract,
		multiply,
		divide,
	};
})();

module.exports = calculator;
