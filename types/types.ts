import { IMainState, IAction } from './store';

type tActions = {
  [key: string]: (state: IMainState, action: IAction) => IMainState;
};

export { tActions };
