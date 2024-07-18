import { eq } from "cypress/types/lodash";

export const state = {
    route: '/billing',
  };
  
export const gotoBillingScreen = () => cy.visit(state.route);

const billingButton = '.billing__card-btn'
const billingrow = 'tr.ant-table-row.ant-table-row-level-0'
const selectItem = '.ant-select-selection__rendered';
const dropDownMenu = '[role="listbox"]';
const menuOptions = '.ant-select-dropdown-menu-item';
const searchButton = '[type="submit"]'
const managementbutton = '.billing__card-title'
const BookingJourneybutton = 'label.ant-radio-button-wrapper'
const searchName = 'input.ant-input.ant-select-search__field'

export const clickManagementButton = (management) => {
  cy.get(billingButton).contains(management).click()
  cy.contains('Search')
}

export const FilterbillingStatus = (billingstatus) =>{
  cy.contains('More').click()
  cy.get(selectItem).eq(5).click();
  cy.get(dropDownMenu).eq(0).find(menuOptions).contains(billingstatus).click();
  cy.get(searchButton).contains('Search').click({force: true})
  cy.get(billingrow).should('contain',billingstatus)
}

export const clickTransferManagement = () =>{
  cy.get(managementbutton).contains('Transfer management').click({force: true})
  cy.contains('Transfer Management')
}

export const filterBookingJourney = (TransferType,bookingjourney) => {
  cy.get(BookingJourneybutton).contains(bookingjourney).click({force: true})
  cy.get(billingrow).should('contain',TransferType)
}

export const clickReceivablesmanagement = () =>{
  cy.get(managementbutton).contains('Receivables management').click({force: true})
  cy.contains('Receivable management')
}

export const filterlandlordName = (propertyInfo) => {
  cy.get(searchName).eq(0).clear().type(propertyInfo.landlordName)
  cy.get(searchButton).contains('Search').click({force: true})
  cy.get(billingrow).should('contain',propertyInfo.landlordName)
}

export const clickRefundManagement = () =>{
  cy.get(managementbutton).contains('Refund Management').click({force: true})
  cy.contains('Refund List')
}

export const filterPropertyName = () => {
  cy.get(searchName).eq(1).clear().type('hercules')
  cy.get(searchButton).contains('Search').click({force: true})
  cy.get(billingrow).should('contain','hercules')
}