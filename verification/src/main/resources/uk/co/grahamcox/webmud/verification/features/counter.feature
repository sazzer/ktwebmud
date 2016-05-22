@wip
Feature: Example Redux Counter

  Scenario: The counter starts at 0
    Given I load the home page
    Then the counter has a value of 0

  Scenario: Incrementing the counter works
    Given I load the home page
    When I increment the counter
    Then the counter has a value of 1

  Scenario: Decrementing the counter works
    Given I load the home page
    When I decrement the counter
    Then the counter has a value of -1

  Scenario: Incrementing and decrementing the counter works
    Given I load the home page
    When I increment the counter
    And I decrement the counter
    Then the counter has a value of 0
