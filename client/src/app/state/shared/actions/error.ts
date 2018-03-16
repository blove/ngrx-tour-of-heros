import { HttpErrorResponse } from "@angular/common/http";
import { Action } from "@ngrx/store";
import { createActionType } from "../utils";

export const HTTP_ERROR = createActionType('HTTP_ERROR');


export class HttpError implements Action {
  readonly type = HTTP_ERROR;

  constructor(public payload: HttpErrorResponse) {}
}

export type ErrorAction = HttpError;
