import { checkCashRegister } from "./checkCashRegister";

const TEST_1_CID = [
	["PENNY", 1.01],
	["NICKEL", 2.05],
	["DIME", 3.10],
	["QUARTER", 4.25],
	["ONE", 90.00],
	["FIVE", 55.00],
	["TEN", 20.00],
	["TWENTY", 60.00],
	["ONE HUNDRED", 100.00]
];

const TEST_2_CID = [
	["PENNY", 0.01],
	["NICKEL", 0],
	["DIME", 0],
	["QUARTER", 0],
	["ONE", 0],
	["FIVE", 0],
	["TEN", 0],
	["TWENTY", 0],
	["ONE HUNDRED", 0]
];

const TEST_3_CID = [
	["PENNY", 0.50],
	["NICKEL", 0],
	["DIME", 0],
	["QUARTER", 0],
	["ONE", 0],
	["FIVE", 0],
	["TEN", 0],
	["TWENTY", 0],
	["ONE HUNDRED", 0]
];

const TEST_4_CID = TEST_1_CID;

const TEST_5_CID = TEST_1_CID;

const TEST_7_CID = [
	["PENNY", 0.01],
	["NICKEL", 0],
	["DIME", 0],
	["QUARTER", 0],
	["ONE", 1.00],
	["FIVE", 0],
	["TEN", 0],
	["TWENTY", 0],
	["ONE HUNDRED", 0]
];

const TEST_6_CID = TEST_2_CID;

const TEST_8_CID = [
	["PENNY", 0.50],
	["NICKEL", 0],
	["DIME", 0],
	["QUARTER", 0],
	["ONE", 0],
	["FIVE", 0],
	["TEN", 0],
	["TWENTY", 0],
	["ONE HUNDRED", 0]
];

describe('Suits for check cash register', () => {
	
	test(`TEST_1 checkCashRegister(19.50, 20.00, ${TEST_1_CID}) should return an array.\n`, () => {
		const result = checkCashRegister(19.50, 20.00, TEST_1_CID);
		expect(Array.isArray(result)).toBeTruthy();
		
	});
	
	test(`TEST_2 checkCashRegister(19.50, 20.00, ${TEST_2_CID}) should return a string.`, () => {
		const result = checkCashRegister(19.50, 20.00, TEST_2_CID);
		expect(typeof result).toBe('string');
	});
	
	test(`TEST_3 checkCashRegister(19.50, 20.00,${TEST_3_CID} ) should return a string.`, () => {
		const result = checkCashRegister(19.50, 20.00, TEST_3_CID);
		expect(typeof result).toBe('string');
	});
	
	test(`TEST_4 checkCashRegister(19.50, 20.00,${[TEST_4_CID]} ) should return [["QUARTER", 0.50]].`, () => {
		expect(checkCashRegister(19.50, 20.00, TEST_4_CID)).toEqual([["QUARTER", 0.50]]);
	});
	
	test(`TEST_5 checkCashRegister(3.26,, 100.00,${[TEST_5_CID]} ) [["TWENTY", 60.00], ["TEN", 20.00], ["FIVE", 15.00], ["ONE", 1.00], ["QUARTER", 0.50], ["DIME", 0.20], ["PENNY", 0.04]].`, () => {
		expect(checkCashRegister(3.26, 100.00, TEST_5_CID)).toEqual([["TWENTY", 60.00], ["TEN", 20.00], ["FIVE", 15.00], ["ONE", 1.00], ["QUARTER", 0.50], ["DIME", 0.20], ["PENNY", 0.04]]);
	});
	
	test(`TEST_6 checkCashRegister(19.50, 20.00,${TEST_6_CID} ) should return "Insufficient Funds".`, () => {
		expect(checkCashRegister(19.50, 20.00, TEST_6_CID)).toBe('Insufficient Funds');
	});
	
	test(`TEST_7 checkCashRegister(19.50, 20.00,${TEST_7_CID} ) should return "Insufficient Funds".`, () => {
		expect(checkCashRegister(19.50, 20.00, TEST_7_CID)).toBe('Insufficient Funds');
	});
	
	
	test(`TEST_8 checkCashRegister(19.50, 20.00,${TEST_8_CID} )should return "Closed".`, () => {
		
		expect(checkCashRegister(19.50, 20.00, TEST_8_CID)).toBe('Closed');
	});
	
	
});