Feature: My Profile CMS

  As a staff
  I can to Can reset new password and switch role successfully
@auth
Scenario:Can reset new password successfully
    Given I am on the my profile page
    When Click modfiy password button
    And Input new password and submit
    Then Can see update successfully pop-up

#@authrole
#Scenario:Can switch role successfully
    #Given I am on the my profile page
    #When Click switch role button
    #And Select "<role>" role
    #Then Can see switch successfully "<show message>" pop-up

    #Examples:
      #| role | show message|
      #| Supply | User role switched to Supply |
      #| Finance | User role switched to Financial |
