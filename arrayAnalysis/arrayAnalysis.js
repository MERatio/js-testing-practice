const arrayAnalysis = (arr) => {
	const sum = arr.reduce((acc, cur) => acc + cur);
	const length = arr.length;

	return {
		average: sum / length,
		min: Math.min(...arr),
		max: Math.max(...arr),
		length,
	};
};

module.exports = arrayAnalysis;
