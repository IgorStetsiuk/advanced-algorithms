  export function telephoneCheck(str) {
	// console.log(str.match(/^[1\s(]?\d{3}[-\s)]?\d{3}[-\s?]\d{4{10,}$/g));
	// return !!str.match(/^([1\s(]?\d{3}[-\s)]?\d{3}[-\s?]\d{4})$/g);
     // 555-555-5555
     // (555)555-5555
     // (555) 555-5555
     // 555 555 5555
     // 5555555555
     // 1 555 555 5555
	 console.log(str.match(/[1\s(]?\d{3}[)\s]?\d{3}[\s-]?\d{4}/g));
     return !!str.match(/[1\s]?\(?\d{3}[)\s-]?\s?\d{3}[\s-]?\d{4}/g);
 }

console.log(telephoneCheck("555-555-5555"));
console.log(telephoneCheck("1 555-555-5555"));
console.log(telephoneCheck("(555)555-5555"));
console.log(telephoneCheck("5555555555"));
console.log(telephoneCheck("1(555)555-5555"));
console.log(telephoneCheck("1 (555) 555-5555"));