Feature: Landlord CMS


    @auth
    Scenario: Can filter pending landlord successfully
        Given I am on the landlord page
        When I filter "Pending" landlord
        Then I should view Update button

    @auth
    Scenario: Can filter all landlord successfully
        Given I am on the landlord page
        When I filter "All" landlord
        Then I should view business opportunity