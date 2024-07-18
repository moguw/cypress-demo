Feature: Payout Plan CMS

    As a BD Admin
    I need to be able to manage payout plans

    @auth
    Scenario: Can create payout plan successfully
        Given I am on the payout-plan page
        When I clike the add payout plan button
        And I filled in all the required fields and save 
        Then A payment plan is created successfully

    @auth
    Scenario: Can edit payment plan successfully
        Given I am on the payout-plan page
        When I clike the edit payout plan button
        And I filled in all the required fields and save 
        Then The editing info should be displayed
