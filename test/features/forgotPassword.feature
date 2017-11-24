Feature: Forgot Password

  Scenario: Retrieving passwords confirms email was sent 
    Given I have forgotten my password
    When I retrieve my password using email "example@example.com"
    Then I confirm an email was sent with my lost password