import { SNACKBAR_CLOSE, SNACKBAR_OPEN, SnackbarAction } from "../actions/snackbar";

export interface State {
  show: boolean;
}

const initialState: State = {
  show: false
};

export function reducer(state: State = initialState, action: SnackbarAction) {
  switch(action.type) {
    case SNACKBAR_CLOSE:
      return { ...state, show: false };
    case SNACKBAR_OPEN:
      return { ...state, show: true };
    default:
      return state;
  }
}
