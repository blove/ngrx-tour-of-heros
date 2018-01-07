import { Action } from "@ngrx/store";
import { Power } from "../../../core/models/power.model";
import { createActionType } from "../../shared/utils";

export const ADD_POWER = createActionType('ADD_POWER');
export const ADD_POWER_SUCCESS = createActionType('ADD_POWER_SUCCESS');
export const DELETE_POWER = createActionType('DELETE_POWER');
export const DELETE_POWER_SUCCESS = createActionType('DELETE_POWER_SUCCESS');
export const LOAD_POWERS = createActionType('LOAD_POWERS');
export const LOAD_POWERS_SUCCESS = createActionType('LOAD_POWERS_SUCCESS');
export const LOAD_POWER = createActionType('LOAD_POWER');
export const LOAD_POWER_SUCCESS = createActionType('LOAD_POWER_SUCCESS')
export const SELECT_POWER = createActionType('SELECT_POWER');
export const UPDATE_POWER = createActionType('UPDATE_POWER');
export const UPDATE_POWER_SUCCESS = createActionType('UPDATE_POWER_SUCCESS');

export class AddPower implements Action {
  readonly type = ADD_POWER;

  constructor(public payload: Power) {
  }
}

export class AddPowerSuccess implements Action {
  readonly type = ADD_POWER_SUCCESS;

  constructor(public payload: Power) {
  }
}

export class DeletePower implements Action {
  readonly type = DELETE_POWER;

  constructor(public payload: Power) {
  }
}

export class DeletePowerSuccess implements Action {
  readonly type = DELETE_POWER_SUCCESS;

  constructor(public payload: Power) {
  }
}

export class LoadPowers implements Action {
  readonly type = LOAD_POWERS;
}

export class LoadPowersSuccess implements Action {
  readonly type = LOAD_POWERS_SUCCESS;

  constructor(public payload: Power[]) {
  }
}

export class LoadPower implements Action {
  readonly type = LOAD_POWER;

  constructor(public payload: { id: number }) {
  }
}

export class LoadPowerSuccess implements Action {
  readonly type = LOAD_POWER_SUCCESS;

  constructor(public payload: Power) {
  }
}

export class SelectPower implements Action {
  readonly type = SELECT_POWER;

  constructor(public payload: { id: number }) {
  }
}

export class UpdatePower implements Action {
  readonly type = UPDATE_POWER;

  constructor(public payload: Power) {
  }
}

export class UpdatePowerSuccess implements Action {
  readonly type = UPDATE_POWER_SUCCESS;

  constructor(public payload: Power) {
  }
}

export type PowersAction =
  AddPower
  | AddPowerSuccess
  | DeletePower
  | DeletePowerSuccess
  | LoadPowers
  | LoadPowersSuccess
  | LoadPower
  | LoadPowerSuccess
  | SelectPower
  | UpdatePower
  | UpdatePowerSuccess;
