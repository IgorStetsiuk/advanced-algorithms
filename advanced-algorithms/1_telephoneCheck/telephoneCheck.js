export  function telephoneCheck(str) {
	return !!str.match(/^(\(\d{3}\)\s?|(1?\s?\d{3}-?\s?|1\s?\(\d{3}\)\s?))\d{3}[\s-]?\d{4}$/g);
	
}


