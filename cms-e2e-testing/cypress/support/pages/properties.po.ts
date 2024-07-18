import { is } from 'cypress/types/bluebird';
import { split } from 'cypress/types/lodash';

const propertyStatusTag = '[data-test-id="property_status_tag"]';
const proeprtyBookingType = 'Booking Type';
const confirmButton = 'OK';
const listPropertyBookingType = '[data-test-id="property_type_tag"]';
const filterLandlordNameTag = ':nth-child(2) > .newSearch-noborderHeader-16';
const inputLandlordName = '[data-test-id="input_search"]';
const selectLandlordName = '.ant-checkbox-group > :nth-child(1)';
const listPropertyLandlordName = '[data-test-id="property_landlord_name"]';
const createPropertyBtn = '[type=button]';
const createPropertyTitle = '.property-create__title';
const selectItem = '.ant-select-selection__rendered';
const propertyNameInput = '[id=basic_information_form_name]';
const dropDownMenuPropertyType = '.ant-select-dropdown-menu-item';
const dropDownMenu = '[role="listbox"]';
const menuOptions = '.ant-select-dropdown-menu-item';
const cityAndLandlordInput = '.ant-select-search__field__wrap > .ant-input';
const nextBtn = '.steps-action > .ant-btn';
const addressSearchBtn = '.property-address__search-label';
const addressSearchInput = '#property_address_form_search';
const addressOptions = '.pac-item';
const stepTwoCityInput = '#property_address_form_city';
const propertyCreatedSuccessLabel = '.property-success__create-success';
const confirmPropertyName = '.create-confirmation__info-title';
const confirmInfoLabel = '.create-confirmation__text';
const searchPropertyName = '.ant-input';
const clickPropertyName= '.ant-select-dropdown-menu-item';
// const showbookingType = '.ant-select-selection-selected-value';
// const IntegratedBookingsType = 'Integrated Bookings';
// const manualBookingsType = 'Booking with Consultant';
// const InstantBookingsType = 'Reserve Room';
const PropertyManagement = '.property-homepage__card-title';
const NavigationBar = '.navigation-bar__selection';
const PropertyFacility = 'Property Facility';
const PropertyAddress = 'Property Address'
const PropertyDetails = 'Property Details';
const RoomConfig = 'Room Config';
const Addroom = 'Add room';
const FeaturesSlection = '.ant-checkbox';
const saveBtn = '.property-detail-wrapper__footer > [type="button"]';
const Propertyname = '#name';
const Propertybedcount = '#totalBeds';
const bedNums = '10'
const Cancellationpolicy = '.ql-editor'
const COVID19 = '.ql-editor'
const PropertytaglineCN = '#headlineCn'
const PropertytaglineEN = '#headline'
const Rankingvalue = '#rank'
const RankingNums = '100'
const Propertystatus = '[data-test-id="property_status_tag"]'
const BookingType = '#bookingJourney'
const AddressLine = '#address'
const newAddressLineValue = 'London'
const button = '[type="button"]'
const RoomName = '#roomsDetails_name'
const Roomtype = '#roomsDetails_category'
const BedCount = '#roomsDetails_bedCount'
const Unifiedsize= '#roomsDetails_unifiedSize_0'
const BathroomType = '#roomsDetails_bathroomType'
const editroom = '.room-detail__icon-wrap'
const successMsg = '.ant-message-success > span';
const PriceAvailability = 'Price & Availability'
const addlisting = '.listing-detail__add-listing-btn'
const priceMin = '#priceMin'
const priceMinValue = '100'
const Scheduledtopublishfrom = '#liveOn'
const Scheduledtopublishuntil = '#liveUntil'
const calendar = '.ant-calendar-date[aria-disabled="false"]'
const moveinDate= '#moveIn'
const moveOutDate = '#moveOut'
const inputTenancyLengValueMin = '#tenancyLengthValueMin'
const inputTenancyLengValueMax= '#tenancyLengthValueMax'
const subtitle = '#availableThoughMoveInDatePassed'
const icon = 'span.anticon.anticon-exclamation-circle'
const Availability = '#inventoryCount'
const listingName = '.listing-detail__table-room-name'
const copyButton = 'button.listing-detail__icon-wrap'
const copyToRoom = '.listing-detail__copy-to-room'
const Copytocurrentroom = 'Copy to current room'
const UpdatepriceMinValue = '120'
const commissionName = '#commission_form_name'
const commissionValue = '#commission_form_value'
const Effectivefrom = '#commission_form_effectiveFrom'
const addCommissionIcon = '.commission-list__add-icon'
const turnaround = '#turnaroundType'
const fixday = 'div.ant-input-number-input-wrap'
export const state = {
  route: '/properties',
};

