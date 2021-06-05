import * as React from 'react';
import { View } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';

import useHistoryTab from './useHistoryTab';

const FirstRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#ffffff' }} />
);

const SecondRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#ffffff' }} />
);

const History = props => {
  const { index, setIndex, routes } = useHistoryTab();

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute
  });

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
    />
  );
};

export default History;
