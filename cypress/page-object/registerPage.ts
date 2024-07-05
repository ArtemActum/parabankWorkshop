import BasePage from './basePage'

export default class RegisterPage extends BasePage {
    // locators
    registerBtn(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('#loginPanel > :nth-child(3) > a')
    }

    firstNameInput(): Cypress.Chainable<JQuery<HTMLInputElement>> {
        return cy.get("input[id='customer.firstName']")
    }

    lastNameInput(): Cypress.Chainable<JQuery<HTMLInputElement>> {
        return cy.get("input[id='customer.lastName']")
    }

    streetInput(): Cypress.Chainable<JQuery<HTMLInputElement>> {
        return cy.get("input[id='customer.address.street']")
    }

    cityInput(): Cypress.Chainable<JQuery<HTMLInputElement>> {
        return cy.get("input[id='customer.address.city']")
    }

    stateInput(): Cypress.Chainable<JQuery<HTMLInputElement>> {
        return cy.get("input[id='customer.address.state']")
    }

    zipCodeInput(): Cypress.Chainable<JQuery<HTMLInputElement>> {
        return cy.get("input[id='customer.address.zipCode']")
    }

    phoneNumberInput(): Cypress.Chainable<JQuery<HTMLInputElement>> {
        return cy.get("input[id='customer.phoneNumber']")
    }

    ssnInput(): Cypress.Chainable<JQuery<HTMLInputElement>> {
        return cy.get("input[id='customer.ssn']")
    }

    usernameInput(): Cypress.Chainable<JQuery<HTMLInputElement>> {
        return cy.get("input[id='customer.username']")
    }

    passwordInput(): Cypress.Chainable<JQuery<HTMLInputElement>> {
        return cy.get("input[id='customer.password']")
    }

    repeatedPasswordInput(): Cypress.Chainable<JQuery<HTMLInputElement>> {
        return cy.get("input[id='repeatedPassword']")
    }

    registrationBtn(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get("input[value='Register']")
    }

    // methods
    register(email: string, password: string): void {
        this.registerBtn().click()
        this.firstNameInput().type('Name')
        this.lastNameInput().type('Lastname')
        this.streetInput().type('address')
        this.cityInput().type('city')
        this.stateInput().type('state')
        this.zipCodeInput().type('ZipCode')
        this.phoneNumberInput().type('1111')
        this.ssnInput().type('1111')
        this.usernameInput().type(email)
        this.passwordInput().type(password)
        this.repeatedPasswordInput().type(password)
        this.registrationBtn().click()
    }
}