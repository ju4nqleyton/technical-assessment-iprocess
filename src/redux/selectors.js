import { createSelector } from 'reselect';

const selectCurrency = (state) => state.currency;
const selectInitialLoan = (state) => state.initialLoan;
const selectInitialDate = (state) => state.initialDate;
const selectInitialPercentage = (state) => state.initialPercentage;
const selectEdit = (state) => state.edit;

export const selectLoanData = createSelector(
  [
    selectCurrency,
    selectInitialLoan,
    selectInitialDate,
    selectInitialPercentage,
    selectEdit,
  ],
  (currency, initialLoan, initialDate, initialPercentage, edit) => ({
    currency,
    initialLoan,
    initialDate,
    initialPercentage,
    edit,
  }),
);
