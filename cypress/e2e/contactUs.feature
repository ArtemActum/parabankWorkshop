Feature: ParabankWorkshop
  Scenario: Send the form to Customer Care
    Given I open Parabank website
    When I click on Contact Us button
    And I fill the contact form and send the form
    Then I verify that form was sent to customer care