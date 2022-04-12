import React, { useCallback, useEffect } from 'react';
import {
  ActivityIndicator,
  FlatList,
  ListRenderItemInfo,
  View
} from 'react-native';
import { BASE_SIZE } from '../../../config';
import { Fixture } from '../../../core/api/models';
import { useStateSelector, useThunkDispatch } from '../../../core/redux/hooks';
import { FixtureResultCard } from '../components';
import { FIXTURE_RESULT_HEIGHT } from '../components/FixtureResultCard/FixtureResultCard.styles';
import { getFixturesAsync } from '../thunks';
import { styles } from './FixturesScreen.styles';

export default () => {
  const fixturesLoading = useStateSelector(u => u.fixtures.fixturesLoading);
  const fixtures = useStateSelector(u => u.fixtures.fixtures);
  const dispatch = useThunkDispatch();

  useEffect(() => {
    // When the screen first loads,
    // we fetch all the fixtures from the API
    dispatch(getFixturesAsync());
  }, [dispatch]);

  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<Fixture>) => <FixtureResultCard {...item} />,
    []
  );

  const renderHeader = useCallback(
    () => <View style={{ height: BASE_SIZE * 2 }} />,
    []
  );

  const getItemLayout = useCallback((data: Fixture[] | any, index: number) => {
    return {
      length: FIXTURE_RESULT_HEIGHT,
      offset: FIXTURE_RESULT_HEIGHT * data?.length,
      index
    };
  }, []);

  return (
    <View style={styles.container}>
      {fixturesLoading ? (
        <ActivityIndicator size={'large'} />
      ) : (
        <FlatList
          style={styles.flatList}
          ListHeaderComponent={renderHeader}
          data={fixtures}
          renderItem={renderItem}
          getItemLayout={getItemLayout}
          keyExtractor={item => item.id}
        />
      )}
    </View>
  );
};
