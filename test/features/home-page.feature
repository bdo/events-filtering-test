Feature: As a customer I should be able to see the homepage

  Scenario: Customer sees title
    Given I go to the home page
    Then I should see 'Events filtering demo'