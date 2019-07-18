interface IMainState {
  test: string;
}

interface IAction {
  type: string;
  payload: any;
}

export { IAction, IMainState };
