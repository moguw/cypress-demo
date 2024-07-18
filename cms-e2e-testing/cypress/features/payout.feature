Feature: Payout CMS

  As a staff
  I can to manage all payouts to partners

@auth
Scenario: Can switch to "Settlement History" successfully
        Given I am on the payout page
        When I go to the "Settlement History" tab
        Then Status of all list items are settled

@auth
Scenario: Can approve pending payout successfully
        Given I am on the payout page
        When I go to the "Pending Approval" tab
        And Approve one of the pending payouts 
        Then An "approval" success msg should be shown

@auth
Scenario: Can change approved payout to pending
        Given I am on the payout page
        When I remove pending payout from settlement list 
        Then An "remove" success msg should be shown

