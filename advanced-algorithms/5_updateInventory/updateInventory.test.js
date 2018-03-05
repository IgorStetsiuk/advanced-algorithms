import { updateInventory } from './updateInventory';


describe('updateInventory', () => {
	
	test('TEST_1 The function updateInventory should return an array.\n', () => {
		const result = updateInventory([], []);
		expect(Array.isArray(result)).toBeTruthy();
	});
	
	test('TEST_2 should return an array with a length of 6.', () => {
		const arr1 = [[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]];
		const arr2 = [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]];
		expect(updateInventory(arr1,arr2).length).toEqual(6);
	});

	test('TEST_3 should return array', () => {
		let arr1 = [[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]];
		let arr2 = [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]];
		let expectedResult =[[88, "Bowling Ball"], [2, "Dirty Sock"], [3, "Hair Pin"], [3, "Half-Eaten Apple"], [5, "Microphone"], [7, "Toothpaste"]];
		
		expect(updateInventory( arr1,arr2)).toEqual(expectedResult);
	});
	
	test('TEST_4 should return array', () => {
		const result = updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], []);
		expect(result).toEqual([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]]);
	});
	
	test('TEST_5 should return array', () => {
		const result = updateInventory([], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]);
		expect(result).toEqual([[67, "Bowling Ball"], [2, "Hair Pin"], [3, "Half-Eaten Apple"], [7, "Toothpaste"]]);
	});
	
	test('TEST_6 should return array', () => {
		const arr1 = [[0, "Bowling Ball"], [0, "Dirty Sock"], [0, "Hair Pin"], [0, "Microphone"]];
		const arr2 = [[1, "Hair Pin"], [1, "Half-Eaten Apple"], [1, "Bowling Ball"], [1, "Toothpaste"]];
		const expectedResult = [[1, "Bowling Ball"], [0, "Dirty Sock"], [1, "Hair Pin"], [1, "Half-Eaten Apple"], [0, "Microphone"], [1, "Toothpaste"]];

		expect(updateInventory(arr1,arr2 )).toEqual(expectedResult);
	});
})
