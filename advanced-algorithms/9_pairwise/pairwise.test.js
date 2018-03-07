import { pairwise } from './pairwise';


describe('Suit make person object', () => {
	
	test('TEST_1 pairwise([1, 4, 2, 3, 0, 5], 7) should return 11.\n', () => {
		expect(pairwise([1, 4, 2, 3, 0, 5], 7)).toBe(11);
	});
	
	test('TEST_2 pairwise([1, 3, 2, 4], 4) should return 1.', () => {
		expect(pairwise([1, 3, 2, 4], 4)).toBe(1);
	});
	
	test('TEST_3 pairwise([1, 1, 1], 2) should return 1.', () => {
		expect(pairwise([1, 1, 1], 2)).toBe(1);
	});
	
	test('TEST_4 pairwise([0, 0, 0, 0, 1, 1], 1) should return 10.', () => {
		expect(pairwise([0, 0, 0, 0, 1, 1], 1)).toBe(10);
	});
	
	test('TEST_5 pairwise([], 100) should return 0.', () => {
		expect(pairwise([], 100)).toBe(0);
	});
	
	
	
	
});