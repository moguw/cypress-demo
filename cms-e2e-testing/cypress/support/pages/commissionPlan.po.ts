import { doesFeatureMatch } from "@badeball/cypress-cucumber-preprocessor";

export const state = {
    route: '/referral/commission-plan',
  };

const defaultTag = '.commison-plan__plan-card__basic-info__default-tag';
const editBtn = 'div.commison-plan__plan-card__link';
const defaultSwitch = '[id=commission_plan_editor_modal_default]';
const saveBtn = '.commission-plan-editor-container__save-button';
const yesBtn = '.ant-popover-buttons>button:nth-child(2)';
const successMsg = '.ant-message-success > span';
const addCommissionBtn = '.commission-plan__header__button';
const name = '[id=commission_plan_editor_modal_comissionPlanName]';
const externalName = '[id=commission_plan_editor_modal_externalName]';
const countryBar = '.commission-plan-editor__section .ant-select-enabled'
const countryDropDown = '.ant-select-dropdown-menu-item';
const shortTerm = 'div>div.commission-plan-editor__tiers-group__tr:nth-child(2)>div:nth-child(2)';
const longTerm = 'div>div.commission-plan-editor__tiers-group__tr:nth-child(2)>div:nth-child(3)';
const tierName = 'div>div.commission-plan-editor__tiers-group__tr:nth-child(2)>div:nth-child(4)'
const nextPage = '.ant-pagination-item-link'

export const gotoCommissionPlanScreen = () =>{
    cy.visit(state.route);
};

export const openNoDefaultModal = () => {
    cy.get(editBtn).first().should('exist');
        cy.get(defaultTag).then((elem)=>{
            const listingCount = Cypress.$(elem).length;
            if (listingCount >=10){
                cy.get(nextPage).eq(1).click();
                cy.get(editBtn).eq(-1).click();
                             
            }
            else{cy.get(editBtn).eq(-1).click();}   
     })
    
};

export const setDefault = () => {
    cy.get(defaultSwitch).click();
    cy.get(saveBtn).click();
    cy.get(yesBtn).click();
};

export const checkUpdateSuccess = () => {
    cy.get(successMsg).should('be.visible');
    cy.contains('Commission Plan success');
};

export const clickAddCommissionBtn = () => {
    cy.get(addCommissionBtn).click();
};

export const fillCommissionForm = (commissionInfo) => {
    cy.get(name).type(commissionInfo.name);
    cy.get(externalName).type(commissionInfo.externalName);
    cy.get(shortTerm).type(commissionInfo.shortTerm);
    cy.get(longTerm).type(commissionInfo.longTerm);
    cy.get(tierName).type(commissionInfo.tierName);
    cy.get(countryBar).eq(0).click();
    cy.get(countryBar).eq(0).type(commissionInfo.country);
    cy.get(countryDropDown).eq(0).click();
    cy.get(saveBtn).click();
};

export const editCommissionName = (commissionInfo) => {
    cy.get(name).clear().type(commissionInfo.name);
    cy.get(externalName).clear().type(commissionInfo.externalName);
    cy.get(saveBtn).click();
};

export const clickEditCommissionBtn = () => {
    cy.get(editBtn).first().should('exist');
    cy.get(editBtn).then((elem)=>{
        const listingCount = Cypress.$(elem).length;
        let selected = Cypress._.random(listingCount - 1)
        cy.get(editBtn).eq(selected).click();
      })
};
