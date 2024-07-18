export const state = {
    route: '/account/my-profile',
  };


const modifyPasswordButton = "Modify";
const NewPasswordInput = '[id=basic-setting_newPassword]';
const reEnterPasswordInput = '[id=basic-setting_reEnterPassword]';
const submitButton = 'Confirm to update';
const alter = 'Account successfully updated.';

const switchRoleButton = 'Switch role';

const ConfirmButton = '.ant-btn'

export const gotoMyprofileScreen = () =>{
    cy.visit(state.route);
}

export const clickModifyPassword = () =>{
    cy.contains(modifyPasswordButton).click();
}

export const inputPasswordAndSubmit=()=>{
    cy.get(NewPasswordInput).type(Cypress.env("adminPsw")).should('have.value',Cypress.env("adminPsw"));
    cy.get(reEnterPasswordInput).type(Cypress.env("adminPsw")).should('have.value',Cypress.env("adminPsw"));
    cy.contains(submitButton).click();
}

export const checkUpdatePopup=()=>{
    cy.contains(alter);
}

export const clickSwitchRoleButton = ()=>{
    cy.contains(switchRoleButton).click();
}

export const SelectRole = (role) =>{
    cy.contains(role).click()
    cy.get(ConfirmButton).click()
}

export const checkSwitchRolePopup = (showMessage) =>{
    cy.contains(showMessage)
}
