export const state = {
    route: '/account/account-management',
  };

  const createCMSAccountButton = '[id=create_cms_account_button]';
  const createAccountFromEMail = '#create_account_form_email';
  const createAccountFormFirstName = '#create_account_form_firstName';
  const createAccountFormLastName = '#create_account_form_lastName';
  const createAccountFormRole = 'Please Select user role';
  const roleDropdownMenu = '.ant-select-dropdown-menu';

  const LandlordAccountTab = 'Landlord Management';

  const createLandlordAccountButton = '[id=create_landlord_account_button]';
  const createLandlordEmail = '#create_landlord_form_email';
  const createLandlordFirstName = '#create_landlord_form_firstName';
  const createLandlordLastName = '#create_landlord_form_lastName';
  const createLanlordLanlord = "[id=input_landlord_name]";
  const landlordDropdownMenu = '.ant-select-dropdown-menu-item-active'

  const viewBtn = 'View';
  const modifyAccountBtn = '.landlord-account-management__btn:not(.landlord-account-management__create-new-account)'
  const modifyLandlordAccountBtn = '.view-landlord__edit-btn'
  const modifyAccountFormFirstName = '#edit_account_form_firstName'
  const modifyAccountFormLastName = '#edit_account_form_lastName'
  const userRoleBar = '#edit_account_form_roles'
  const userRoleDeleteBtn = '.ant-select-selection__choice__remove'
  const userRoleunSelected = '.ant-select-dropdown-menu-item[aria-selected="false"]'
  
  const submitButton = 'Confirm';
  const successMsg = '.ant-message-success > span';
  const searchIcon = '[data-icon=search]';
  const searchInput = '[name=searchAccountEmail]';
  const landlordEmailInput = '[name=email]';

  export const gotoAccountScreen = () => {
    cy.visit(state.route)
  }
  export const gotoAddNewCMSAccount = (account) => {
    cy.get(createCMSAccountButton).click();
    cy.get(createAccountFromEMail).type(account.email).should('have.value',account.email);
    cy.get(createAccountFormFirstName).type(account.firstName).should('have.value',account.firstName);
    cy.get(createAccountFormLastName).type(account.lastName).should('have.value',account.lastName);
    cy.contains(createAccountFormRole).type(account.userRole);
    cy.get(roleDropdownMenu).children().eq(2).click();
    cy.contains(submitButton).click()

  }

  export const checkAccountEmailDisplay = (account) => {
    cy.contains(account.email)
  }

  export const chooseLandlordAccountTab = () =>{
    cy.contains(LandlordAccountTab).click()
  }

  export const gotoAddNewLandlordAccount = (account) => {
    cy.get(createLandlordAccountButton).click();
    cy.get(createLandlordEmail).type(account.email).should('have.value',account.email)
    cy.get(createLandlordFirstName).type(account.firstName).should('have.value',account.firstName);
    cy.get(createLandlordLastName).type(account.lastName).should('have.value',account.lastName);
    cy.get(createLanlordLanlord).type(account.landlord)
    cy.get(landlordDropdownMenu).click()
    cy.contains(submitButton).click()

  }

  export const gotoModifyCMSAccount = (account) =>{
    cy.get(searchIcon).eq(2).click();
    cy.get(searchInput).type(account.cmsEmail+'{enter}');
    cy.get(modifyAccountBtn).eq(0).click()
    let random = new Date().getTime().toString();
    cy.get(modifyAccountFormFirstName).clear().type("first+"+random);
    cy.get(modifyAccountFormLastName).clear().type("last+"+random);
    cy.contains(submitButton).click()
  }

  export const checkUpdateSuccess = () =>{
    cy.get(successMsg).should('be.visible');
    cy.contains('successfully updated');
  }

  export const gotoModifyLandlordAccount = (account) =>{
    cy.get(searchIcon).eq(3).click();
    cy.get(landlordEmailInput).type(account.dashboardEmail+'{enter}');
    cy.contains(viewBtn).click();
    cy.get(modifyLandlordAccountBtn).click()
    let random = new Date().getTime().toString();
    cy.get(createLandlordFirstName).clear().type("first+"+random);
    cy.get(createLandlordLastName).clear().type("last+"+random);
    cy.contains(submitButton).click()
  }

  export const gotoModifyCMSAccountRole = (account) =>{
    cy.get(searchIcon).eq(2).click();
    cy.get(searchInput).type(account.cmsEmail+'{enter}');
    cy.get(modifyAccountBtn).eq(0).click()
    cy.get(userRoleDeleteBtn).eq(0).click()
    cy.get(userRoleBar).click()
    cy.get(userRoleunSelected).its('length').then((elementCount) => {
      let selectedRole = Cypress._.random(elementCount - 1);
      cy.get(userRoleunSelected).eq(selectedRole).click({force: true});
    });
    cy.contains(submitButton).click()
  }
