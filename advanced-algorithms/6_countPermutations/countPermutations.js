export function countPermutations(str) {
	
	
	let combinations = [];
	let arr = str.split('');
	
	let swapCharactersByIndex = function (arr, start, i) {
		let temp = arr[start];
		arr[start] = arr[i];
		arr[i] = temp;
		return arr;
	};
	
	let getPermutations =  (array, start, stop, perms) => {
		let i = null;
		let permutation = [];
		
		if (start === stop) {
			for (i = 0; i < array.length; i++) {
				permutation.push(array[i]);
			}
			perms.push(permutation.join(''));
		} else {
			for (i = start; i < stop; i++) {
				array = swapCharactersByIndex(array, start, i);
				getPermutations(array, start + 1, stop, perms);
				array = swapCharactersByIndex(array, start, i);
			}
		}
	};
	getPermutations(arr, 0, arr.length, combinations);
	
	return combinations.filter(perm => !perm.match(/(.)\1+/g)).length
}
