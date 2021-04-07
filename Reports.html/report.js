$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Cucumber.feature");
formatter.feature({
  "line": 1,
  "name": "Login functionality for Adactin Application",
  "description": "",
  "id": "login-functionality-for-adactin-application",
  "keyword": "Feature"
});
formatter.before({
  "duration": 381200,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User launch application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enter \"GanishkaSri\" as username",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User enter \"Ganishka04\" as password",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User verify valid username and valid password",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_launch_application()"
});
formatter.result({
  "duration": 8444271100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "GanishkaSri",
      "offset": 12
    }
  ],
  "location": "LoginStepDefinition.user_enter_as_username(String)"
});
formatter.result({
  "duration": 136580200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ganishka04",
      "offset": 12
    }
  ],
  "location": "LoginStepDefinition.user_enter_as_password(String)"
});
formatter.result({
  "duration": 112504400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_verify_valid_username_and_valid_password()"
});
formatter.result({
  "duration": 3040389200,
  "error_message": "junit.framework.ComparisonFailure: expected:\u003c[abc]\u003e but was:\u003c[ABC]\u003e\r\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:107)\r\n\tat com.adactin.stepdefinition.LoginStepDefinition.user_verify_valid_username_and_valid_password(LoginStepDefinition.java:43)\r\n\tat ✽.Then User verify valid username and valid password(Cucumber.feature:7)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 10,
  "name": "User enter valid username and valid password",
  "description": "",
  "id": "login-functionality-for-adactin-application;user-enter-valid-username-and-valid-password",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@Login1"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "User launch application",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "User enter \"SowmiyaSri\" as username",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "User enter \"Sowmiya05\" as password",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User verify valid username and valid password",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_launch_application()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "SowmiyaSri",
      "offset": 12
    }
  ],
  "location": "LoginStepDefinition.user_enter_as_username(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Sowmiya05",
      "offset": 12
    }
  ],
  "location": "LoginStepDefinition.user_enter_as_password(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinition.user_verify_valid_username_and_valid_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 807200000,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 17,
  "name": "User enter valid username and valid password",
  "description": "",
  "id": "login-functionality-for-adactin-application;user-enter-valid-username-and-valid-password",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@Login2"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "User launch application",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "User enter \"\u003cusername\u003e\" as username",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "User enter \"\u003cpassword\u003e\" as password",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User verify valid username and valid password",
  "keyword": "Then "
});
formatter.examples({
  "line": 23,
  "name": "",
  "description": "",
  "id": "login-functionality-for-adactin-application;user-enter-valid-username-and-valid-password;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 24,
      "id": "login-functionality-for-adactin-application;user-enter-valid-username-and-valid-password;;1"
    },
    {
      "cells": [
        "SowmiyaSri",
        "Sowmiya05"
      ],
      "line": 25,
      "id": "login-functionality-for-adactin-application;user-enter-valid-username-and-valid-password;;2"
    },
    {
      "cells": [
        "Bharath",
        "Bharath"
      ],
      "line": 26,
      "id": "login-functionality-for-adactin-application;user-enter-valid-username-and-valid-password;;3"
    },
    {
      "cells": [
        "Ganishka",
        "Gani123"
      ],
      "line": 27,
      "id": "login-functionality-for-adactin-application;user-enter-valid-username-and-valid-password;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 93700,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User launch application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enter \"GanishkaSri\" as username",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User enter \"Ganishka04\" as password",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User verify valid username and valid password",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_launch_application()"
});
formatter.result({
  "duration": 327342400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "GanishkaSri",
      "offset": 12
    }
  ],
  "location": "LoginStepDefinition.user_enter_as_username(String)"
});
formatter.result({
  "duration": 93664200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ganishka04",
      "offset": 12
    }
  ],
  "location": "LoginStepDefinition.user_enter_as_password(String)"
});
formatter.result({
  "duration": 85374900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_verify_valid_username_and_valid_password()"
});
formatter.result({
  "duration": 719706100,
  "error_message": "junit.framework.ComparisonFailure: expected:\u003c[abc]\u003e but was:\u003c[ABC]\u003e\r\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:107)\r\n\tat com.adactin.stepdefinition.LoginStepDefinition.user_verify_valid_username_and_valid_password(LoginStepDefinition.java:43)\r\n\tat ✽.Then User verify valid username and valid password(Cucumber.feature:7)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 25,
  "name": "User enter valid username and valid password",
  "description": "",
  "id": "login-functionality-for-adactin-application;user-enter-valid-username-and-valid-password;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@Login2"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "User launch application",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "User enter \"SowmiyaSri\" as username",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "User enter \"Sowmiya05\" as password",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User verify valid username and valid password",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_launch_application()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "SowmiyaSri",
      "offset": 12
    }
  ],
  "location": "LoginStepDefinition.user_enter_as_username(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Sowmiya05",
      "offset": 12
    }
  ],
  "location": "LoginStepDefinition.user_enter_as_password(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinition.user_verify_valid_username_and_valid_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 676727200,
  "status": "passed"
});
formatter.before({
  "duration": 139700,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User launch application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enter \"GanishkaSri\" as username",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User enter \"Ganishka04\" as password",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User verify valid username and valid password",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_launch_application()"
});
formatter.result({
  "duration": 443304700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "GanishkaSri",
      "offset": 12
    }
  ],
  "location": "LoginStepDefinition.user_enter_as_username(String)"
});
formatter.result({
  "duration": 88555100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ganishka04",
      "offset": 12
    }
  ],
  "location": "LoginStepDefinition.user_enter_as_password(String)"
});
formatter.result({
  "duration": 97512700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_verify_valid_username_and_valid_password()"
});
formatter.result({
  "duration": 429609600,
  "error_message": "junit.framework.ComparisonFailure: expected:\u003c[abc]\u003e but was:\u003c[ABC]\u003e\r\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:107)\r\n\tat com.adactin.stepdefinition.LoginStepDefinition.user_verify_valid_username_and_valid_password(LoginStepDefinition.java:43)\r\n\tat ✽.Then User verify valid username and valid password(Cucumber.feature:7)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 26,
  "name": "User enter valid username and valid password",
  "description": "",
  "id": "login-functionality-for-adactin-application;user-enter-valid-username-and-valid-password;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@Login2"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "User launch application",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "User enter \"Bharath\" as username",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "User enter \"Bharath\" as password",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User verify valid username and valid password",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_launch_application()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Bharath",
      "offset": 12
    }
  ],
  "location": "LoginStepDefinition.user_enter_as_username(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Bharath",
      "offset": 12
    }
  ],
  "location": "LoginStepDefinition.user_enter_as_password(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinition.user_verify_valid_username_and_valid_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 669514700,
  "status": "passed"
});
formatter.before({
  "duration": 98400,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User launch application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enter \"GanishkaSri\" as username",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User enter \"Ganishka04\" as password",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User verify valid username and valid password",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_launch_application()"
});
formatter.result({
  "duration": 337985400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "GanishkaSri",
      "offset": 12
    }
  ],
  "location": "LoginStepDefinition.user_enter_as_username(String)"
});
formatter.result({
  "duration": 95111100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ganishka04",
      "offset": 12
    }
  ],
  "location": "LoginStepDefinition.user_enter_as_password(String)"
});
formatter.result({
  "duration": 90501500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_verify_valid_username_and_valid_password()"
});
formatter.result({
  "duration": 458924500,
  "error_message": "junit.framework.ComparisonFailure: expected:\u003c[abc]\u003e but was:\u003c[ABC]\u003e\r\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:107)\r\n\tat com.adactin.stepdefinition.LoginStepDefinition.user_verify_valid_username_and_valid_password(LoginStepDefinition.java:43)\r\n\tat ✽.Then User verify valid username and valid password(Cucumber.feature:7)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 27,
  "name": "User enter valid username and valid password",
  "description": "",
  "id": "login-functionality-for-adactin-application;user-enter-valid-username-and-valid-password;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@Login2"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "User launch application",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "User enter \"Ganishka\" as username",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "User enter \"Gani123\" as password",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User verify valid username and valid password",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_launch_application()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Ganishka",
      "offset": 12
    }
  ],
  "location": "LoginStepDefinition.user_enter_as_username(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Gani123",
      "offset": 12
    }
  ],
  "location": "LoginStepDefinition.user_enter_as_password(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinition.user_verify_valid_username_and_valid_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 666290200,
  "status": "passed"
});
});