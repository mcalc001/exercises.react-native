import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  FlatList,
  ListRenderItemInfo,
  Text,
  View
} from 'react-native';
import { BASE_SIZE } from '../../../config/Styles';
import { NewsArticle } from '../../../core/api/models';
import { useStateSelector, useThunkDispatch } from '../../../core/redux/hooks';
import { NewsArticleCard } from '../components/NewsArticleCard';
import { NEWS_ARTICLE_HEIGHT } from '../components/NewsArticleCard.styles';
import { getNewsArticlesAsync } from '../thunks';
import { styles } from './HomeScreen.styles';

const PAGE_SIZE = 7;

export default () => {
  const newsArticlesLoading = useStateSelector(
    u => u.newsArticles.newsArticlesLoading
  );
  const newsArticles = useStateSelector(u => u.newsArticles.newsArticles);
  const dispatch = useThunkDispatch();
  const dataSetComplete = useStateSelector(u => u.newsArticles.dataSetComplete);

  const page = useRef(0);

  const getData = useCallback(
    (pageNum: number) => {
      dispatch(getNewsArticlesAsync(pageNum, PAGE_SIZE));
    },
    [dispatch]
  );

  useEffect(() => {
    getData(page.current);
  }, [getData]);

  const onArticlePress = (id: string) => {
    Alert.alert('id:', id);
  };

  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<NewsArticle>) => (
      <NewsArticleCard article={item} onPress={onArticlePress} />
    ),
    []
  );

  const renderHeader = useCallback(
    () => <View style={{ height: BASE_SIZE * 2 }} />,
    []
  );

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

  const onEndReached = useCallback(() => {
    if (dataSetComplete) {
      return;
    }
    page.current = page.current + 1;
    getData(page.current);
  }, [dataSetComplete, page, getData]);

  const loader = useCallback(() => {
    if (newsArticlesLoading && page.current === 0) {
      return (
        <View style={styles.loading}>
          <ActivityIndicator size={'large'} />
        </View>
      );
    }
  }, [newsArticlesLoading]);

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
        onEndReachedThreshold={0.3}
      />
    </View>
  );
};
