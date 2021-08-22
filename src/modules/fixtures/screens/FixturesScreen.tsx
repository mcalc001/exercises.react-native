import React, { useEffect } from 'react';
import { Text } from 'react-native';
import ScreenWrapper from '../../../components/ScreenWrapper';
import { useStateSelector, useThunkDispatch } from '../../../core/redux/hooks';
import { getFixturesAsync } from '../thunks';

export default () => {
  const loading = useStateSelector(u => u.fixtures.fixturesLoading);
  const fixtures = useStateSelector(u => u.fixtures);
  const dispatch = useThunkDispatch();

  useEffect(() => {
    // When the screen first loads,
    // we fetch all the fixtures from the API
    dispatch(getFixturesAsync());
  }, [dispatch]);

  console.log('loading', loading);
  console.log('fixtures', fixtures);

  return (
    <ScreenWrapper>
      <Text>This is the screen you'll work on</Text>
    </ScreenWrapper>
  );
};
