Feature: Expenses
    As a user
    I can manage expenses
    So that I can track my expenses

    Background: Home Page
        Given I am on the home page

    Scenario: Add expense
        When I tap plus button
        Then I insert title
        Then I insert amount
        Then I pick a date
        Then I tap add transaction button
        Then my expense is added

    Scenario: Add Expense with Empty Fields
        When I tap plus button
        Then I still in the expense form

    Scenario: Delete expense
        When I tap plus button
        Then I insert title
        Then I insert amount
        Then I pick a date
        Then I tap add transaction button
        Then my expense is added
        Then I tap delete expense button
        Then Empty transaction message is displayed