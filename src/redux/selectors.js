import { createSelector } from 'reselect';

const selectCurrency = (state) => state.currency;
const selectInitialPayment = (state) => state.initialPayment;
const selectCurrentPayment = (state) => state.currentPayment;
const selectDate = (state) => state.date;
const selectInitialPercentage = (state) => state.initialPercentage;
const selectPaid = (state) => state.paid;
const selectEdit = (state) => state.edit;
const selectPayments = (state) => state.payments;

export const selectLoanData = createSelector(
  [
    selectCurrency,
    selectInitialPayment,
    selectCurrentPayment,
    selectDate,
    selectPaid,
    selectInitialPercentage,
    selectEdit,
    selectPayments,
  ],
  (
    currency,
    initialPayment,
    currentPayment,
    date,
    paid,
    initialPercentage,
    edit,
    payments,
  ) => ({
    currency,
    initialPayment,
    currentPayment,
    date,
    paid,
    initialPercentage,
    edit,
    payments,
  }),
);
