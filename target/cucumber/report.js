$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri('org\example\datatable.feature');
formatter.feature({
  "line": 1,
  "name": "Login Feature File",
  "description": "",
  "id": "login-feature-file",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Login scenario test for Gmail",
  "description": "",
  "id": "login-feature-file;login-scenario-test-for-gmail",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 2,
      "name": "@selenium"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "navigate to Gmail page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user logged in using username as “username” and password as “password”",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "home page should be displayed",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "StepDefinitions.verifySuccessful()"
});
formatter.result({
  "status": "skipped"
});
});