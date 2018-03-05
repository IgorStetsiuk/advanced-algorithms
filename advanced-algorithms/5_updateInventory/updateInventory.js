export function updateInventory(previousInventory, newInventory) {
	
	let arrayToObject = (arr) => arr.reduce((prev, [val, prop]) => ({...prev, [prop]: val}), {});
	
	const prevObjInventory = arrayToObject(previousInventory);
	const newObjInventory = arrayToObject(newInventory);
	
	let resultObj = {...prevObjInventory, ...newObjInventory};
	
	Object.keys(resultObj).forEach(prop => {
		if (prevObjInventory[prop] > 0 && newObjInventory[prop] > prevObjInventory[prop]) {
			resultObj[prop] = prevObjInventory[prop] + newObjInventory[prop];
		}
	});
	
	return Object.entries(resultObj).map(([a, b]) => [b, a]).sort(([, a], [, b]) => b < a);
	
}

