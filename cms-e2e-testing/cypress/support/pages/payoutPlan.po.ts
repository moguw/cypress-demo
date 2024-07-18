const state = {
  route: '/referral/payout-plan',
};

const createPayoutPlanBtnEle = '.blank-create-btn'; //  "Create payout plan" btn in empty page
const addPayoutPlanBtnEle = '.button'; // "Add payout plan" btn in the upper right corner.
const creationModalTitle = 'Add Payout Plan';
const editionModalTitle = 'Edit Payout Plan';
const editBtnEle = '.edit-btn';
const PartnersCountry = '.ant-select-selection__placeholder';
const payoutPlanNameEle = '#modal-add-payout-plan_name';
const bookingCompletedPercentEle =
  '#modal-add-payout-plan_bookingCompletedPercent';
const setDefaultBtnEle = '#modal-add-payout-plan_default';
const saveBtnTxt = 'Save';
const PartnercountryDropDowm = '[role="listbox"]';
const SelectCountry = '.ant-select-dropdown-menu-item';
let isAlreadyHasPlan = true;
let isHasCountry = false;
export const gotoPayoutPlanPage = () => {
  cy.visit(state.route);
};



export const openCreationModal = () => {
  cy.wait('@gqllistPartnerPayoutPlanQuery')
    .its('response.body.data.listPartnerPayoutPlans.totalCount')
    .then((plansCount) => {
      if (plansCount) {
        cy.get(addPayoutPlanBtnEle).click();
      } else {
        isAlreadyHasPlan = false;
        isHasCountry = false;
        cy.get(createPayoutPlanBtnEle).click();
      }
    });
  cy.contains('div', creationModalTitle).should('exist');
};


export const openEditionModal = () => {
  cy.get(editBtnEle)
    .its('length')
    .then((elementCount) => {
      let selected = Cypress._.random(elementCount - 1);
      cy.get(editBtnEle).eq(selected).click();
      isAlreadyHasPlan = true;
      isHasCountry = true;
    });
  cy.contains('div', editionModalTitle).should('exist');
};

export const fillModalInfo = (planInfo) => {
  cy.get(payoutPlanNameEle).clear().type(planInfo.name);
  if (!isHasCountry) {
    cy.get(PartnersCountry).eq(0).click({force: true});
    cy.get(PartnercountryDropDowm).find(SelectCountry).eq(0).click();
  }
  
  cy.get(bookingCompletedPercentEle)
    .clear()
    .type(planInfo.bookingCompletedPercent);
  if (!isAlreadyHasPlan) {  // The first plan must be set as the default
    cy.get(setDefaultBtnEle).click();
  }
  cy.contains('button', saveBtnTxt).click();
};


export const checkUpdateSuccess = (planInfo) => {
  cy.contains('td > div', planInfo.name);
  cy.contains('td > div', planInfo.bookingCompletedPercent);
};
