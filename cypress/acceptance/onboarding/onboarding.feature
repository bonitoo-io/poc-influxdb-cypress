Feature: Onboard to Influxdbv2
  Create an initial user and organization

  Scenario: Onboard Basic

    Given I open the Influx onboarding page
    Then there is a Welcome message
    Then there is a link to corporate
    When I click on Get Started
    Then the Initial Setup Page is loaded







