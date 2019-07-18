import { tActions } from '../types/types';

export const ACTION_TYPES: { [key: string]: string } = {
  UPDATE_TEST: 'UPDATE_TEST',
};

const actions: tActions = {
  [ACTION_TYPES.UPDATE_TEST]: (state, action) => ({
    ...state,
    test: action.payload,
  }),
};

export default actions;
