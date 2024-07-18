Feature: Account Center CMS

  As a staff
  I can to create/modify internal/landlord account

# @auth
# Scenario: Can create new cms account successfully
#   Given I am on the account center page
#   When create internal account and submit
#   Then can see account been successfully created
  
# @auth
# Scenario:Can create new landlord management successfully
#   Given I am on the account center page
#   When Choose Landlord management tab
#   And create landlord account and submit
#   Then can see landlord account been successfully created

@auth
  Scenario:Can modify account Details successfully
    Given I am on the account center page
    When modify internal account details and submit
    Then can see account been successfully updated

@auth
  Scenario:Can modify landlord management detail successfully
    Given I am on the account center page
    When Choose Landlord management tab
    When modify landlord account details and submit
    Then can see account been successfully updated

@auth
  Scenario:Can change account user role successfully
    Given I am on the account center page
    When modify internal account role and submit
    Then can see account been successfully updated
