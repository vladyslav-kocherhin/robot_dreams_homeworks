Feature: Work.ua - Should verify all elements in header

  Scenario: Visibility of all header elements
    Given I open home page Work.ua
    Then All header elements should be visible
    
  Scenario: Should verify search functionality
    When I search for "QA" job
    Then I should see search results