export const gotoPropertiesScreen = () => cy.visit(state.route);

export const filterDifferentStatusProperty = (status) => {
  cy.get(propertyStatusTag).should('be.visible');
  cy.contains(status).click();
};

export const checkProperty = (data) => {
  cy.get(propertyStatusTag).each(($el, index, $list) => {
    expect($el.text()).to.be.oneOf(data.split(','));
  });
};

export const filterDifferentBookingTypeProperty = (type) => {
  cy.get(listPropertyBookingType).should('be.visible');
  cy.contains(proeprtyBookingType).click();
  cy.contains(type).click();
  cy.contains(confirmButton).click();
};

export const checkPropertyBookingType = (list) => {
  cy.get(listPropertyBookingType).each(($el, index, $list) => {
    expect($el.text()).eq(list);
  });
};

export const inputLandlordNameFilter = (landlord) => {
  cy.wait('@gqlsearchQuery').then(() => {
    cy.get(filterLandlordNameTag).click();
    cy.get(inputLandlordName).type(landlord);
    cy.get(selectLandlordName).click();
    cy.contains(confirmButton).click();
  });
};

export const checkPropertyLandlordName = (landlord) => {
  cy.get(listPropertyLandlordName).each(($el) => {
    expect($el.text()).eq(landlord);
  });
};

export const openPropertyCreationModel = () => {
  cy.get(createPropertyBtn).click();
  cy.get(createPropertyTitle).should('exist');
};

export const fillInProeprtyMandatoryFeilds = (propertyInfo) => {
  //select apartment type
  cy.get(selectItem).eq(2).click();
  cy.wait(2000);
  cy.get(dropDownMenuPropertyType)
    .contains(propertyInfo.propertyType)
    // .should('have.length.greaterThan', 0)
    .eq(0).click();

  //insert property name
  cy.get(propertyNameInput).type(propertyInfo.propertyName).should('have.value', propertyInfo.propertyName);
  

  //select city
  cy.get(cityAndLandlordInput).first().type(propertyInfo.city);
  cy.get(dropDownMenu).should('have.length', 2);
  cy.get(dropDownMenu).first().find(menuOptions).click();

  //select landlord
  cy.get(cityAndLandlordInput).eq(1).type(propertyInfo.landlordName);
  cy.get(dropDownMenu).should('have.length', 3);
  cy.get(dropDownMenu).find(menuOptions).eq(1).click();

  //select booking type
  cy.get(selectItem).eq(5).click();
  cy.get(dropDownMenu).should('have.length', 4);
  cy.get(dropDownMenu)
    .eq(3)
    .find(menuOptions)
    .should('have.length', 5)
    // pick a random item from the list
    .then(($li) => {
      const items = $li.toArray();
      return Cypress._.sample(items);
    })
    .click();

  //clicked the next button
  cy.get(nextBtn).click();

  //insert address
  cy.wait(1200);
  // cy.get(addressSearchBtn).scrollIntoView().should('be.visible').click();
  cy.get(addressSearchInput).type(propertyInfo.city);
  cy.get(addressOptions).should('have.length', 5).eq(4).click();
  cy.get(stepTwoCityInput).should('have.value', propertyInfo.city);
  cy.contains('Next').click();

  //go to the confirm view
  cy.get(confirmPropertyName).contains(propertyInfo.propertyName);
  cy.get(confirmInfoLabel).eq(2).contains(propertyInfo.propertyType);
  cy.get(confirmInfoLabel).eq(3).contains(propertyInfo.city);
  cy.get(confirmInfoLabel).eq(5).contains(propertyInfo.landlordName);

  //click confirm button
  cy.get(nextBtn).first().click();
};

