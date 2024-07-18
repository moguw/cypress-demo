import {
  Given,
  Then,
  When,
  Before,
} from '@badeball/cypress-cucumber-preprocessor';
import {
  gotoLandlordScreen,
  filterDifferntStatus,
  checkButton,
  BusinessOpportunity
} from '../../support/pages/landlord.po';

Given('I am on the landlord page', () => gotoLandlordScreen());

When('I filter {string} landlord', (status) => {
  filterDifferntStatus(status)
});

Then('I should view Update button', () => checkButton());

Then('I should view business opportunity', () => BusinessOpportunity());