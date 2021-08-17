// @flow
import { useRef, useState } from 'react';

import type { Methods } from './HistoryTabDetailContent.types';

const useHistoryTabDetailContent = (): Methods => {
  const bottomSheetRef = useRef(null);
  const bottomSheetAddRef = useRef(null);
  const [item, setItem] = useState({});

  return {
    bottomSheetRef,
    bottomSheetAddRef,
    item,
    setItem
  };
};

export default useHistoryTabDetailContent;
