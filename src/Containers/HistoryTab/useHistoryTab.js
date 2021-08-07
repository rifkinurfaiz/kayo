// @flow
import * as React from 'react';

import type { Methods } from './HistoryTab.types';

const useHistoryTab = (): Methods => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'CHART' },
    { key: 'second', title: 'DETAIL' }
  ]);

  return {
    index,
    setIndex,
    routes
  };
};

export default useHistoryTab;
