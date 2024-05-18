import { SAVE_VALUE } from './types';

export const saveValue = (total, currency) => ({
  type: SAVE_VALUE,
  payload: { total, currency },
});
