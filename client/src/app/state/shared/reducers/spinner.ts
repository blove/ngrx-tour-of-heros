import { SPINNER_HIDE, SPINNER_SHOW, SpinnerAction } from "../actions/spinner";

export interface State {
  show: boolean;
}

const initialState: State = {
  show: false
};

export function reducer(state: State = initialState, action: SpinnerAction) {
  switch (action.type) {
    case SPINNER_HIDE:
      return { ...state, show: false };
    case SPINNER_SHOW:
      return { ...state, show: true };
    default:
      return state;
  }
}

export const isShowing = (state: State) => state.show;
