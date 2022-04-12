import { createAsyncAction } from 'typesafe-actions';
import { NewsArticle } from '../../core/api/models';

export const getNewsArticles = createAsyncAction(
  '@home/get/request',
  '@home/get/success',
  '@home/get/failure'
)<undefined, NewsArticle[], undefined>();
