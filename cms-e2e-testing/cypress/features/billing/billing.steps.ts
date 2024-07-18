import {
    Given,
    When,
    And,
    Then,
    Before,
  } from '@badeball/cypress-cucumber-preprocessor';
  import {
    gotoBillingScreen,
    clickManagementButton,
    FilterbillingStatus,
    clickTransferManagement,
    filterBookingJourney,
    clickReceivablesmanagement,
    filterlandlordName,
    clickRefundManagement,
    filterPropertyName
  } from '../../support/pages/billing.po';
  let propertyInfo = null;

  Before({}, () => {
    cy.fixture('property').then((json) => (propertyInfo = json));
  });
  Given('I am on the billing page', () => gotoBillingScreen());

  When('I click the {string} button', (management) => clickManagementButton(management));
  
  Then('The status of all records is {string}',(billingstatus)=>FilterbillingStatus(billingstatus));

  When('I click Transfer Management button', () => clickTransferManagement());

  Then('{string} records are from {string}',(TransferType,bookingjourney)=>filterBookingJourney(TransferType,bookingjourney));

  When('I click the Receivable Management button', () => clickReceivablesmanagement());

  Then('I can filter out by landlord name',()=>filterlandlordName(propertyInfo));

  When('I click the Refund Management button', () => clickRefundManagement());

  Then('I can filter out by property name',()=>filterPropertyName());