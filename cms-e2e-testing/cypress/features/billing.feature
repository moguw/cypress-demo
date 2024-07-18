Feature: billing CMS

  As a staff
  I can to manage all billing records

@auth
Scenario: Can filter billing status successfully
    Given I am on the billing page
    When I click the "<management>" button
    Then The status of all records is "<billing status>"

    Examples:
        | management          | billing status      |
        | Pending transfer    | Pending Transfer    |
        | Ready to invoice    | Pending Invoice     |
        | Invoiced            | Invoiced            |
        | Pending refund      | Pending refund      |
        | Refund confirmation | Refund confirmation |

@auth
Scenario: Can filter booking journey successfully
    Given I am on the billing page
    When I click Transfer Management button
    Then "<Transfer Type>" records are from "<booking journey>"

    Examples:
        | booking journey  | Transfer Type |
        | Message Property | HT            |
        | Reserve Room     | IT            |


@auth
Scenario: Can filter transfer by landlord name successfully
    Given I am on the billing page
    When I click the Receivable Management button
    Then I can filter out by landlord name

@auth
Scenario: Can filter transfer by property name successfully
    Given I am on the billing page
    When I click the Refund Management button
    Then I can filter out by property name