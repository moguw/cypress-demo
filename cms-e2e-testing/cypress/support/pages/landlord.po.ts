export const state = {
  route: '/landlords',
};

export const gotoLandlordScreen = () => cy.visit(state.route);
export const filterDifferntStatus = (status) => {
  cy.contains(status).click();
}
export const checkButton = () =>
  cy.contains('Update');

export const BusinessOpportunity = () =>
  cy.contains('Business Opportunity');