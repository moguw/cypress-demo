import {
    Given,
    When,
    Then,
    Before,
    And
  } from '@badeball/cypress-cucumber-preprocessor';
  import {
    gotoPromotionScreen,
    clickViewPromotion,
    checkPomotionDetails,
    clickAddPromotion,
    clickEditPromotion,
    editPromotionName,
    fillPromotionForm,
    checkUpdateSuccess
  } from '../../support/pages/promotion.po';

  import { getUniqueName} from '../../support/utils';

  let promotionInfo = null;
  
  Before({ tags: '@auth' }, () => {
    cy.fixture('promotion').then((json) => (promotionInfo = json));
  });

  Given('I am on the promotion page', () => gotoPromotionScreen());

  When('I click to view a promotion', () => clickViewPromotion());

  When('I click to add promotion', () => clickAddPromotion());

  When('I click to edit promotion', () => clickEditPromotion());

  And('fill in required information', () => {
    promotionInfo.name = getUniqueName('promotion');
    promotionInfo.externalName = getUniqueName('promotion');
    fillPromotionForm(promotionInfo);
  });

  And('edit promotion name', () => {
    promotionInfo.name = getUniqueName('promotion');
    promotionInfo.externalName = getUniqueName('promotion');
    editPromotionName(promotionInfo);
  });

  Then('promotion details modal should be shown',()=>checkPomotionDetails());

  Then('save success msg should be shown',()=>checkUpdateSuccess());
