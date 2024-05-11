var _ = require("lodash");

function maxNum(...numbers) {
	return _.max(numbers);
}

module.exports = maxNum;
