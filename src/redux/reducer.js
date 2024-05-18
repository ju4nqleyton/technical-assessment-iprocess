import { SAVE_VALUE } from './types';

const initialState = {
  initialLoan: 0,
  currency: '',
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SAVE_VALUE:
      return {
        ...state,
        initialLoan: payload.total,
        currency: payload.currency,
      };
    default:
      return state;
  }
};

export default reducer;
