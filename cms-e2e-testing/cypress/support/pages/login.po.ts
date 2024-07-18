export const state = {
  route: '/login',
};

export const gotoLoginScreen = () => cy.visit(state.route);

export const loginWith = (user) => {
  cy.get('[id="userName"]').type(user.email).should('have.value', user.email);
  cy.get('[id="password"]')
    .type(user.password)
    .should('have.value', user.password);
  cy.get('[type="submit"]').click();
};

export const checkFullName = (fullName) =>
  cy.contains(fullName, { timeout: 8000 });

export const checkUserDisabledError = () => cy.contains('USER_NOT_ENABLED');

export const clickDifferentRoles = (role) =>{
  cy.contains(role).click();
  cy.get('[type="button"]').click();
}
