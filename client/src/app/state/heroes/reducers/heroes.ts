import { Hero } from './../../../core/models/hero.model';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

import {
  ADD_HERO_DIALOG_CLOSE,
  ADD_HERO_DIALOG_OPEN,
  ADD_HERO_SUCCESS,
  DELETE_HERO_SUCCESS,
  LOAD_HERO_SUCCESS,
  LOAD_HEROS,
  LOAD_HEROS_SUCCESS,
  HerosAction,
  SELECT_HERO,
  UPDATE_HERO_SUCCESS
} from '../actions/heroes';

export interface State extends EntityState<Hero> {
  addDialogShow: boolean;
  selectedHeroId: number;
}

export const adapter: EntityAdapter<Hero> = createEntityAdapter();

const initialState: State = adapter.getInitialState({
  addDialogShow: false,
  selectedHeroId: null
});

export function reducer(state: State = initialState, action: HerosAction) {
  switch (action.type) {
    case ADD_HERO_DIALOG_CLOSE:
      return { ...state, addDialogShow: false };
    case ADD_HERO_DIALOG_OPEN:
      return { ...state, addDialogShow: true };
    case ADD_HERO_SUCCESS:
      return adapter.addOne(action.payload, state);
    case DELETE_HERO_SUCCESS:
      return adapter.removeOne(action.payload.id, state);
    case LOAD_HERO_SUCCESS:
      return adapter.addOne(action.payload, state);
    case LOAD_HEROS_SUCCESS:
      return adapter.addAll(action.payload, state);
    case SELECT_HERO:
      return { ...state, selectedHeroId: action.payload.id };
    case UPDATE_HERO_SUCCESS:
      return adapter.updateOne(
        {
          id: action.payload.id,
          changes: action.payload
        },
        state
      );
    default:
      return state;
  }
}

export const getSelectedHeroId = (state: State) => state.selectedHeroId;
