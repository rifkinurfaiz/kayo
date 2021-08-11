import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationContainer } from '@react-navigation/native';

import { WealthMenu, HistoryMenu, ProfileMenu } from './Menus';
import I18n from './Localization';
import colors from './Assets/Colors';
import styles from './Assets/App.styles';

const { primary } = colors;

const _renderIcon = (icon) => (
  <MaterialCommunityIcons color={primary.blue} size={25} name={icon} />
);

const _renderTitle = (title) => (
  <Text style={styles.bottomNavigationTitle}>{I18n.t(title)}</Text>
);

const Main = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'dashboard', title: _renderTitle('dashboard'), icon: () => _renderIcon('chart-donut-variant') },
    { key: 'history', title: _renderTitle('history'), icon: () => _renderIcon('chart-line') },
    { key: 'profile', title: _renderTitle('profile'), icon: ()=> _renderIcon('account-circle') }
  ]);

  const renderScene = BottomNavigation.SceneMap({
    dashboard: WealthMenu,
    history: HistoryMenu,
    profile: ProfileMenu
  });

  return (
    <NavigationContainer>
      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
        shifting={true}
      />
    </NavigationContainer>

  );
};

export default Main;
