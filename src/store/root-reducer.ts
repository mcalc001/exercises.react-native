import { combineReducers } from 'redux';
import fixtures from '../modules/fixtures/reducer';

import { Reducer, StateType, RootAction } from 'typesafe-actions';

const appReducer = combineReducers({
  fixtures
});

type RootState = StateType<typeof appReducer>;

const rootReducer: Reducer<RootState, RootAction> = (state, action) => {
  return appReducer(state, action);
};
const builder = () => rootReducer;
export default builder;
