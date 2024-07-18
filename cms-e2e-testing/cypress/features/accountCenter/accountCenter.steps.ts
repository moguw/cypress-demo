import {
    Given,
    Then,
    When,
    Before,
    And,
  } from '@badeball/cypress-cucumber-preprocessor';
  import {
    gotoAccountScreen,
    gotoAddNewCMSAccount,
    checkAccountEmailDisplay,
    chooseLandlordAccountTab,
    gotoAddNewLandlordAccount,
    gotoModifyCMSAccount,
    checkUpdateSuccess,
    gotoModifyLandlordAccount,
    gotoModifyCMSAccountRole
  } from '../../support/pages/accountCenter.po';
  
  let data = null;
  
  Before({}, () => {
    cy.fixture('account').then((json) => {
        cy.getUnduplicatedString().then(email =>{json.email = email});
        data=json
    });
  });

  Given('I am on the account center page', () => gotoAccountScreen());

  When('create internal account and submit', () => gotoAddNewCMSAccount(data));

  Then('can see account been successfully created', () =>checkAccountEmailDisplay(data));

  When('Choose Landlord management tab', ()=>chooseLandlordAccountTab());

  And('create landlord account and submit',()=>gotoAddNewLandlordAccount(data));

  Then('can see landlord account been successfully created', () =>checkAccountEmailDisplay(data));

  When('modify internal account details and submit', ()=>gotoModifyCMSAccount(data));

  Then('can see account been successfully updated', () =>checkUpdateSuccess());

  When('modify landlord account details and submit', ()=>gotoModifyLandlordAccount(data));

  When('modify internal account role and submit', ()=>gotoModifyCMSAccountRole(data));
