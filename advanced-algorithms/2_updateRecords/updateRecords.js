import collection from './collection';

export function updateRecords(id, prop, value) {
	const record = collection[id];
	
	if (prop === "tracks") {
		!record[prop] ? record[prop] = [value] : value && record[prop].push(value);
	} else if (value) {
		record[prop] = value;
	} else {
		(prop !== 'artist') && delete record[prop];
	}
	
	return collection;
}





