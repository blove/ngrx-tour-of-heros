import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material";
import { Actions, Effect } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import "rxjs/add/observable/of";
import { Observable } from "rxjs/Observable";
import { catchError, map, mergeMap, retry, switchMap, tap } from "rxjs/operators";
import { PowersService } from "../../../core/services/powers.service";
import { AddPowerDialogComponent } from "../../../shared/dialogs/add-power-dialog/add-power-dialog.component";
import { HttpError } from "../../shared/actions/error";
import { SnackbarOpen } from "../../shared/actions/snackbar";
import {
  ADD_POWER,
  ADD_POWER_DIALOG_CLOSE,
  ADD_POWER_DIALOG_OPEN,
  ADD_POWER_SUCCESS,
  AddPower,
  AddPowerDialogClose,
  AddPowerDialogOpen,
  AddPowerSuccess,
  DELETE_POWER,
  DeletePower,
  DeletePowerSuccess,
  LOAD_POWER,
  LOAD_POWERS,
  LoadPower,
  LoadPowers,
  LoadPowersSuccess,
  LoadPowerSuccess,
  UPDATE_POWER,
  UPDATE_POWER_SUCCESS,
  UpdatePower,
  UpdatePowerSuccess
} from "../actions/powers";

@Injectable()
export class PowersEffects {

  @Effect()
  addPower: Observable<Action> = this.actions.ofType<AddPower>(ADD_POWER)
    .pipe(
      map(action => action.payload),
      switchMap(power => this.powersService.createPower(power).pipe(retry(3))),
      map(power => new AddPowerSuccess(power)),
      catchError((e: HttpErrorResponse) => Observable.of(new HttpError(e)))
    );

  @Effect()
  addPowerSuccess: Observable<Action> = this.actions.ofType<AddPowerSuccess>(ADD_POWER_SUCCESS)
    .pipe(
      mergeMap(() => [
        new SnackbarOpen({
          message: 'Power Created',
          action: 'Success'
        }),
        new AddPowerDialogClose()
      ])
    );

  @Effect({
    dispatch: false
  })
  addPowerDialogClose: Observable<any> = this.actions.ofType<AddPowerDialogClose>(ADD_POWER_DIALOG_CLOSE)
    .pipe(
      tap(() => this.matDialog.closeAll())
    );

  @Effect({
    dispatch: false
  })
  addPowerDialogOpen: Observable<any> = this.actions.ofType<AddPowerDialogOpen>(ADD_POWER_DIALOG_OPEN)
    .pipe(
      tap(() => this.matDialog.open(AddPowerDialogComponent))
    );

  @Effect()
  deletePower: Observable<Action> = this.actions.ofType<DeletePower>(DELETE_POWER)
    .pipe(
      map(action => action.payload),
      switchMap(power => this.powersService.deletePower(power).pipe(retry(3))),
      map(power => new DeletePowerSuccess(power)),
      catchError((e: HttpErrorResponse) => Observable.of(new HttpError(e)))
    );

  @Effect()
  loadPowers: Observable<Action> = this.actions.ofType<LoadPowers>(LOAD_POWERS)
    .pipe(
      switchMap(() => this.powersService.getPowers().pipe(retry(3))),
      map(powers => new LoadPowersSuccess(powers)),
      catchError((e: HttpErrorResponse) => Observable.of(new HttpError(e)))
    );

  @Effect()
  loadPower: Observable<Action> = this.actions.ofType<LoadPower>(LOAD_POWER)
    .pipe(
      map(action => action.payload),
      switchMap(payload => this.powersService.getPower(payload.id).pipe(retry(3))),
      map(power => new LoadPowerSuccess(power)),
      catchError((e: HttpErrorResponse) => Observable.of(new HttpError(e)))
    );

  @Effect()
  updatePower: Observable<Action> = this.actions.ofType<UpdatePower>(UPDATE_POWER)
    .pipe(
      map(action => action.payload),
      switchMap(power => this.powersService.updatePower(power).pipe(retry(3))),
      map(power => new UpdatePowerSuccess(power)),
      catchError((e: HttpErrorResponse) => Observable.of(new HttpError(e)))
    );

  @Effect()
  updatePowerSuccess: Observable<Action> = this.actions.ofType<UpdatePowerSuccess>(UPDATE_POWER_SUCCESS)
    .pipe(
      map(() => new SnackbarOpen({
        message: 'Power Updated',
        action: 'Success'
      }))
    );

  constructor(private actions: Actions,
              private matDialog: MatDialog,
              private powersService: PowersService) {
  }

}
