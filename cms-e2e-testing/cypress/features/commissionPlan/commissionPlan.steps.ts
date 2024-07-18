import {
    Given,
    When,
    And,
    Then,
    Before,
  } from '@badeball/cypress-cucumber-preprocessor';
  import {
    gotoCommissionPlanScreen,
    openNoDefaultModal,
    setDefault,
    checkUpdateSuccess,
    clickAddCommissionBtn,
    fillCommissionForm,
    clickEditCommissionBtn,
    editCommissionName
  } from '../../support/pages/commissionPlan.po';

  import { getUniqueName} from '../../support/utils';

  let commissionInfo = null;
  
  Before({ tags: '@auth' }, () => {
    cy.fixture('commissionPlan').then((json) => (commissionInfo = json));
  });

  Given('I am on the commission plan page', () => gotoCommissionPlanScreen());

  When('I open a commission plan which is not default', () => openNoDefaultModal());

  When('I click to edit commission plan', () => clickEditCommissionBtn());

  And('set commission plan as default',()=>setDefault());

  Then('save success msg should be shown',()=>checkUpdateSuccess());

  When('I click to add commission plan', () => clickAddCommissionBtn());

  And('fill in required information', () => {
    commissionInfo.name = getUniqueName('commission');
    commissionInfo.externalName = getUniqueName('commission');
    fillCommissionForm(commissionInfo);
  });

  And('edit commission plan name', () => {
    commissionInfo.name = getUniqueName('commission');
    commissionInfo.externalName = getUniqueName('commission');
    editCommissionName(commissionInfo);
  });
