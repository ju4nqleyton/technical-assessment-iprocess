import {
  SET_INITIAL_VALUE,
  SET_EDIT,
  ADD_PAYMENT,
  UPDATE_PAYMENT,
  IS_PAID,
} from './types';

import {
  calculateNewPayment,
  PAYMENT_ADVANCE,
  updatePayment,
} from '../utils/helpers';

// Me decido por Redux para poder almacenar todo el estado de la aplicación en un solo lugar, de esta forma puedo acceder a la información desde cualquier componente.
// Principalmente fue una decision personal, me parecia mas ordenado y escalable.

const initialState = {
  currency: null,
  initialPayment: null,
  currentPayment: null,
  date: null,
  initialPercentage: null,
  paid: false,
  edit: false,
  payments: [PAYMENT_ADVANCE],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_INITIAL_VALUE:
      return {
        ...state,
        currency: payload.currency,
        initialPayment: payload.initialPayment,
        currentPayment: payload.initialPayment,
        date: payload.date,
        initialPercentage: 100,
      };
    case SET_EDIT:
      return {
        ...state,
        edit: !state.edit,
      };
    case ADD_PAYMENT:
      return {
        ...state,
        payments: calculateNewPayment(state.payments, payload),
      };
    case UPDATE_PAYMENT:
      return {
        ...state,
        ...updatePayment(
          state.payments,
          payload,
          state.currentPayment,
          state.initialPayment,
        ),
      };
    case IS_PAID:
      return {
        ...state,
        paid: true,
      };
    default:
      return state;
  }
};

export default reducer;
