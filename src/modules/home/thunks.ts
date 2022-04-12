import { api } from '../../core/api';
import { SearchRequest } from '../../core/api/endpoints/news';
import { ThunkResult } from '../../store/redux';
import { getNewsArticles } from './actions';

export const getNewsArticlesAsync = (
  page: number,
  pageSize: number
): ThunkResult<Promise<void>> => {
  const searchRequest: SearchRequest = { page, pageSize };
  return async dispatch => {
    try {
      dispatch(getNewsArticles.request());
      dispatch(getNewsArticles.success(await api.news.get(searchRequest)));
    } catch (error) {
      dispatch(getNewsArticles.failure());
    }
  };
};
