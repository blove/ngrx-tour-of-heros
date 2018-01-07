import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { Observable } from "rxjs/Observable";
import { map, switchMap } from "rxjs/operators";
import { PowersService } from "../../../core/services/powers.service";
import {
  ADD_POWER, AddPower, AddPowerSuccess, DELETE_POWER, DeletePower, DeletePowerSuccess, LOAD_POWER, LOAD_POWERS,
  LoadPower, LoadPowers, LoadPowersSuccess, LoadPowerSuccess, UPDATE_POWER, UpdatePower, UpdatePowerSuccess
} from "../actions/powers";


@Injectable()
export class PowersEffects {

  @Effect()
  addPower: Observable<Action> = this.actions.ofType<AddPower>(ADD_POWER)
    .pipe(
      map(action => action.payload),
      switchMap(power => this.powersService.createPower(power)),
      map(power => new AddPowerSuccess(power))
    );

  @Effect()
  deletePower: Observable<Action> = this.actions.ofType<DeletePower>(DELETE_POWER)
    .pipe(
      map(action => action.payload),
      switchMap(power => this.powersService.deletePower(power)),
      map(power => new DeletePowerSuccess(power))
    );

  @Effect()
  loadPowers: Observable<Action> = this.actions.ofType<LoadPowers>(LOAD_POWERS)
    .pipe(
      switchMap(() => this.powersService.getPowers()),
      map(powers => new LoadPowersSuccess(powers))
    );

  @Effect()
  loadPower: Observable<Action> = this.actions.ofType<LoadPower>(LOAD_POWER)
    .pipe(
      map(action => action.payload),
      switchMap(payload => this.powersService.getPower(payload.id)),
      map(power => new LoadPowerSuccess(power))
    );

  @Effect()
  updatePower: Observable<Action> = this.actions.ofType<UpdatePower>(UPDATE_POWER)
    .pipe(
      map(action => action.payload),
      switchMap(power => this.powersService.updatePower(power)),
      map(power => new UpdatePowerSuccess(power))
    );

  constructor(private actions: Actions,
              private powersService: PowersService) {
  }

}
