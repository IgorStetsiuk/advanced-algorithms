import { Person } from './makePersone';

let bob = new Person('Bob Ross');

describe('Suit make person object', () => {
	
	test('TEST_1 Object.keys(bob).length should return 6.\n', () => {
		expect(Object.keys(bob).length).toBe(6);
	});
	
	test('TEST_2 bob instanceof Person should return true.\n', () => {
		let isInstance = bob instanceof Person;
		expect(isInstance).toBeTruthy();
	});
	
	test('TEST_3 bob.firstName should return undefined.\n', () => {
		expect(bob.firstName).toBeUndefined();
	});
	
	test('TEST_4 bob.lastName should return undefined.\n', () => {
		expect(bob.lastName).toBeUndefined();
	});
	
	test('TEST_5 bob.getFirstName() should return "Bob".\n', () => {
		bob.setFirstName('Bob');
		expect(bob.getFirstName()).toBe('Bob');
	});
	
	test('TEST_6 bob.getLastName() should return "Ross".', () => {
		bob.setLastName('Ross');
		expect(bob.getLastName()).toBe('Ross');
	});
	
	test('TEST_7 bob.getFullName() should return "Bob Ross".\n', () => {
		expect(bob.getFullName()).toBe('Bob Ross');
	});
	
	test('TEST_8 bob.getFullName() should return "Haskell Ross" after bob.setFirstName("Haskell").\n', () => {
		bob.setFirstName("Haskell");
		expect(bob.getFullName()).toBe('Haskell Ross');
	});
	
	test('TEST_9 bob.getFullName() should return "Haskell Curry" after bob.setLastName("Curry").\n', () => {
		bob.setLastName("Curry");
		expect(bob.getFullName()).toBe('Haskell Curry');
	});
	
	test('TEST_10 bob.getFullName() should return "Haskell Curry" after bob.setFullName("Haskell Curry").\n', () => {
		bob.setFullName("Haskell Curry");
		expect(bob.getFullName()).toBe('Haskell Curry');
	});
	
	test('TEST_11 bob.getFirstName() should return "Haskell" after bob.setFullName("Haskell Curry").\n', () => {
		expect(bob.getFirstName()).toBe('Haskell');
	});
	
	test('TEST_12 bob.getLastName() should return "Curry" after bob.setFullName("Haskell Curry").\n', () => {
		bob.setFullName("Haskell Curry");
		expect(bob.getLastName()).toBe('Curry');
	});
	
});