import { api } from '../../core/api';
import { ThunkResult } from '../../store/redux';
import { getFixtures } from './actions';

export const getFixturesAsync = (): ThunkResult<Promise<void>> => {
  return async dispatch => {
    try {
      dispatch(getFixtures.request());
      dispatch(getFixtures.success(await api.fixtures.get()));
    } catch (error) {
      dispatch(getFixtures.failure());
    }
  };
};
