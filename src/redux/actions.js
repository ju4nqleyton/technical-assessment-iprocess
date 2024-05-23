import {
  SET_INITIAL_VALUE,
  SET_EDIT,
  ADD_PAYMENT,
  UPDATE_PAYMENT,
  FINISH_PAYMENT,
  DELETE_PAYMENT,
} from './types';

export const setInitialValue = (currency, initialPayment, date) => ({
  type: SET_INITIAL_VALUE,
  payload: { currency, initialPayment, date },
});

export const setEdit = () => ({
  type: SET_EDIT,
});

export const addPayment = (payment) => ({
  type: ADD_PAYMENT,
  payload: payment,
});

export const updatePayment = (payment) => ({
  type: UPDATE_PAYMENT,
  payload: payment,
});

export const finishPayment = () => ({
  type: FINISH_PAYMENT,
});

export const deletePayment = (payment) => ({
  type: DELETE_PAYMENT,
  payload: payment,
});
