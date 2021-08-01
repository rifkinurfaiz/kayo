import * as React from 'react';
import { View, Text } from 'react-native';
import Swiper from 'react-native-swiper';

import HistoryTabDetailContent from '../HistoryTabDetailContent';
import useHistoryTabDetail from './useHistoryTabDetail';

const _renderHistoryTabDetailContent = items =>
  items.map((item, i) => {
    return (
      <View>
        <HistoryTabDetailContent key={i} {...item} />
      </View>
    );
  });

const _renderLoading = () => (
  <View><Text>Loading...</Text></View>
);

export const HistoryTabDetail = props => {
  const [historyAssets, loading] = useHistoryTabDetail(props);

  return (
    <Swiper loop={false} showsPagination={false}>
      {loading
        ? _renderLoading()
        : _renderHistoryTabDetailContent(historyAssets)}
    </Swiper>
  );
};

export default HistoryTabDetail;
