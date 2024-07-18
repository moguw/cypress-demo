## **Background**
Many of the major features on the CMS were smoothed out, including the business logic and front-end interface presentation changes were not as frequent.

In addition, due to the complexity of the project, there are many regression testing paths that need to be done, and relying on manual testing alone is time-consuming and prone to human errors that require re-testing a test case.

Therefore, there is a great need for automated testing to help free up some of the manual testing resources.

## **What are the goals?**
1. Improve the efficiency of smoky test execution
1. Speed up the execution of regression tests
1. Avoid test failures caused by human errors
1. Improve test coverage
1. Execute tests during non-working hours
1. Free up some QA human resources
1. Improve the quality of project delivery

## **Getting Started**
This repo contains the following technology stack：

Recipe | Description
---|---
JavaScript | JavaScript is the world's most popular programming language.
TypeScript | TypeScript is JavaScript with syntax for types.
Cypress | Cypress is a front end testing tool, and support to run end-to-end (E2E) tests on a browser.
Cucumber | Cucumber is a tool that supports Behaviour-Driven Development(BDD). 

### **Introduction**
Use the Gherkin feature to manage test cases, as shown below：
```
# cypress/tests/common/login.feature
Feature: Login CMS

  As a staff
  I need to be able to log in cms

  Scenario: Can log into cms successfully
    Given I am on the cms login page
    When I login with the "admin" account
    Then I should be on the "properties" page
```

```
## cypress/step_definitions/login.steps.ts
import { Given, When } from '@badeball/cypress-cucumber-preprocessor';

Given('I am on the cms login page', () => gotoLoginScreen());

When('I login with the {string} account', (role) => {
  loginWith(getStaffByRole(role));
  }
);
```

Project tree:
```
.
├── README.md
├── cypress
│   ├── features  （Storage of all testcases and setpDefinitions）
│   ├── fixtures （Storage of all test data）
│   └── support
│       ├── commands.ts （Includes custom commands such as login and logout operations and cookie setting）
│       ├── e2e.ts （Please check the description details in the file document）
│       └── pages （Includes page elements and exact actions, such as clike and input events）
├── cypress.config.ts （Stage env configuration file）
├── cypress.config.uat1.ts （UAT1 env configuration file）
├── cypress.config.uat2.ts （UAT2 env configuration file）
├── package.json
├── tsconfig.json
└── yarn.lock
```

### **Prerequisites**
The only requirement for this project is to have Node.js version 14 installed on your machine. 

### **Installation**
```
yarn install
```
### **Run Test**
```
# Open the debugging tool and run the test in the stage/uat1/uat2 environment
yarn debug_stage/debug_uat1/debug_uat2

# Headless browsing mode running test
yarn run_stage/run_uat1/run_uat2
```
