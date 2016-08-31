function pow(number, degree) {
	var result = number;
	if (typeof number !== 'number' || typeof degree !== 'number' || isNaN(number) || isNaN(degree)) {
		result = 'Enter 2 numbers';
	}
	else if (degree === 0) {
		result = 1;
	}
	else if (degree > 0) {
		for (var i = 1; i < degree; i++) {
			result = result * number;
		}
	} else {
		var degree = -1 * degree;
		for (var i = 1; i < degree; i++) {
			result = result * number;
		}
		result = 1 / result;
	}
	return result;
}

var number = parseInt(prompt('Введите число', ''));
var degree = parseInt(prompt('Введите степень', ''));

var answer = number + ' в степени ' + degree + ' = ' + pow(number, degree);
console.log (answer);
