Feature: Property CMS

  As a staff
  I need to be able to manage properties on cms 
  @auth
  Scenario: Can filter property status successfully
    Given I am on the properties page
    When I filter the "<status>" properties
    Then I should view "<show data>" properties

    Examples:
      | status      | show data                                   |
      | All         | Published,New,Editing,Published,Unpublished |
      | New         | New                                         |
      | Editing     | Editing                                     |
      | Published   | Published                                   |
      | Unpublished | Unpublished                                 |

  @auth
  Scenario: Can filter booking type successfully
    Given I am on the properties page
    When I filter the "<booking type>"
    Then I should view "<booking type>"

    Examples:
      | booking type            |
      | Booking with Consultant |
      | Message Property        |
      | Integrated Bookings     |
      | Reserve Room            |

  @auth
  Scenario: Can filter landlord name successfully
    Given I am on the properties page
    When I input "Uniplaces" and filter
    Then I should view "Uniplaces" all properties
  @auth
  Scenario: Can create new property successfully
    Given I am on the properties page
    When I click create new property
    And I fill in all mandatory field and submit
    Then I could see a new property created

  @auth
  Scenario: Can search property Name successfully
    Given I am on the properties page
    When I search property Name
    Then I could see Property Homepage

  @auth
  Scenario: Can edit property name successfully
    Given I am on the properties page
    When I search property Name
    Then I go to Property Management page
    Then I edit property name and save

  @auth
  Scenario: Can choose Property Facility successfully
    Given I am on the properties page
    When I search property Name
    Then I go to Property Management page
    Then I choose PropertyFacility and save


  @auth
  Scenario: Can edit Property details successfully
    Given I am on the properties page
    When I search property Name
    Then I go to Property Management page
    Then I edit property details and save

  @auth
  Scenario: Can modify Property Booking Type when property status is new/Unpublished successfully
    Given I am on the properties page
    When I filter the "<status>" properties
    Then I go to "<status>" Property Page
    Then I go to Property Management page
    And I modify Property Booking Type

    Examples:
      | status      |
      | New         |
      | Unpublished |

  @auth
  Scenario: Can edit Property address successfully
    Given I am on the properties page
    When I search property Name
    Then I go to Property Management page
    Then I edit Property address and save

  @auth
  Scenario: Can create new room under property successfully
    Given I am on the properties page
    When I search property Name
    Then I go to Property Management page
    Then I go to room config page
    And I Add a room and save
    Then save success msg should be shown

  @auth
  Scenario: Can edit room detail successfully
    Given I am on the properties page
    When I search property Name
    Then I go to Property Management page
    Then I go to room config page
    And I edit a room name and save
    Then save success msg should be shown

  @auth
  Scenario: Can delete room successfully
    Given I am on the properties page
    When I search property Name
    Then I go to Property Management page
    Then I go to room config page
    And I delete a room
    Then save success msg should be shown

  @auth
  Scenario: Can create normal listing under room successfully(manual/Hercules/reverseroom)
    Given I am on the properties page
    When I search property Name
    Then I go to Property Management page
    Then I go to room config page
    And I Add a room and save
    Then I go to Price & Availability page
    And I add listings Move in is "<move in>" Tenancy length is "<Tenancy length>" Move out is "<Move out>" Turnaround is "<Turnaround>" under room
    Then save success msg should be shown

    Examples:
      | move in       | Tenancy length | Move out      | Turnaround  |
      | After         | >              | Anytime       | Fixed days  |
      | Anytime       | Not specific   | Before        | Fixed days  |
      | Exactly match | =              | Exactly match | Not applied |

  @auth
  Scenario: Can modify listing required params successfully
    Given I am on the properties page
    When I search property Name
    Then I go to Property Management page
    Then I go to Price & Availability page
    And I update price min value
    Then save success msg should be shown

  @auth
  Scenario: Can copy listing and create successfully
    Given I am on the properties page
    When I search property Name
    Then I go to Property Management page
    Then I go to Price & Availability page
    And I copy to current room
    Then save success msg should be shown

  @auth
  Scenario: Can delete listing successfully
    Given I am on the properties page
    When I search property Name
    Then I go to Property Management page
    Then I go to Price & Availability page
    And I delete a listing
    Then save success msg should be shown

  @auth
  Scenario: Can create commission successfully
    Given I am on the properties page
    When I search property Name
    Then I go to Commission Management page
    And I go to set Commission
    And I fill in all mandatory field and save
    Then save success msg should be shown