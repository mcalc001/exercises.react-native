import { createReducer, ActionType } from 'typesafe-actions';
import { NewsArticle } from '../../core/api/models';
import * as actions from './actions';

export interface State {
  newsArticlesLoading: boolean;
  newsArticles: NewsArticle[];
  dataSetComplete: boolean;
}

export const defaultState: State = {
  newsArticlesLoading: false,
  newsArticles: [],
  dataSetComplete: false
};

// A stub is required for the sign out reducer (because of type-safe actions typing)
export default createReducer<State, ActionType<typeof actions>>(defaultState)
  .handleAction(actions.getNewsArticles.request, state => ({
    ...state,
    newsArticlesLoading: true
  }))
  .handleAction(actions.getNewsArticles.success, (state, action) => ({
    ...state,
    newsArticlesLoading: false,
    newsArticles: Array.from(
      new Set([...state.newsArticles, ...action.payload])
    ),
    dataSetComplete: !action.payload.length
  }))
  .handleAction(actions.getNewsArticles.failure, state => ({
    ...state,
    newsArticlesLoading: false,
    dataSetComplete: false
  }));
