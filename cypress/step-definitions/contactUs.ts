import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import BasePage from '../page-object/basePage'
import ContactPage from '../page-object/contactPage'

const basePage = new BasePage()
const contactPage = new ContactPage()

When('I click on Contact Us button', () => {
	basePage.clickOnContactUsBtn()
})

When('I fill the contact form with this {string}, {string}, {string} and {string} and click on send the form', (
	name?: string,
	email?: string,
	phone?: string,
	message?: string,) => {
	contactPage.fillTheContactForm(
		name,
		email,
		phone,
		message
	)
})

Then('I verify that form was sent to customer care', () => {
	contactPage.checkSentFormToCustomerCare()
})
