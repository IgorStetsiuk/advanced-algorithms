import { orbitalPeriod } from './orbitalPeriod';

const TEST_1_DATA = [{name: "sputnik", avgAlt: 35873.5553}];

const TEST_2_DATA =
	[
		{name: "iss", avgAlt: 413.6},
		{name: "hubble", avgAlt: 556.7},
		{name: "moon", avgAlt: 378632.553}
	];

describe('Suit calculate  orbital period', () => {
	
	test('TEST_1 should return [{name: "sputnik", orbitalPeriod: 86400}].\n', () => {
		
		expect(orbitalPeriod(TEST_1_DATA))
			.toEqual([{name: "sputnik", orbitalPeriod: 86400}]);
	});
	
	test('TEST_2 should return [{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}].', () => {
		
		expect(orbitalPeriod(TEST_2_DATA))
			.toEqual(
				[
					{name: "iss", orbitalPeriod: 5557},
					{name: "hubble", orbitalPeriod: 5734},
					{name: "moon", orbitalPeriod: 2377399}
				]
			)
		
	});
	
});