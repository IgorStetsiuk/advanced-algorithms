import {countPermutations} from './countPermutations';

describe('countPermutations', () => {
	
	test('TEST_1 countPermutations("aab") should return a number.\n', () => {
		const result = typeof countPermutations("aab");
		expect(result).toEqual('number');
	});
	
	test('TEST_2 countPermutations("aab") should return 2.\n', () => {
		expect(countPermutations("aab")).toBe(2);
	});
	
	test('TEST_3 countPermutations("aaa") should return 0.\n', () => {
		expect(countPermutations("aaa")).toBe(0);
	});
	
	test('TEST_4 countPermutations("aabb") should return 8.\n', () => {
		expect(countPermutations("aabb")).toBe(8);
	});
	
	test('TEST_5 countPermutations("abcdefa") should return 3600.', () => {
		expect(countPermutations("abcdefa") ).toBe(3600);
	});
	
	test('TEST_6 countPermutations("abfdefa") should return 2640.\n', () => {
		expect(countPermutations("abfdefa") ).toBe(2640);
	});
	
	test('TEST_7 countPermutations("zzzzzzzz") should return 0.\n', () => {
		expect(countPermutations("zzzzzzzz")).toBe(0);
	});
	
	test('TEST_8 countPermutations("a") should return 1.\n', () => {
		expect(countPermutations("a")).toBe(1);
		
	});
	
	test('TEST_9 countPermutations("aaab") should return 0.\n', () => {
		expect(countPermutations("aaab")).toBe(0);
	});
	
	test('TEST_10 countPermutations("aaabb") should return 12.\n', () => {
		expect(countPermutations("aaabb")).toBe(12);
	});
	
	
	
});