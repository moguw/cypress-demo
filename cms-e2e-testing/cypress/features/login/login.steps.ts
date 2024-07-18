import {
  Given,
  And,
  Then,
  When,
  Before,
} from '@badeball/cypress-cucumber-preprocessor';
import { before } from 'cypress/types/lodash';
import {
  gotoLoginScreen,
  loginWith,
  checkFullName,
  clickDifferentRoles
} from '../../support/pages/login.po';

const { _ } = Cypress;
let staff = null;
const getStaffByRole = (role) => _.find(staff, { role });

Before({}, () => {
  cy.log('only print if run log cases');
  cy.fixture('users').then((json) => (staff = json));
});

Given('I am on the cms login page', () => gotoLoginScreen());

When('I login with the {string} account', (role) => {
  loginWith(getStaffByRole(role));
  }
);
And ('choose {string} role and confirm',(role) =>{
  clickDifferentRoles(role)
})

// Then(/^I should see "(.*)" on header/, (fullName) => checkFullName(fullName));

//   Then('I should see account not found', () => checkFullName());
