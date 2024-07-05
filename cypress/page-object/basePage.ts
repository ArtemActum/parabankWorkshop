export default class BasePage {
	// locators
	usernameInput(): Cypress.Chainable<JQuery<HTMLInputElement>> {
		return cy.get("input[name='username']")
	}

	passwordInput(): Cypress.Chainable<JQuery<HTMLInputElement>> {
		return cy.get("input[name='password']")
	}

	loginBtn(): Cypress.Chainable<JQuery<HTMLElement>> {
		return cy.get("input[value='Log In']")
	}

	//methods
	open(): void {
		cy.visit('https://parabank.parasoft.com/parabank/index.htm')
	}

	login(username: string, password: string): void {
		this.usernameInput().type(username)
		this.passwordInput().type(password)
		this.loginBtn().click()
	}

	checkUrlAfterLogin(): void {
		cy.url().should('include', '/overview')
	}
}
