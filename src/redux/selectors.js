import { createSelector } from 'reselect';

const selectCurrency = (state) => state.currency;
const selectInitialLoan = (state) => state.initialLoan;
const selectInitialDate = (state) => state.initialDate;
const selectInitialPercentage = (state) => state.initialPercentage;
const selectEdit = (state) => state.edit;
const selectPayments = (state) => state.payments;

export const selectLoanData = createSelector(
  [
    selectCurrency,
    selectInitialLoan,
    selectInitialDate,
    selectInitialPercentage,
    selectEdit,
    selectPayments,
  ],
  (currency, initialLoan, initialDate, initialPercentage, edit, payments) => ({
    currency,
    initialLoan,
    initialDate,
    initialPercentage,
    edit,
    payments,
  }),
);
