import {
  Given,
  When,
  And,
  Then,
  Before,
} from '@badeball/cypress-cucumber-preprocessor';
import {
  gotoPayoutPlanPage,
  openCreationModal,
  openEditionModal,
  fillModalInfo,
  checkUpdateSuccess,
} from '../../support/pages/payoutPlan.po';

import { getUniqueName, getRndInteger } from '../../support/utils';
import { aliasQuery } from '../../support/graphql-utils';

let payoutPlanInfo = null;

Before({}, () => {
  cy.fixture('payoutPlan').then((json) => (payoutPlanInfo = json));
  cy.intercept('POST', Cypress.env('api'), (req) => {
    // Queries
    aliasQuery(req, 'listPartnerPayoutPlan');
  });
});

Given('I am on the payout-plan page', () => gotoPayoutPlanPage());

When('I clike the add payout plan button', () => openCreationModal());

When('I clike the edit payout plan button', () => openEditionModal());

And('I filled in all the required fields and save', () => {
  payoutPlanInfo.name = getUniqueName('plan');
  payoutPlanInfo.bookingCompletedPercent = getRndInteger(0, 100);
  fillModalInfo(payoutPlanInfo);
});

Then('The editing info should be displayed', () =>
  checkUpdateSuccess(payoutPlanInfo)
);

Then('A payment plan is created successfully', () =>
  checkUpdateSuccess(payoutPlanInfo)
);
