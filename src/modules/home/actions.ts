import { createAsyncAction } from 'typesafe-actions';
import { NewsArticle } from '../../core/api/models';

export const getNewsArticles = createAsyncAction(
  '@getNewsArticles/get/request',
  '@getNewsArticles/get/success',
  '@getNewsArticles/get/failure'
)<undefined, NewsArticle[], undefined>();

export const refreshNewsArticles = createAsyncAction(
  '@refreshNewsArticles/get/request',
  '@refreshNewsArticles/get/success',
  '@refreshNewsArticles/get/failure'
)<undefined, NewsArticle[], undefined>();
