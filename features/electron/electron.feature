Feature: Electron Demo

  Scenario: open electron app
    When I click 'Open New Window Electron Button'
    And I switch to 'qavajs electron app new window' window
    And I click 'Close Current Window Electron Button'
    Then I expect current url to contain 'newWindow.html'