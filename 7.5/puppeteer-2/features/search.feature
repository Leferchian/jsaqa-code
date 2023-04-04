Feature: Search a course
    Scenario: Вooking one ticket
        Given user is on the start page
        When user select the first available time
        And user select the first not taken chair 
        And user push booking button
        Then user is on the payment page

    Scenario: Вooking one ticket on another day
        Given user is on the start page
        When user select the third following day
        And user select the second available time
        And user select the first not taken chair 
        And user push booking button
        Then user is on the payment page

    Scenario: Booking button isn't available
        Given user is on the start page
        When user select the first available time
        And user select the first taken chair 
        Then booking button is disabled