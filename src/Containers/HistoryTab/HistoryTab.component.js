import * as React from 'react';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

import useHistoryTab from './useHistoryTab';
import HistoryTabDetail from '../HistoryTabDetail';
import styles from './HistoryTab.styles';

const detailTab = () => <HistoryTabDetail />;

const chartTab = () => <HistoryTabDetail />;

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={styles.tabIndicatorColor}
    style={styles.tabBackgroundColor}
  />
);

const History = props => {
  const { index, setIndex, routes } = useHistoryTab();

  const renderScene = SceneMap({
    first: detailTab,
    second: chartTab
  });

  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
    />
  );
};

export default History;
