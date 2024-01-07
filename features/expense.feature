Feature: Expenses
    As a user
    I can manage expenses
    So that I can track my expenses

    Scenario: Add expense
        Given I am on the home page
        When I tap plus button
        Then I insert title
        Then I insert amount
        Then I pick a date
        Then I tap add transaction button
        Then my expense is added