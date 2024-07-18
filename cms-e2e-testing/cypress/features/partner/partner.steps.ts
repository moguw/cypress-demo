import {
    Given,
    When,
    And,
    Then,
    Before
  } from '@badeball/cypress-cucumber-preprocessor';

import {
    checkPartnerName, 
    checkPartnerPhone, 
    gotoPartnerScreen,
    inputPartnerNameFilter,
    inputPartnerPhoneFilter,
    viewSpecificPartner,
    changePartnerCommission,
    checkCommissionSaved,
    checkPartnerDetails,
  } from '../../support/pages/partner.po';

import { aliasQuery } from '../../support/graphql-utils';

Given('I am on the partner page', () => gotoPartnerScreen());

When('I filter the {string} partner',(name) =>inputPartnerNameFilter(name));

Then('I should view {string} partner',(name) =>checkPartnerName(name));

Given('I filter the {string} phone',(phone) =>inputPartnerPhoneFilter(phone));

Then('I should view {string} phone',(phone) =>checkPartnerPhone(phone));

When('I click to specific partner info', () => viewSpecificPartner());

When('I change partner commission', () => changePartnerCommission());

Then('I can successfully modify partner commission plan', () => checkCommissionSaved());

When('I click to view first partner info', () => viewSpecificPartner());

Then('I can see the partner details normally', () => checkPartnerDetails());
