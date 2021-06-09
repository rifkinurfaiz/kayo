import * as React from 'react';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

import useHistoryTab from './useHistoryTab';
import HistoryTabDetail from '../HistoryTabDetail';
import HistoryTabChart from '../HistoryTabChart';
import styles from './HistoryTab.styles';

const detailTab = () => <HistoryTabDetail />;

const chartTab = () => <HistoryTabChart />;

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={styles.tabIndicatorColor}
    style={styles.tabBackgroundColor}
  />
);

const History = props => {
  const { index, setIndex, routes } = useHistoryTab();
  const atFirstTab = index === 0 ? true : false;
  const renderScene = SceneMap({
    first: chartTab,
    second: detailTab
  });

  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      swipeEnabled={atFirstTab}
      style={{ backgroundColor: '#E1E1E1' }}
    />
  );
};

export default History;
