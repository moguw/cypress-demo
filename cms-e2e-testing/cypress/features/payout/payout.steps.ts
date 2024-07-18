import {
  Given,
  When,
  And,
  Then,
  Before
} from '@badeball/cypress-cucumber-preprocessor';
import {
  gotoPayoutScreen,
  goToSelectedTab,
  checkPayoutStatus,
  approvePendingPayout,
  checkShowSuccessMsg,
  removeApprovedPayout
} from '../../support/pages/payout.po';
import { aliasQuery } from '../../support/graphql-utils';

Before({}, () => {
  cy.intercept('POST', Cypress.env('api'), (req) => {
    aliasQuery(req, 'CMS_Partner_Payout_Lists');
  });
});

Given('I am on the payout page', gotoPayoutScreen);

When('I go to the {string} tab', (tabName) => goToSelectedTab(tabName));

Then('Status of all list items are settled', checkPayoutStatus);

And('Approve one of the pending payouts', approvePendingPayout);

Then('An {string} success msg should be shown', (type) => checkShowSuccessMsg(type));

When('I remove pending payout from settlement list', removeApprovedPayout);
