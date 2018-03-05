import { sym } from "./symmetricDifference";

describe('Suits for symmetric difference', () => {
	
	test(' TEST_1 sym([1, 2, 3], [5, 2, 1, 4]) should return [3, 4, 5].\n', () => {
		expect(sym([1, 2, 3], [5, 2, 1, 4])).toEqual([3, 4, 5]);
	});
	
	test(' TEST_2 sym([1, 2, 3], [5, 2, 1, 4]) should contain only three elements.\n should contain only three elements.\n', () => {
		expect(sym([1, 2, 3], [5, 2, 1, 4]).length).toBe(3);
	});
	
	
	test(' TEST_3 sym([1, 2, 5], [2, 3, 5], [3, 4, 5])should return [1, 4, 5]', () => {
		expect(sym([1, 2, 5], [2, 3, 5], [3, 4, 5])).toEqual([1, 4, 5]);
	});
	
	test(' TEST_4 sym([1, 2, 5], [2, 3, 5], [3, 4, 5])should contain only three elements.\n', () => {
		expect(sym([1, 2, 5], [2, 3, 5], [3, 4, 5]).length).toBe(3);
	});

	
	test(' TEST_5 sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]) should return [1, 4, 5]', () => {
		expect(sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5])).toEqual([1, 4, 5]);
	});
	
	test(' TEST_6 sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]) should contain only three elements.\n', () => {
		expect(sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]).length).toBe(3);
	});
	
	
	test(' TEST_7 sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]) should return [2, 3, 4, 6, 7].\n', () => {
		expect(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3])).toEqual([2, 3, 4, 6, 7]);
	});
	
	test(' TEST_8 sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]) should contain only five elements.\n', () => {
		expect(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]).length).toBe(5);
	});
	
	test(' TEST_9 sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1])should return [1, 2, 4, 5, 6, 7, 8, 9].\n', () => {
		expect(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8])).toEqual([2, 4, 5, 6, 7, 8, 9]);
	});
	
	test(' TEST_10 sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1])should contain only eight elements.\n', () => {
		expect(sym(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1])).length).toBe(8);
	});
});