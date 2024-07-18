export const state = {
    route: '/referral/promotion',
  };

const viewBtnTxt = 'View';
const promotionDetailsModal = 'Promotion Detail'
const addPromotionBtn = '.promotion-list__header__button'
const name = '#promotion_plan_editor_modal_comissionPlanName'
const externalName = '#promotion_plan_editor_modal_externalName'
const longTerm = '.ant-input-number-input[placeholder="Long Term"]'
const shortTerm = '.ant-input-number-input[placeholder="Short Term"]'
const appliedCountryBar = '.ant-legacy-form>section:nth-child(1) .ant-select-selection__placeholder'
const appliedCountryInput = '.ant-legacy-form>section:nth-child(1) .ant-select-search__field'
const destCountryBar = '.ant-legacy-form>section:nth-child(2) .ant-select-enabled .ant-select-selection__placeholder'
const destCountryInput = '.ant-legacy-form>section:nth-child(2) .ant-select-enabled .ant-select-search__field'
const countryDropDown = '.ant-select-dropdown:not(.ant-select-dropdown-hidden)>div>ul>li';
const submissionDate = '#promotion_plan_editor_modal_oppsSubmissionDate'
const completeDate = '#promotion_plan_editor_modal_oppsCompletedDate'
const calendar = '.ant-calendar-date[aria-disabled="false"]'
const saveBtn = '.promotion-plan-editor-container__save-button';
const successMsg = '.ant-message-success > span'
const editBtn = '.promotion-list__body__list__column-body>a:nth-child(1)'

export const gotoPromotionScreen = () =>{
    cy.visit(state.route);
};

export const clickViewPromotion = () =>{
    cy.contains(viewBtnTxt).click({ force: true })
};

export const checkPomotionDetails = () =>{
    cy.contains(promotionDetailsModal).should('exist');
};

export const clickAddPromotion = () =>{
    cy.get(addPromotionBtn).click();

};

export const fillPromotionForm = (promotionInfo) =>{
    fillPromotionText(promotionInfo);
    fillPromotionCountry(promotionInfo);
    fillPromotionDate();
    saveModal();
};

export const editPromotionName = (promotionInfo) =>{
    cy.get(name).clear().type(promotionInfo.name);
    cy.get(externalName).clear().type(promotionInfo.externalName);
    cy.get(saveBtn).click();
};

export const chooseDate = () =>{
    cy.get(submissionDate).click();
    cy.get(calendar).click();
    cy.get(calendar).click();
    cy.get(completeDate).click();
    cy.get(calendar).click();
    cy.get(calendar).click();
};

export const fillPromotionText = (promotionInfo) => {
    cy.get(name).type(promotionInfo.name);
    cy.get(externalName).type(promotionInfo.externalName);
    cy.get(shortTerm).type(promotionInfo.shortTerm);
    cy.get(longTerm).type(promotionInfo.longTerm);
};

export const fillPromotionCountry = (promotionInfo) => {
    cy.get(appliedCountryBar).click();
    cy.get(appliedCountryInput).type(promotionInfo.appliedCountry);
    cy.get(countryDropDown).eq(0).click();
    cy.get(destCountryBar).click();
    cy.get(destCountryInput).type(promotionInfo.destCountry);
    cy.get(countryDropDown).eq(0).click();;
};

export const fillPromotionDate = () => {
    cy.get(submissionDate).click();
    cy.get(calendar).its('length').then((elementCount) => {
      let selected_start = Cypress._.random(elementCount - 1);
      cy.get(calendar).eq(selected_start).click();
      let selected_end = Cypress._.random(elementCount - 1);
      cy.get(calendar).eq(selected_end).click();
    });
    cy.get(completeDate).click();
    cy.get(calendar).its('length').then(() => {
        cy.get(calendar).eq(-1).click({force:true});
        cy.get(calendar).eq(-1).click({force:true});
    });
};

export const clickEditPromotion = () => {
    cy.get(editBtn).its('length').then((elementCount) => {
        let selected = Cypress._.random(elementCount - 1);
        cy.get(editBtn).eq(selected).click({ force: true })
    });
};

export const saveModal = () => {
    cy.get(saveBtn).click();
};

export const checkUpdateSuccess = () => {
    cy.get(successMsg).should('be.visible');
    cy.contains('Promotion success');
};
