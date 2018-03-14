const currencyMetaData = [
	{name: 'ONE HUNDRED', value: 100.00},
	{name: 'TWENTY', value: 20.00},
	{name: 'TEN', value: 10.00},
	{name: 'FIVE', value: 5.00},
	{name: 'ONE', value: 1.00},
	{name: 'QUARTER', value: 0.25},
	{name: 'DIME', value: 0.10},
	{name: 'NICKEL', value: 0.05},
	{name: 'PENNY', value: 0.01}
];

export function checkCashRegister(price, cash, cid) {
	
	let result = null;
	let rest = cash - price;
	let isTransactionalAlive = false;
	
	
	if (!isTransactionalAlive) {
		for (let i = 0, length = cid.length; i < length; i++) {
			
			const availableCurrency = cid[i][1];
			
			if ((availableCurrency - rest) === 0) {
				result = 'Closed';
				break;
			}
			else if (availableCurrency < rest && i === length - 1) {
				result = 'Insufficient Funds';
				break;
			}
		}
		isTransactionalAlive = true;
	}
	
	if (isTransactionalAlive && result !=='Insufficient Funds' && result !=='Closed') {
		const register = cid.reduce( (acc, curr) => {
			acc.total += curr[1];
			acc[curr[0]] = curr[1];
			return acc;
		}, {total: 0});
		
		
		result = currencyMetaData.reduce((acc, curr) =>{
			let value = 0;
			
			while (register[curr.name] > 0 && rest >= curr.value) {
				rest -= curr.value;
				register[curr.name] -= curr.value;
				value += curr.value;
				
				rest = Math.round(rest * 100) / 100;
			}
			
			if (value > 0) {
				acc.push([ curr.name, value ]);
			}
			return acc;
		}, []);
	}
	
	return result;
	
}
