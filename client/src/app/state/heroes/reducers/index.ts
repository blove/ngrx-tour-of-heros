import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../../app.interfaces';
import * as fromHeroes from './heroes';

export interface HeroesState {
  heroes: fromHeroes.State;
}

export interface State extends AppState {
  heroes: HeroesState;
}

export const reducers = {
  heroes: fromHeroes.reducer
};

export const getHeroesState = createFeatureSelector<HeroesState>('heroes');

export const getHeroesEntityState = createSelector(
  getHeroesState,
  state => state.heroes
);

export const {
  selectAll: getAllHeroes,
  selectEntities: getHeroEntities,
  selectIds: getHeroIds,
  selectTotal: getHeroesTotal
} = fromHeroes.adapter.getSelectors(getHeroesEntityState);

export const getSelectedHeroId = createSelector(
  getHeroesEntityState,
  fromHeroes.getSelectedHeroId
);

export const getSelectedHero = createSelector(
  getHeroEntities,
  getSelectedHeroId,
  (entities, selectedHeroId) => selectedHeroId && entities[selectedHeroId]
);
