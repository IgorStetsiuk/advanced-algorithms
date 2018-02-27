import {telephoneCheck} from "./telephoneCheck";

describe('suit isBoolean', () => {
	
	test('telephoneCheck("555-555-5555") should return a boolean.\n', () => {
		expect(typeof telephoneCheck("555-555-5555")).toBe('boolean');
	});
	
});