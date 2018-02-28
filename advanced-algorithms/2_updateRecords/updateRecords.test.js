import { updateRecords } from "./updateRecords";
import originCollection from './collection';

let collectionCopy = JSON.parse(JSON.stringify(originCollection));

describe('Suits for updateRecord function', () => {
	
	test('After updateRecords(5439, "artist", "ABBA"), artist should be "ABBA"\n', () => {
		const updateCollection = updateRecords(5439, "artist", "ABBA");
		const value = updateCollection['5439'].artist;
		
		expect(value).toMatch('ABBA');
	});
	
	test('After updateRecords(5439, "tracks", "Take a Chance on Me"), tracks should have "Take a Chance on Me" as the last element.', () => {
		const updateCollection = updateRecords(5439, "tracks", "Take a Chance on Me");
		const value = updateCollection['5439'].tracks.pop();
		
		expect(value).toMatch('Take a Chance on Me');
	});
	test('After updateRecords(1245, "tracks", "Addicted to Love"), tracks should have "Addicted to Love" as the last element.\n', () => {
		const updateCollection = updateRecords(1245, "tracks", "Addicted to Love");
		const value = updateCollection['1245'].tracks.pop();
		
		expect(value).toMatch('Addicted to Love');
	});
	
	test('After updateRecords(2468, "tracks", "Free"), tracks should have "1999" as the first element.\n', () => {
		const updateCollection = updateRecords(2468, "tracks", "Free");
		const existingValue = collectionCopy[2468].tracks.shift();
		const value = updateCollection['2468'].tracks.shift();
		expect(existingValue).toMatch(value);
	});
	
	test('After updateRecords(2548, "artist", ""), artist should not be set\n', () => {
		const updateCollection = updateRecords(2548, "artist", "");
		const updatedValue = updateCollection[2548].artist;
		const existingValue = collectionCopy[2548].artist;
		
		expect(existingValue).toMatch(updatedValue);
	});
	
	test('After updateRecords(2548, "tracks", ""), tracks should not be set\n', () => {
		const updateCollection = updateRecords(2548, "tracks", "");
		const updatedValue = updateCollection[2548].tracks;
		const existingValue = collectionCopy[2548].tracks;
		
		expect(existingValue).toEqual(updatedValue);
	});
	
	
});