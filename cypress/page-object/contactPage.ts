import BasePage from './basePage'

export default class ContactPage extends BasePage {
    // locators
    nameInput(): Cypress.Chainable<JQuery<HTMLInputElement>> {
        return cy.get("input[id='name']")
    }

    emailInput(): Cypress.Chainable<JQuery<HTMLInputElement>> {
        return cy.get("input[id='email']")
    }

    phoneInput(): Cypress.Chainable<JQuery<HTMLInputElement>> {
        return cy.get("input[id='phone']")
    }

    messageInput(): Cypress.Chainable<JQuery<HTMLInputElement>> {
        return cy.get("textarea[id='message']")
    }

    sendBtn(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get("input[value='Send to Customer Care']")
    }

    textSection(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get("#rightPanel > :nth-child(3)")
    }

    // methods
    verifyContactUrl(): void {
		cy.url().should('include', '/contact.htm')
	}

    fillTheContactForm(name: string, email: string, phone: string, Message: string): void {
		this.nameInput().type(name)
		this.emailInput().type(email)
		this.phoneInput().type(phone)
        this.messageInput().type(Message)
        this.sendBtn().click()
	}

    checkSentFormToCustomerCare(): void {
        this.textSection().should("have.text", 'A Customer Care Representative will be contacting you.')
	}

}