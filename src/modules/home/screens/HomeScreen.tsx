import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  FlatList,
  ListRenderItemInfo,
  View
} from 'react-native';
import { BASE_SIZE } from '../../../config';
import { NewsArticle } from '../../../core/api/models';
import { useStateSelector, useThunkDispatch } from '../../../core/redux/hooks';
import { NewsArticleCard } from '../components';
import { NEWS_ARTICLE_HEIGHT } from '../components/NewsArticleCard/NewsArticleCard.styles';
import { getNewsArticlesAsync, refreshNewsArticlesAsync } from '../thunks';
import { styles } from './HomeScreen.styles';

const PAGE_SIZE = 10;

export default () => {
  const newsArticlesLoading = useStateSelector(
    u => u.newsArticles.newsArticlesLoading
  );
  const newsArticlesRefreshing = useStateSelector(
    u => u.newsArticles.newsArticlesRefreshing
  );
  const newsArticles = useStateSelector(u => u.newsArticles.newsArticles);
  const dataSetComplete = useStateSelector(u => u.newsArticles.dataSetComplete);

  const dispatch = useThunkDispatch();

  const page = useRef(0);

  const getData = useCallback(
    (pageNum: number) => {
      dispatch(getNewsArticlesAsync(pageNum, PAGE_SIZE));
    },
    [dispatch]
  );

  useEffect(() => {
    /**
     * Dispatch action first load to get newsArticles array.
     */
    getData(page.current);
  }, [getData]);

  const onArticlePress = useCallback((id: string) => {
    Alert.alert('id:', id);
  }, []);

  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<NewsArticle>) => (
      <NewsArticleCard article={item} onPress={onArticlePress} />
    ),
    [onArticlePress]
  );

  const renderHeader = useCallback(
    () => <View style={{ height: BASE_SIZE * 2 }} />,
    []
  );

  /**
   * measure renderItem for performance enhancements
   */
  const getItemLayout = useCallback(
    (data: NewsArticle[] | any, index: number) => {
      return {
        length: NEWS_ARTICLE_HEIGHT,
        offset: NEWS_ARTICLE_HEIGHT * data?.length,
        index
      };
    },
    []
  );

  /**
   * when user reaches end of ListView
   * return if dataSetComplete
   * else increment local page number
   * dispatch action to newsArticles with updated page num
   */
  const onEndReached = useCallback(() => {
    if (dataSetComplete) {
      return;
    }
    page.current = page.current + 1;
    getData(page.current);
  }, [dataSetComplete, page, getData]);

  /**
   * Loader to only show on initial load
   */
  const loader = useCallback(() => {
    if (newsArticlesLoading && page.current === 0) {
      return (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size={'large'} />
        </View>
      );
    }
  }, [newsArticlesLoading]);

  /**
   * when user pulls to refresh
   * dispatch action to grab new data clear and current newsArticle array
   */
  const onRefreshHandler = () => {
    page.current = 0;
    dispatch(refreshNewsArticlesAsync(PAGE_SIZE));
  };

  return (
    <View style={styles.container}>
      {loader()}

      <FlatList
        style={styles.flatList}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={renderHeader}
        data={newsArticles}
        renderItem={renderItem}
        getItemLayout={getItemLayout}
        keyExtractor={item => item.id}
        onEndReached={onEndReached}
        onEndReachedThreshold={2}
        onRefresh={onRefreshHandler}
        refreshing={newsArticlesRefreshing}
      />
    </View>
  );
};
