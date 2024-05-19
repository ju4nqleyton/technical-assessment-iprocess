import { SET_INITIAL_VALUE, SET_EDIT, ADD_PAYMENT } from './types';

export const setInitialValue = (currency, initialLoan, initialDate) => ({
  type: SET_INITIAL_VALUE,
  payload: { currency, initialLoan, initialDate },
});

export const setEdit = () => ({
  type: SET_EDIT,
});

export const addPayment = (payment) => ({
  type: ADD_PAYMENT,
  payload: payment,
});
