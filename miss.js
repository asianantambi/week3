



function findMissing(array) {
	const arraySize = array.length;
	const arr = [];
	let i = 0;
	let j = array[0];
	let jSize = array[arraySize - 1];
	while (j <jSize){
		(array[i] == j) ? (i += 1) : (arr.push(j));
		j++;
	}
	return arr;
}

console.log(findMissing('1', '4' , '6'));





















