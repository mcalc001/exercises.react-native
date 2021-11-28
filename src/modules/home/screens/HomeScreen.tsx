import React, { useEffect } from 'react';
import { Text } from 'react-native';
import ScreenWrapper from '../../../components/ScreenWrapper';
import { api } from '../../../core/api';

export default () => {
  useEffect(() => {
    api.news
      .get({
        page: 0,
        pageSize: 10
      })
      .then(news => console.log(news));
  });
  return (
    <ScreenWrapper>
      <Text>Display news content</Text>
      <Text>-----------------------</Text>
    </ScreenWrapper>
  );
};
