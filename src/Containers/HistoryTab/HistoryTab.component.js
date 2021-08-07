// @flow
import * as React from 'react';
import { Text, View } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

import useHistoryTab from './useHistoryTab';
import HistoryTabDetail from '../HistoryTabDetail';
import HistoryTabChart from '../HistoryTabChart';
import styles from './HistoryTab.styles';

const detailTab = () => <HistoryTabDetail />;

const chartTab = () => <HistoryTabChart />;

const renderTabBar = (props: Object): React.Node => (
  <TabBar
    {...props}
    indicatorStyle={styles.tabIndicator}
    style={styles.tab}
    renderLabel={({ route, focused }) => (
      <View style={styles.tabLabelWrapper}>
        <Text style={styles.tabLabel(focused)}>{route.title}</Text>
      </View>
    )}
  />
);

const History = (props: Object): React.Node => {
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
      style={styles.tabView}
    />
  );
};

export default History;
