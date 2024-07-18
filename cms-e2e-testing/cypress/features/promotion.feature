Feature: Promotion CMS

  As a staff
  I can to manage all promotions to partners

@auth
Scenario: Can show promotion details successfully
    Given I am on the promotion page
    When I click to view a promotion
    Then promotion details modal should be shown

@auth
Scenario: Can create promotion successfully
    Given I am on the promotion page
    When I click to add promotion
    And fill in required information
    Then save success msg should be shown

@auth
Scenario:Can edit promotion successfully
    Given I am on the promotion page
    When I click to edit promotion
    And edit promotion name
    Then save success msg should be shown