
import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import 'rxjs/add/observable/of';
import { Observable } from 'rxjs/Observable';
import {
  catchError,
  map,
  mergeMap,
  retry,
  switchMap,
  tap
} from 'rxjs/operators';

import { AddHeroDialogComponent } from './../../../+heroes/components/add-hero-dialog/add-hero-dialog.component';
import { HeroesService } from './../../../core/services/heroes.service';
import { HideSpinner, ShowSpinner } from '../../shared/actions/spinner';
import { HttpError } from '../../shared/actions/error';
import { SnackbarOpen } from '../../shared/actions/snackbar';
import {
  ADD_HERO,
  ADD_HERO_DIALOG_CLOSE,
  ADD_HERO_DIALOG_OPEN,
  ADD_HERO_SUCCESS,
  AddHero,
  AddHeroDialogClose,
  AddHeroDialogOpen,
  AddHeroSuccess,
  DELETE_HERO,
  DELETE_HERO_SUCCESS,
  DeleteHero,
  DeleteHeroSuccess,
  LOAD_HERO,
  LOAD_HERO_SUCCESS,
  LOAD_HEROS,
  LOAD_HEROS_SUCCESS,
  LoadHero,
  LoadHeroes,
  LoadHerosSuccess,
  LoadHeroSuccess,
  UPDATE_HERO,
  UPDATE_HERO_SUCCESS,
  UpdateHero,
  UpdateHeroSuccess
} from '../actions/heroes';

type showSpinnerTypes =
  | AddHero
  | DeleteHero
  | LoadHero
  | LoadHeroes
  | UpdateHero;

const showSpinnerActions = [
  ADD_HERO,
  DELETE_HERO,
  LOAD_HERO,
  LOAD_HEROS,
  UPDATE_HERO
];

type hideSpinnerTypes =
  | AddHeroSuccess
  | DeleteHeroSuccess
  | LoadHerosSuccess
  | LoadHerosSuccess
  | UpdateHeroSuccess;

const hideSpinnerActions = [
  ADD_HERO_SUCCESS,
  DELETE_HERO_SUCCESS,
  LOAD_HERO_SUCCESS,
  LOAD_HEROS_SUCCESS,
  UPDATE_HERO_SUCCESS
];

@Injectable()
export class HerosEffects {
  @Effect()
  showSpinner: Observable<Action> = this.actions
    .ofType<showSpinnerTypes>(...showSpinnerActions)
    .pipe(map(() => new ShowSpinner()));

  @Effect()
  hideSpinner: Observable<Action> = this.actions
    .ofType<hideSpinnerTypes>(...hideSpinnerActions)
    .pipe(map(() => new HideSpinner()));

  @Effect()
  addHero: Observable<Action> = this.actions
    .ofType<AddHero>(ADD_HERO)
    .pipe(
      map(action => action.payload),
      switchMap(power => this.heroesService.createHero(power).pipe(retry(3))),
      map(power => new AddHeroSuccess(power)),
      catchError((e: HttpErrorResponse) => Observable.of(new HttpError(e)))
    );

  @Effect()
  addHeroSuccess: Observable<Action> = this.actions
    .ofType<AddHeroSuccess>(ADD_HERO_SUCCESS)
    .pipe(
      mergeMap(() => [
        new SnackbarOpen({
          message: 'Hero Created',
          action: 'Success'
        }),
        new AddHeroDialogClose()
      ])
    );

  @Effect({
    dispatch: false
  })
  addHeroDialogClose: Observable<any> = this.actions
    .ofType<AddHeroDialogClose>(ADD_HERO_DIALOG_CLOSE)
    .pipe(tap(() => this.matDialog.closeAll()));

  @Effect({
    dispatch: false
  })
  addHeroDialogOpen: Observable<any> = this.actions
    .ofType<AddHeroDialogOpen>(ADD_HERO_DIALOG_OPEN)
    .pipe(tap(() => this.matDialog.open(AddHeroDialogComponent)));

  @Effect()
  deleteHero: Observable<Action> = this.actions
    .ofType<DeleteHero>(DELETE_HERO)
    .pipe(
      map(action => action.payload),
      switchMap(power => this.heroesService.deleteHero(power).pipe(retry(3))),
      map(power => new DeleteHeroSuccess(power)),
      catchError((e: HttpErrorResponse) => Observable.of(new HttpError(e)))
    );

  @Effect()
  deleteHeroSuccess: Observable<Action> = this.actions
    .ofType<DeleteHeroSuccess>(DELETE_HERO_SUCCESS)
    .pipe(
      map(() =>
        new SnackbarOpen({
          message: 'Hero Deleted.',
          action: 'Success'
        })
      )
    );

  @Effect()
  loadHeros: Observable<Action> = this.actions
    .ofType<LoadHeroes>(LOAD_HEROS)
    .pipe(
      switchMap(() => this.heroesService.getHeroes().pipe(retry(3))),
      map(powers => new LoadHerosSuccess(powers)),
      catchError((e: HttpErrorResponse) => Observable.of(new HttpError(e)))
    );

  @Effect()
  loadHero: Observable<Action> = this.actions
    .ofType<LoadHero>(LOAD_HERO)
    .pipe(
      map(action => action.payload),
      switchMap(payload =>
        this.heroesService.getHero(payload.id).pipe(retry(3))
      ),
      map(power => new LoadHeroSuccess(power)),
      catchError((e: HttpErrorResponse) => Observable.of(new HttpError(e)))
    );

  @Effect()
  updateHero: Observable<Action> = this.actions
    .ofType<UpdateHero>(UPDATE_HERO)
    .pipe(
      map(action => action.payload),
      switchMap(power => this.heroesService.updateHero(power).pipe(retry(3))),
      map(power => new UpdateHeroSuccess(power)),
      catchError((e: HttpErrorResponse) => Observable.of(new HttpError(e)))
    );

  @Effect()
  updateHeroSuccess: Observable<Action> = this.actions
    .ofType<UpdateHeroSuccess>(UPDATE_HERO_SUCCESS)
    .pipe(
      map(
        () =>
          new SnackbarOpen({
            message: 'Hero Updated',
            action: 'Success'
          })
      )
    );

  constructor(
    private actions: Actions,
    private matDialog: MatDialog,
    private heroesService: HeroesService
  ) {}
}
