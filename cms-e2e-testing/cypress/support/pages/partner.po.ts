// import { should } from "chai"; 

export const state = {
    route: '/referral/partner'
};

const filterPartnerNameMenu = 'tr > :nth-child(2) > .anticon';
// '[data-icon=search]'
// 
const inputPartnerName = '[name="partnerName"]';
const filterPartnerPhoneMenu = 'tr > :nth-child(5) > .anticon';
const inputPartnerPhone = '[name=phoneNumber]';
const partnerViewBtn = 'td > div.partner-page__body__list__column-body';
const editCommissionBtn = '.partner-detail-tab-card__header__icon';
const commissionSelectBar = '.ant-select-arrow';
const commissionDropdownList = '.ant-select-dropdown-menu-item'
const saveCommission = '.partner-commission-plan-editor__save-button'
const successMsg = '.ant-message-success > span'
const partnerDetails = '.partner-details__header-content'
const partnerPayoutBtn = '.ant-tabs-nav-animated>div>div:nth-child(2)'

export const gotoPartnerScreen = () => cy.visit(state.route);

export const inputPartnerNameFilter = (name) => { 
    cy.get(filterPartnerNameMenu).eq(1).should('be.visible').click();
    cy.get(inputPartnerName).eq(1).type(name + '{enter}');
};

export const checkPartnerName = (name) => {
    cy.contains('span', name).should('exist');
};

export const inputPartnerPhoneFilter = (phone) => {
    cy.get(filterPartnerPhoneMenu).click({force: true});
    cy.get(inputPartnerPhone).clear().type(phone + '{enter}');
};

export const checkPartnerPhone = (phone) => {
    cy.contains('span', phone).should('exist');
};

export const viewSpecificPartner = () => {
    inputPartnerNameFilter('Amber');
    cy.get(partnerViewBtn).eq(-1).click();
};

export const changePartnerCommission = () => {
    cy.get(editCommissionBtn).click();
    cy.get(commissionSelectBar).click();
    let selectedEnd = Cypress._.random(5);
    cy.get(commissionDropdownList).eq(selectedEnd).click();
    cy.get(saveCommission).click();
};

export const checkCommissionSaved = () => {
    cy.get(successMsg).should('be.visible');
    cy.contains('Commission Plan success');
};

export const checkPartnerDetails = () => {
    cy.get(partnerDetails).should('be.visible');
    cy.contains('Commission Plan');
    cy.get(partnerPayoutBtn).click();
    cy.contains('Payout Plan');
};
