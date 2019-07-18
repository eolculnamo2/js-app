import { IMainState, IAction } from '../types/store';
import actions from './mainActions';

function mainReducer(state: IMainState, action: IAction) {
  return actions[action.type](state, action);
}

export default mainReducer;
