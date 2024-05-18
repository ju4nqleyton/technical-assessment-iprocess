import { createSelector } from 'reselect';

const selectInitialLoan = (state) => state.initialLoan;
const selectCurrency = (state) => state.currency;

export const selectLoanData = createSelector(
  [selectInitialLoan, selectCurrency],
  (initialLoan, currency) => ({
    initialLoan,
    currency,
  }),
);
