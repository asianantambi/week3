
var array = ([2, 0, 6, 5, 1, 7, 'z', 'a']);
// declaring even, odd and character
even = [];
odd = [];
char = [];
// to sort the array
// array = array.sort((a, b) => b % 2 - a % 2 || a-b);

// does not accept numbers as inputs
if(typeof array=='string' || typeof array==='number'){
return 'invalid input'
}
// sorting arrays (even numbers)
for (var i = 0; i < array.length; ++i){
	if((array[i] % 2) ===0) {
		even.push(array[i]);
	}
	// odd numbers
	else if ((array[i] % 2) ===1) {
		odd.push(array[i]);
	}
	// characters
	else {
		char.push(array[i]);
	}
}

console.log(even, odd, char);


