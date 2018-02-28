let collection = {
	"2548": {
		"album": "Slippery When Wet",
		"artist": "Bon Jovi",
		"tracks": [
			"Let It Rock",
			"You Give Love a Bad Name"
		]
	},
	"2468": {
		"album": "1999",
		"artist": "Prince",
		"tracks": [
			"1999",
			"Little Red Corvette"
		]
	},
	"1245": {
		"artist": "Robert Palmer",
		"tracks": []
	},
	"5439": {
		"album": "ABBA Gold"
	}
};


// Only change code below this line
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





