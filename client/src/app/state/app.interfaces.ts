import { RouterReducerState } from '@ngrx/router-store';
import * as fromSnackbar from './shared/reducers/snackbar';
import { RouterStateUrl } from "./shared/utils";

export interface AppState {
  router: RouterReducerState<RouterStateUrl>;
  snackbar: fromSnackbar.State;
}
