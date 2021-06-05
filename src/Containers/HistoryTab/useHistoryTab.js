import * as React from 'react';

const useHistoryTab = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'First' },
    { key: 'second', title: 'Second' }
  ]);

  return {
    index,
    setIndex,
    routes
  };
};

export default useHistoryTab;
