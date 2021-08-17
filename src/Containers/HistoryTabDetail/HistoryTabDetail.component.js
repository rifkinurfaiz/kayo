import * as React from 'react';
import { Fragment } from 'react';
import Swiper from 'react-native-swiper';

import HistoryTabDetailContent from '../HistoryTabDetailContent';
import useHistoryTabDetail from './useHistoryTabDetail';
import Loading from './Loading/HistoryTabDetailLoading.component';

const _renderHistoryTabDetailContent = items =>
  items.map((item, i) => (
    <Fragment key={i}>
      <HistoryTabDetailContent {...item} />
    </Fragment>
  ));

const _renderLoading = () => (
  <Loading />
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