export const showCreatedPropertySuccess = () => {
  cy.get(propertyCreatedSuccessLabel).should('be.visible');
};
// 
//search property Name that you created
export const searchpropertyName = () => {
  cy.get(searchPropertyName).type('property+');
  cy.wait(3000);
  cy.get(clickPropertyName).eq(-1).contains('property+').click();
};

export const showPropertyNameSuccess = () => {
  cy.contains('Property Homepage');
};


export const goToPropertyManagementPage = () =>{
    cy.contains('Property Homepage');
    cy.get(PropertyManagement).eq(0).click();
    cy.contains('Basic Information')
};
//edit property name
export const editPropertyName = (propertyInfo) =>{
  cy.get(NavigationBar).contains(PropertyDetails).click();
  cy.contains('Property name');
  cy.get(Propertyname).eq(0).clear().type(propertyInfo.propertyName).should('have.value', propertyInfo.propertyName);
  cy.get(saveBtn).eq(0).click();
  cy.wait(1000);
  cy.contains('Address line');
};

export const editPropertyAddress = () =>{
  cy.get(NavigationBar).contains(PropertyAddress).click();
  cy.contains('Address line');
  cy.get(AddressLine).eq(0).clear().type(newAddressLineValue);
  cy.get(saveBtn).eq(0).click();
};

export const choosePropertyFacility = () =>{
    cy.get(NavigationBar).contains(PropertyFacility).click();
    cy.contains('Features');
    cy.get(FeaturesSlection).eq(0).click();
    cy.get(saveBtn).eq(0).click();
};

export const editPropertydetails = (propertyInfo) =>{
  cy.get(NavigationBar).contains(PropertyDetails).click();
  cy.contains('Property name');
  cy.get(Propertybedcount).eq(0).clear().type(bedNums);
  cy.get(Cancellationpolicy).eq(0).clear().type(propertyInfo.propertyName);
  cy.get(COVID19).eq(0).clear().type(propertyInfo.propertyName);
  cy.get(PropertytaglineCN).eq(0).clear().type(propertyInfo.propertyName);
  cy.get(PropertytaglineEN).eq(0).clear().type(propertyInfo.propertyName);
  cy.get(Rankingvalue).eq(0).type(RankingNums);
  cy.get(saveBtn).eq(0).click();
  cy.wait(1000);
  cy.contains('Address line');

};

export const gotoNewPropertyPage = (status) => {
  cy.get(Propertystatus).first().should('exist');
  cy.get(Propertystatus).contains(status).click();
  cy.contains('Property Homepage');
};


export const modifyPropertyBookingType = () => {
    cy.get(BookingType).eq(0).click();
    cy.get(dropDownMenu).find(menuOptions).should('have.length', 5).then(($li) => {
      const items = $li.toArray();
      return Cypress._.sample(items);
    }).click();
    cy.get(saveBtn).eq(0).click();
    cy.wait(1000);
    cy.contains('Address line');
};

export const GotoRoomConfigPage = () =>{
  cy.get(NavigationBar).contains(RoomConfig).click();
}

export const Addrooms = (propertyInfo) =>{
  cy.get(button).contains(Addroom).click({force: true})
  cy.get(RoomName).eq(0).clear().type(propertyInfo.propertyName)
  cy.get(Roomtype).eq(0).click()
  cy.get(dropDownMenu).should('have.length', 1);
  cy.get(dropDownMenu).eq(0).find(menuOptions).should('have.length', 3).then(($li) => {
      const items = $li.toArray();
      return Cypress._.sample(items);
    }).click();
  cy.get(BedCount).eq(0).clear().type(bedNums)
  cy.get(Unifiedsize).eq(0).click()
  cy.get(dropDownMenu).should('have.length', 2);
  cy.get(dropDownMenu).eq(1).find(menuOptions).should('have.length', 7).then(($li) => {
    const items = $li.toArray();
    return Cypress._.sample(items);
  }).click();
  cy.get(BathroomType).eq(0).click()
  cy.get(dropDownMenu).should('have.length', 3);
  cy.get(dropDownMenu).eq(2).find(menuOptions).should('have.length', 5).then(($li) => {
    const items = $li.toArray();
    return Cypress._.sample(items);
  }).click();
  cy.get(button).contains('Save').click({force: true})
}

