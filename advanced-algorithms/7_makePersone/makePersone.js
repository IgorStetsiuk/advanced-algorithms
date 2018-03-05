export class Person {
	constructor(fullName = '') {
		let [firstName, lastName] = fullName.split(' ');
		this.private = {firstName, lastName};

		let object = Object.create(this);

		let publicMethods = {
			getFullName: this.getFullName,
			getFirstName: this.getFirstName,
			getLastName: this.getLastName,
			setFirstName: this.setFirstName,
			setLastName: this.setLastName,
			setFullName: this.setFullName
		};

		return Object.assign(object, publicMethods);
	}


	getFullName() {
		const {firstName, lastName} = this.private;
		return `${firstName} ${lastName}`;
	}

	getFirstName() {
		return this.private.firstName;
	}

	getLastName() {
		return this.private.lastName;
	}


	setFirstName(first) {
		this.private.firstName = first;
	}

	setLastName(last) {
		this.private.lastName = last
	}

	setFullName(firstAndLast) {
		let [firstName, lastName] = firstAndLast.split(' ');
		this.private = {firstName, lastName};
	}
}

