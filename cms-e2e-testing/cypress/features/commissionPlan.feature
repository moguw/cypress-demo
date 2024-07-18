Feature: Commission Plan CMS

  As a staff
  I can to manage all commission plans to partners

@auth
Scenario: Can set commission default plan successfully
    Given I am on the commission plan page
    When I open a commission plan which is not default
    And set commission plan as default
    Then save success msg should be shown

# @auth
# Scenario: Can create commission plan successfully
#     Given I am on the commission plan page
#     When I click to add commission plan
#     And fill in required information
#     Then save success msg should be shown

@auth
Scenario: Can edit commission plan successfully
    Given I am on the commission plan page
    When I click to edit commission plan
    And edit commission plan name
    Then save success msg should be shown