export const EditroomsName = (propertyInfo) =>{
  cy.get(editroom).eq(0).click({force: true})
  cy.get(RoomName).eq(0).clear().type(propertyInfo.propertyName)
  cy.get(button).contains('Save').click({force: true})
}

export const checkUpdateSuccess = () => {
  cy.get(successMsg).should('be.visible');
  cy.contains('successfully');
};

export const Deleteroom = () =>{
  cy.get(editroom).eq(2).click({force: true})
  cy.get(button).contains('Yes').click({force: true})
}

export const GotoPriceAvailabilityPage = () =>{
  cy.get(NavigationBar).contains(PriceAvailability).click();
}

export const Addlisting = (MoveinType,TenancyLengthType,MoveOutType,turnaroundType) =>{
  //选择Move in的类型及move in的日期
  cy.get(addlisting).eq(0).click({force: true});
  cy.get(selectItem).eq(2).click({force: true});
  cy.get(dropDownMenu).should('have.length', 1);
  cy.get(dropDownMenu).eq(0).find(menuOptions).should('have.length', 3).contains(MoveinType).click();
  if(MoveinType != 'Anytime'){
    //选择move in的类型为Anytime，则不用选择日期
    cy.get(moveinDate).eq(0).click()
    cy.get(calendar).its('length').then((elementCount) => {
      let selected_date = Cypress._.random(elementCount - 1);
      cy.get(calendar).eq(selected_date).click();
    });   
  }
  //选择Tenancy length (per week)的类型及输入tenancy length 的值
  cy.get(selectItem).eq(3).click({force: true});
  cy.get(dropDownMenu).should('have.length', 2);
  cy.get(dropDownMenu).eq(1).find(menuOptions).should('have.length', 5).contains(TenancyLengthType).click();
  if(TenancyLengthType != 'Not specific' && TenancyLengthType != 'Between'){
    cy.get(inputTenancyLengValueMin).eq(0).type('3')
  }
  else if(TenancyLengthType == 'Between'){
    //当Tenancy length (per week)的类型为between时，需要输入tenancy length 的MIN及MAX的值
    cy.get(inputTenancyLengValueMin).eq(0).type('3')
    cy.get(inputTenancyLengValueMax).eq(0).type('6')
  }
  //选择Move out的类型及move out的日期
  cy.get(selectItem).eq(4).click({force: true});
  cy.get(dropDownMenu).should('have.length', 3);
  cy.get(dropDownMenu).eq(2).find(menuOptions).should('have.length', 3).contains(MoveOutType).click();
  if(MoveOutType != 'Anytime'){
    //当move Out的类型为Anytime，则不用选择日期，反之需要选择日期
    cy.get(moveOutDate).eq(0).click()
    cy.get(calendar).its('length').then((elementCount) => {
      let selected_date = Cypress._.random(elementCount - 1);
      cy.get(calendar).eq(selected_date).click();
    });   
  }
  //根据是否存在【Available though Move in Date Passed】元素来判断booking type=reverse room
  //由于booking type = reverse room 在addlisting页面不同于其他booking type
  cy.get('div.listing-form-modal').then($div =>{
    if($div.find(subtitle).length){
      //Turnaround（只有当booking type = reverse room时才出现）
      cy.get(selectItem).eq(5).click({force: true});
      cy.get(dropDownMenu).should('have.length', 4);
      cy.get(dropDownMenu).eq(3).find(menuOptions).should('have.length', 2).contains(turnaroundType).click()
      if(turnaroundType == 'Fixed days'){
        cy.get(fixday).eq(2).type('10')
      }
      //输入Availability Number的值（当booking type = reverse room是输入框，其余是选择框）
      cy.get(Availability).eq(0).clear().type('20')
      //选择Price type 类型
      cy.get(selectItem).eq(6).click();
      cy.get(dropDownMenu).should('have.length', 5);
      cy.get(dropDownMenu).eq(4).find(menuOptions).should('have.length', 2).then(($li) => {
        const items = $li.toArray();
        return Cypress._.sample(items);
      }).click({force: true});
    }
    //booking type!= reverse room 
    else{
      //选择Availability Number的值（booking type!= reverse room）
      cy.get(selectItem).eq(5).click({force: true});
      cy.get(dropDownMenu).should('have.length', 4);
      cy.get(dropDownMenu).eq(3).find(menuOptions).should('have.length', 3).then(($li) => {
        const items = $li.toArray();
        return Cypress._.sample(items);
      }).click();
      cy.get('div.listing-form-modal').then($div =>{
        if($div.find(icon).length){
          cy.log('skip')
        }
        else{
          //选择Price type 类型
          cy.get(selectItem).eq(6).click();
          cy.get(dropDownMenu).should('have.length', 5);
          cy.get(dropDownMenu).eq(4).find(menuOptions).should('have.length', 2).then(($li) => {
            const items = $li.toArray();
            return Cypress._.sample(items);
          }).click();
        }
      })
    }
  })
  //输入price Min的值
  cy.get(priceMin).eq(0).clear().type(priceMinValue)
  //选择Scheduled to publish from的日期
  cy.get(Scheduledtopublishfrom).click()
  cy.get(calendar).its('length').then((elementCount) => {
    let selected_date = Cypress._.random(elementCount - 1);
    cy.get(calendar).eq(selected_date).click();
  });
  //选择Scheduled to publish until的日期
  cy.get(Scheduledtopublishuntil).click()
  cy.get(calendar).its('length').then(() => {
    cy.get(calendar).eq(-1).click({force:true});
  });
  cy.get(button).contains('Save').click({force: true})
}

