import { Action } from "@ngrx/store";
import { createActionType } from "../utils";

export const SPINNER_SHOW = createActionType("SPINNER_SHOW");
export const SPINNER_HIDE = createActionType("SPINNER_HIDE");

export class HideSpinner implements Action {
  readonly type = SPINNER_HIDE;
}

export class ShowSpinner implements Action {
  readonly type = SPINNER_SHOW;
}

export type SpinnerAction = ShowSpinner | HideSpinner;
