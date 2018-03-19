import { routerReducer } from "@ngrx/router-store";
import { ActionReducer, ActionReducerMap, MetaReducer } from "@ngrx/store";
import { storeFreeze } from "ngrx-store-freeze";
import { environment } from "../../environments/environment";
import { AppState } from "./app.interfaces";
import * as fromSnackbar from "./shared/reducers/snackbar";
import * as fromSpinner from "./shared/reducers/spinner";

export const appReducer: ActionReducerMap<AppState> = {
  router: routerReducer,
  snackbar: fromSnackbar.reducer,
  spinner: fromSpinner.reducer
};

export function logger(
  reducer: ActionReducer<AppState>
): ActionReducer<AppState> {
  return function(state: AppState, action: any): AppState {
    console.log("state", state);
    console.log("action", action);
    return reducer(state, action);
  };
}

export const appMetaReducers: MetaReducer<AppState>[] = !environment.production
  ? [logger, storeFreeze]
  : [];