//edit listing
export const editListingDetails = () =>{
  cy.get(listingName).eq(0).click()
  cy.get(copyButton).eq(0).click()
  cy.get(priceMin).eq(0).clear().type(UpdatepriceMinValue)
  cy.get(button).contains('Save').click({force: true})
}
//copy listing
export const CopyToCurrentRoom = () =>{
  cy.get(listingName).eq(0).click()
  cy.get(copyButton).eq(1).click()
  cy.get(copyToRoom).eq(0).contains(Copytocurrentroom).click()
  cy.get(button).contains('Save').click({force: true})
}

//delete listing
export const deleteListing = () =>{
  cy.get(listingName).eq(0).click()
  cy.get(copyButton).eq(2).click()
  cy.get(button).contains('Yes').click({force: true})
}

export const goToCommissionManagementPage = () =>{
  cy.get(PropertyManagement).contains('Commission Management').click();
  cy.contains('Commission Management')
};

export const goToSetCommissions = () => {
  cy.wait('@gqlCMS_PropertyCommissionTiersQuery')
    .its('response.body.data.property.commissionTiers')
    .then((Count) => {
      if (Count.length>=1) {
        cy.get(addCommissionIcon).eq(0).click() 
      } else {
        cy.get(button).contains('Go to set commission').click({force: true});
      }
    });
};

export const fillCommissionsModalInfo = (propertyInfo) =>{
  //选择Commission Category的值
  cy.get(selectItem).eq(2).click({force: true});
  cy.get(dropDownMenu).should('have.length', 1);
  cy.get(dropDownMenu).eq(0).find(menuOptions).should('have.length', 4).contains('Re-booker commission').click()
  //name
  cy.get(commissionName).eq(0).clear().type(propertyInfo.propertyName)
  //选择Commission Type
  cy.get(selectItem).eq(3).click({force: true});
  cy.get(dropDownMenu).should('have.length', 2);
  cy.get(dropDownMenu).eq(1).find(menuOptions).should('have.length', 3).then(($li) => {
    const items = $li.toArray();
    return Cypress._.sample(items);
  }).click();
  //commission value
  cy.get(commissionValue).eq(0).clear().type('30')
  //Effective from
  cy.get(Effectivefrom).eq(0).click()
  cy.get(calendar).its('length').then((elementCount) => {
    let selected_date = Cypress._.random(elementCount - 1);
    cy.get(calendar).eq(selected_date).click();
  });
  cy.get(button).contains('Continue').click();
  cy.get(button).contains('Yes').click({force: true});
}