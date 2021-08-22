import React from 'react';
import { Text } from 'react-native';
import { useStateSelector } from '../../core/redux/hooks';

export default () => {
  const loading = useStateSelector(u => u.fixtures.fixturesLoading);
  const fixtures = useStateSelector(u => u.fixtures);
  return <Text>Fixtures</Text>;
};
