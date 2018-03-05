export function sym(args) {
	const items = [...arguments];
	
	const withoutDuplicates = items.map(item => {
		return item.reduce((result, next) => {
			if (!result.includes(next)) result.push(next);
			return result
		}, []);
	});
	
	
	return withoutDuplicates.reduce((prev, next) => {
		
		const firstDiff = prev.filter((el) => !next.includes(el));
		const secondDiff = next.filter(el => !prev.includes(el));
		
		return firstDiff.concat(secondDiff).sort();
	});
	
}
