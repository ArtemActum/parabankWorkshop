export default class BasePage {
	// locators
	usernameInput() {
		return cy.get("input[name='username']")
	}

	passwordInput() {
		return cy.get("input[name='password']")
	}

	loginBtn() {
		return cy.get("input[value='Log In']")
	}

	//methods
	open() {
		cy.visit('https://parabank.parasoft.com/parabank/index.htm')
	}

	login(username, password) {
		this.usernameInput().type(username)
		this.passwordInput().type(password)
		this.loginBtn().click()
		cy.url().should('include', '/overview')
	}
}
