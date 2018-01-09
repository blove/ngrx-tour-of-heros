import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState } from "../../app.interfaces";
import * as fromPowers from "./powers";

export interface PowersState {
  powers: fromPowers.State;
}

export interface State extends AppState {
  powers: PowersState;
}

export const reducers = {
  powers: fromPowers.reducer
};

export const getPowersState = createFeatureSelector<PowersState>('powers');

export const getPowersEntityState = createSelector(
  getPowersState,
  (state) => state.powers
);

export const {
  selectAll: getAllPowers,
  selectEntities: getPowerEntities,
  selectIds: getPowerIds,
  selectTotal: getPowersTotal
} = fromPowers.adapter.getSelectors(getPowersEntityState);

export const getSelectedPowerId = createSelector(
  getPowersEntityState,
  fromPowers.getSelectedPowerId
);

export const getSelectedPower = createSelector(
  getPowerEntities,
  getSelectedPowerId,
  (entities, selectedPowerId) => selectedPowerId && entities[selectedPowerId]
);

export const isPowerLoading = createSelector(
  getPowersEntityState,
  fromPowers.isLoading
);
