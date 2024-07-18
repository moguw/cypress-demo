export const state = {
  route: '/referral/payout',
};

const payoutStatus = 'span.ant-tag.payout-list__body__list__tag';
const successMsg = '.ant-message-success > span';
const approveBtn =
  'tr > td:nth-child(1) > div:nth-child(1) > div:nth-child(1) > button';
const settlementListBtn = '.payout-list__header__button';
const approvedAmountLabel =
  'div > div > span > span.ant-statistic-content-value-int';
const approveSuccessMsg = 'Add to Settlement List success';
const removeApproveSuccessMsg = 'Remove from Settlement List success';
const removeFromListBtn = 'div.payout-list__drawer__footer > button';
const settlementListSelectAllBox = 'div.payout-list__drawer__list  th.ant-table-selection-column';

export const gotoPayoutScreen = () => {
  cy.visit(state.route);
  cy.get(payoutStatus).first().should('exist');
};

export const goToSelectedTab = (tabName) => {
  cy.contains(tabName).should('exist').click();
};

export const checkPayoutStatus = () => {
  cy.get(payoutStatus).each(($el) => expect($el.text()).eq('Settled'));
};

export const approvePendingPayout = () => {
  cy.wait('@gqlCMS_Partner_Payout_ListsQuery')
    .its('response.body.data.listPartnerPayoutRecords.edges')
    .then((payouts) => {
      for (let i = 0; i < payouts.length; i++) {
        let payout = payouts[i];
        if (
          payout['node']['currency'] == 'CNY' &&
          payout['node']['status'] == 'PENDING_APPROVAL'
        ) {
          cy.get(approveBtn).eq(i).click();
          break;
        }
      }
    });
};

export const checkShowSuccessMsg = (type) => {
  if (type == 'remove') {
    cy.get(successMsg).should('contain', removeApproveSuccessMsg)
  } else {
    cy.get(successMsg).should('contain', approveSuccessMsg)
  }
};

export const removeApprovedPayout = () => {
  cy.get(settlementListBtn).should('exist').eq(1).click();
  cy.get(settlementListSelectAllBox).click();
  cy.get(removeFromListBtn).click();
};
