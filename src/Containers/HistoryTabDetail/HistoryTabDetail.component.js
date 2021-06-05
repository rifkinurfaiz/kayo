import * as React from 'react';
import { View } from 'react-native';
import Swiper from 'react-native-swiper';

import HistoryTabDetailContent from '../HistoryTabDetailContent';

export const HistoryTabDetail = props => {
  return (
    <Swiper loop={false} showsPagination={false}>
      <View>
        <HistoryTabDetailContent year={2019} />
      </View>
      <View>
        <HistoryTabDetailContent year={2020} />
      </View>
      <View>
        <HistoryTabDetailContent year={2021} />
      </View>
    </Swiper>
  );
};

export default HistoryTabDetail;
