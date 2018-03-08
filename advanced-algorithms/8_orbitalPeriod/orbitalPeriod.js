const GM = 398600.4418;
const EARTH_RADIUS = 6367.4447;


export function orbitalPeriod(arr) {
	
	return arr.map(({name, avgAlt}) => {
		return {
			name,
			orbitalPeriod: Math.round(2 * Math.PI * Math.sqrt(Math.pow(avgAlt + EARTH_RADIUS, 3) / GM))
		}
	});
}
