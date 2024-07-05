import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import BasePage from '../page-object/basePage'
import ContactPage from '../page-object/contactPage'

const basePage = new BasePage()
const contactPage = new ContactPage()

When("I click on Contact Us button", () => {
    basePage.clickOnContactUsBtn()
});

When("I fill the contact form and send the form", () => {
    contactPage.fillTheContactForm('Name', 'parabank-1@yopmail.com', '1234567', 'Login functionality doesnt work properly')
});

Then("I verify that form was sent to customer care", () => {
    contactPage.checkSentFormToCustomerCare()
});