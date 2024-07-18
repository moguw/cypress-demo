import {
  Given,
  And,
  Then,
  When,
  Before,
} from '@badeball/cypress-cucumber-preprocessor';

Before({ tags: '@auth' }, () => {
  cy.log('run every auth cases');
  cy.setAuthorization();
});

Then('I should be on the {string} page', (page) =>
  cy.checkLocation(`/${page}`)
);

When('I navigate to the {string} page', (page) => cy.visit(`/${page}`));
