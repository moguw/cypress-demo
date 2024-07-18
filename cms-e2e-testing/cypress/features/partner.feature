Feature: Partner CMS

  As a BD Admin or BD
  I can to manage partners successfully

@auth
Scenario: Can filter partner name successfully
    Given I am on the partner page
    When I filter the "Amber" partner
    Then I should view "Amber" partner

@auth
Scenario: Can filter partner phone successfully
    Given I am on the partner page
    When I filter the "+86 177 4088 5706" phone
    Then I should view "+86 17740885706" phone

@auth
Scenario:Can successfully modify partner commission plan
    Given I am on the partner page
    When  I click to specific partner info
    And I change partner commission
    Then I can successfully modify partner commission plan

@auth
Scenario:Can click View to display the partner details normally
    Given I am on the partner page
    When  I click to view first partner info
    Then I can see the partner details normally
