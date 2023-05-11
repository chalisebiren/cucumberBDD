Feature: Login Feature File
  @selenium
  Scenario: Login scenario test for SauceLab

  Given user navigates to login page by opening Chrome
  When user enters correct <username> AND <password> values
  Then user is directed to the homepage
