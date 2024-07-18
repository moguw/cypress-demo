Feature: Login CMS

  As a staff
  I need to be able to log in cms

  Scenario: Can log into cms successfully
    Given I am on the cms login page
    When I login with the "admin" account
    Then I should be on the "properties" page

  Scenario: Can log into multi-role accounts successfully
    Given I am on the cms login page
    When I login with the "multi-role" account
    And choose "<role>" role and confirm
    Then I should be on the "<show page>" page
  
  Examples:
      | role | show page|
      | Admin | properties |
      | Finance | billing |
