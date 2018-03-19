import { RouterReducerState } from "@ngrx/router-store";
import * as fromSnackbar from "./shared/reducers/snackbar";
import * as fromSpinner from "./shared/reducers/spinner";
import { RouterStateUrl } from "./shared/utils";

export interface AppState {
  router: RouterReducerState<RouterStateUrl>;
  snackbar: fromSnackbar.State;
  spinner: fromSpinner.State;
}
