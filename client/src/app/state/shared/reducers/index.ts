import { createSelector, createFeatureSelector } from "@ngrx/store";

import * as fromSpinner from "./spinner";

export const selectSpinnerEntity = createFeatureSelector<fromSpinner.State>(
  "spinner"
);
export const isSpinnerShowing = createSelector(
  selectSpinnerEntity,
  fromSpinner.isShowing
);
