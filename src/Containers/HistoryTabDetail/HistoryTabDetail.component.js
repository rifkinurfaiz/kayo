import * as React from 'react';

import HistoryTabDetailContent from '../HistoryTabDetailContent';
import useHistoryTabDetail from './useHistoryTabDetail';
import Loading from './Loading/HistoryTabDetailLoading.component';

const _renderHistoryTabDetailContent = props => <HistoryTabDetailContent {...props} />;

const _renderLoading = () => <Loading />;

export const HistoryTabDetail = props => {
  const [historyAssets, loading] = useHistoryTabDetail(props);

  return (
    loading
      ? _renderLoading()
      : _renderHistoryTabDetailContent(historyAssets)
  );
};

export default HistoryTabDetail;
