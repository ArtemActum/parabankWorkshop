import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import BasePage from '../page-object/basePage'

const basePage = new BasePage()

Given("I open Parabank website", () => {
    basePage.open()
  });

When("I enter login and password to inputs", () => {
    basePage.login('parabank-1@yopmail.com', 'Test1234')
});

Then("I should see correct URL", () => {
    basePage.checkUrlAfterLogin()
});