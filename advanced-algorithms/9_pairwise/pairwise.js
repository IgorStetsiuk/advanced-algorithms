 export function pairwise(arr, arg) {
	const array = [...arr];
	let usedElements = [];
	let forbiddenIndexes = [];
	let sumsOfIndexes = arr.reduce((prev, next, currIndex, arr) => {
		let arrayCopy = array.slice();
		let slised =arrayCopy.splice(currIndex,1);

		// let partsOfPair = arrayCopy.filter(el => next + el === arg);

		let partsOfPairArr = slised.reduce((accum, el) => {
			if (next + el === arg ){
				accum.push({elem: el, index: array.indexOf(el)});
				return [...accum]
			}
			return [...accum]
		}, []);

		debugger

		const pairsSumOfIndexes = partsOfPairArr.reduce((rez, {elem, index}) => {
			if (!usedElements.includes(elem) && !forbiddenIndexes.includes(index)) {
				usedElements.push(elem);
				forbiddenIndexes.push(index);
				let indexSum = currIndex + index;
				return [...rez, indexSum];
			}
			return [...rez];
		},[]);
		debugger
		next = [...prev, ...pairsSumOfIndexes];
		usedElements = []
		console.log(next);
		return next;
	}, []);

	return Math.max(...sumsOfIndexes) + Math.min(...sumsOfIndexes);
}

console.log(pairwise([1, 4, 2, 3, 0, 5], 7));
console.log(pairwise([1, 3, 2, 4], 4));
console.log(pairwise([0, 0, 0, 0, 1, 1], 1));
console.log(pairwise([1, 4, 2, 3, 0, 5], 7));