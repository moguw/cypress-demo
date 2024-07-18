import {
    Given,
    Then,
    When,
    Before,
    And,
  } from '@badeball/cypress-cucumber-preprocessor';
  import {
    gotoMyprofileScreen,
    clickModifyPassword,
    inputPasswordAndSubmit,
    checkUpdatePopup,
    clickSwitchRoleButton,
    SelectRole,
    checkSwitchRolePopup
  } from '../../support/pages/myProfile.po';

  Before({ tags: '@authrole' }, () => {
    cy.log('run every auth cases');
    cy.setMultiroleToken();
  });

  Given('I am on the my profile page', () => gotoMyprofileScreen());

  When('Click modfiy password button',()=>clickModifyPassword());

  And('Input new password and submit',()=>inputPasswordAndSubmit());

  Then('Can see update successfully pop-up',()=>checkUpdatePopup());

  When('Click switch role button',()=>clickSwitchRoleButton());

  And('Select {string} role',(role)=>SelectRole(role));

  Then('Can see switch successfully {string} pop-up',(showMessage)=>checkSwitchRolePopup(showMessage));

