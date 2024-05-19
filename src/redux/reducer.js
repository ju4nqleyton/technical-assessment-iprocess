import { SET_INITIAL_VALUE, SET_EDIT, ADD_PAYMENT } from './types';

const initialState = {
  currency: '',
  initialLoan: 0,
  initialDate: null,
  initialPercentage: 0,
  edit: false,
  payments: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_INITIAL_VALUE:
      return {
        ...state,
        currency: payload.currency,
        initialLoan: payload.initialLoan,
        initialDate: payload.initialDate,
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
        payments: [...state.payments, payload],
      };
    default:
      return state;
  }
};

export default reducer;
