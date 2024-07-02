import BasePage from './basePage'

export default class RegisterPage extends BasePage {
	// locators
	registerBtn() {
		return cy.get('#loginPanel > :nth-child(3) > a')
	}

	firstNameInput() {
		return cy.get("input[id='customer.firstName']")
	}

	lastNameInput() {
		return cy.get("input[id='customer.lastName']")
	}

	streetInput() {
		return cy.get("input[id='customer.address.street']")
	}

	cityInput() {
		return cy.get("input[id='customer.address.city']")
	}

	stateInput() {
		return cy.get("input[id='customer.address.state']")
	}

	zipCodeInput() {
		return cy.get("input[id='customer.address.zipCode']")
	}

	phoneNunberInput() {
		return cy.get("input[id='customer.phoneNumber']")
	}

	ssnInput() {
		return cy.get("input[id='customer.ssn']")
	}

	usernameInput() {
		return cy.get("input[id='customer.username']")
	}

	passwordInput() {
		return cy.get("input[id='customer.password']")
	}

	repeatedPasswordInput() {
		return cy.get("input[id='repeatedPassword']")
	}

	registrationBtn() {
		return cy.get("input[value='Register']")
	}

	//methods
	register(email, password) {
		this.registerBtn().click()
		this.firstNameInput().type('Name')
		this.lastNameInput().type('Lastname')
		this.streetInput().type('address')
		this.cityInput().type('city')
		this.stateInput().type('state')
		this.zipCodeInput().type('ZipCode')
		this.phoneNunberInput().type('1111')
		this.ssnInput().type('1111')
		this.usernameInput().type(email)
		this.passwordInput().type(password)
		this.repeatedPasswordInput().type(password)
		this.registrationBtn().click()
	}
}
