import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material";
import { Actions, Effect } from "@ngrx/effects";
import { Observable } from "rxjs/Observable";
import { delay, map, tap } from "rxjs/operators";
import { SNACKBAR_CLOSE, SNACKBAR_OPEN, SnackbarClose, SnackbarOpen } from "../actions/snackbar";

@Injectable()
export class SnackbarEffects {

  @Effect({
    dispatch: false
  })
  closeSnackbar: Observable<any> = this.actions.ofType(SNACKBAR_CLOSE)
    .pipe(
      tap(() => this.matSnackBar.dismiss())
    );

  @Effect()
  showSnackbar: Observable<any> = this.actions.ofType<SnackbarOpen>(SNACKBAR_OPEN)
    .pipe(
      map((action: SnackbarOpen) => action.payload),
      tap(payload => this.matSnackBar.open(payload.message, payload.action, payload.config)),
      delay(2000),
      map(() => new SnackbarClose())
    );

  constructor(private actions: Actions,
              private matSnackBar: MatSnackBar) {
  }

}
