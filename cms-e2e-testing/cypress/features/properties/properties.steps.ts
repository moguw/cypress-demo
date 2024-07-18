import {
  Given,
  Then,
  When,
  And,
  Before,
} from '@badeball/cypress-cucumber-preprocessor';
import {
  gotoPropertiesScreen,
  filterDifferentStatusProperty,
  checkProperty,
  filterDifferentBookingTypeProperty,
  checkPropertyBookingType,
  inputLandlordNameFilter,
  checkPropertyLandlordName,
  openPropertyCreationModel,
  fillInProeprtyMandatoryFeilds,
  showCreatedPropertySuccess,
  searchpropertyName,
  showPropertyNameSuccess,
  goToPropertyManagementPage,
  editPropertyName,
  editPropertydetails,
  choosePropertyFacility,
  modifyPropertyBookingType,
  gotoNewPropertyPage,
  editPropertyAddress,
  GotoRoomConfigPage,
  Addrooms,
  checkUpdateSuccess,
  EditroomsName,
  Deleteroom,
  GotoPriceAvailabilityPage,
  Addlisting,
  editListingDetails,
  CopyToCurrentRoom,
  deleteListing,
  goToCommissionManagementPage,
  goToSetCommissions,
  fillCommissionsModalInfo,
} from '../../support/pages/properties.po';
import { aliasQuery } from '../../support/graphql-utils';

let propertyInfo = null;

Before({}, () => {
  cy.fixture('property').then((json) => {
    cy.getUnduplicatedString(json.propertyName).then((propertyName) => {
      json.propertyName = propertyName;
    });
    propertyInfo = json;
  });
  cy.intercept('POST', Cypress.env('api'), (req) => {
    // Queries
    aliasQuery(req, 'search');
    aliasQuery(req, 'CMS_PropertyCommissionTiers');
  });
});

Given('I am on the properties page', () => gotoPropertiesScreen());

When('I filter the {string} properties', (status) => {
  filterDifferentStatusProperty(status);
});

Then('I should view {string} properties', (data) => {
  checkProperty(data);
});

When('I filter the {string}', (type) => {
  filterDifferentBookingTypeProperty(type);
});

Then('I should view {string}', (list) => checkPropertyBookingType(list));

When('I input {string} and filter', (name) => inputLandlordNameFilter(name));

Then('I should view {string} all properties', (name) =>
  checkPropertyLandlordName(name)
);

When('I click create new property', openPropertyCreationModel);

And('I fill in all mandatory field and submit', () => fillInProeprtyMandatoryFeilds(propertyInfo));

Then('I could see a new property created', () => showCreatedPropertySuccess());

When('I search property Name', () => searchpropertyName());

Then('I could see Property Homepage', () => showPropertyNameSuccess());

Then('I go to Property Management page', () => goToPropertyManagementPage());

Then('I edit property name and save', () => editPropertyName(propertyInfo));

Then('I edit property details and save', () => editPropertydetails(propertyInfo));

Then('I edit Property address and save', () => editPropertyAddress());

Then('I choose PropertyFacility and save', () => choosePropertyFacility());

Then('I go to {string} Property Page', (status) => gotoNewPropertyPage(status));

And('I modify Property Booking Type', () => modifyPropertyBookingType());

Then('I go to room config page', () => GotoRoomConfigPage());

And('I Add a room and save', () => Addrooms(propertyInfo));

Then('save success msg should be shown',()=>checkUpdateSuccess());

And('I edit a room name and save', () => EditroomsName(propertyInfo));

And('I delete a room', () => Deleteroom());

Then('I go to Price & Availability page',()=>GotoPriceAvailabilityPage());

And('I add listings Move in is {string} Tenancy length is {string} Move out is {string} Turnaround is {string} under room', (MoveinType,TenancyLengthType,MoveOutType,turnaroundType) => Addlisting(MoveinType,TenancyLengthType,MoveOutType,turnaroundType));

And('I copy to current room', () => CopyToCurrentRoom());

And('I update price min value', () => editListingDetails());

And('I delete a listing', () => deleteListing());

Then('I go to Commission Management page', () => goToCommissionManagementPage());

And('I go to set Commission', () => goToSetCommissions());

And('I fill in all mandatory field and save', () => fillCommissionsModalInfo(propertyInfo));