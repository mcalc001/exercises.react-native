import { createReducer, ActionType } from 'typesafe-actions';
import { Fixture } from '../../core/api/models';
import * as actions from './actions';

export interface State {
  fixturesLoading: boolean;
  fixtures: Fixture[];
}

export const defaultState: State = {
  fixturesLoading: false,
  fixtures: []
};

// A stub is required for the sign out reducer (because of type-safe actions typing)
export default createReducer<State, ActionType<typeof actions>>(defaultState)
  .handleAction(actions.getFixtures.request, state => ({
    ...state,
    fixturesLoading: true
  }))
  .handleAction(actions.getFixtures.success, (state, action) => ({
    ...state,
    fixturesLoading: false,
    fixtures: action.payload
  }))
  .handleAction(actions.getFixtures.failure, state => ({
    ...state,
    fixturesLoading: false
  }));
