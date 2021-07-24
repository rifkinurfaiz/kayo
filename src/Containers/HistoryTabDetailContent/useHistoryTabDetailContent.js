import { useRef, useState } from 'react';

const useHistoryTabDetailContent = () => {
  const bottomSheetRef = useRef(null);
  const [item, setItem] = useState({});

  return {
    bottomSheetRef,
    item,
    setItem
  };
};

export default useHistoryTabDetailContent;
