Feature: Web Demo

  Scenario: Verify that user is able to login
    Given I open '$app' url
    When I type 'standard_user' to 'Username Input'
    And I type 'secret_sauce' to 'Password Input'
    And I click 'Login Button'
    And I expect text of 'App Logo' to equal 'Swag Labs'