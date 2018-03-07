export function pairwise(arr, arg) {
	
	let result = 0;
	let copyArray = [...arr];
	let usedIndexes = [];
	
	
	arr.forEach((el, index) => {
		copyArray.forEach((copyElem, copyElIndex) => {
			if (index !== copyElIndex) {
				
				if (el + copyElem === arg && usedIndexes.indexOf(index) === -1 && usedIndexes.indexOf(copyElIndex) === -1) {
					result = result + index + copyElIndex;
					usedIndexes.push(index, copyElIndex);
				}
			}
		})
	});
	
	return result;
}