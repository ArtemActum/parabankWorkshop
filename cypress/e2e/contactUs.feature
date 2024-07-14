Feature: ParabankWorkshop
  Scenario Outline: Send the form to Customer Care
    Given I open Parabank website
    When I click on Contact Us button
    And I fill the contact form with this "<name>", "<email>", "<phone>" and "<message>" and click on send the form
    Then I verify that form was sent to customer care

    Examples:
      | name    | email           | phone        | message                                  |                                           
      | Test    | test@test.com   |  123456      | Login functionality doesnt work properly |                           
      | QA      | qa@test.com     |  777777      | Login functionality is working           | 