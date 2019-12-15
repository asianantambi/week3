	const arraySort = require('./arraysort');
	
	test('It does not accept numbers as input', () => {
	expect(arraySort(5)).toBe('invalid input');
	});
	
	test('It does not accept strings as input', () => {
	expect(arraySort('string')).toBe('invalid input');
	});
	
	test('It sorts a given array', () => {
	expect(
	arraySort([2, 0, 6, 5, 1, 7, 'z', 'a']);
	).toEqual(
	{'evens': [0, 2, 4, 6], 'odds': [1, 3, 5, 9], 'chars': ['a', 'z']}
	);
	});

