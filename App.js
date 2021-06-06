import * as React from 'react';
import { View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import { WealthMenu, HistoryMenu, ProfileMenu } from './src/Menus';
import I18n from './src/Localization';

const renderIcon = (color, icon) => (
  <View>
    <Icon style={[{ color }]} size={25} name={icon} />
  </View>
);

const defaultOptions = {
  barStyle: { backgroundColor: '#1e90ff' }
};

const TabNavigator = createMaterialBottomTabNavigator({
  Wealth: {
    screen: WealthMenu,
    navigationOptions: {
      tabBarLabel: I18n.t('wealth'),
      tabBarIcon: ({ tintColor }) => renderIcon(tintColor, 'md-infinite'),
      ...defaultOptions
    }
  },
  History: {
    screen: HistoryMenu,
    navigationOptions: {
      tabBarLabel: I18n.t('history'),
      tabBarIcon: ({ tintColor }) => renderIcon(tintColor, 'analytics'),
      ...defaultOptions
    }
  },
  Profile: {
    screen: ProfileMenu,
    navigationOptions: {
      tabBarLabel: I18n.t('profile'),
      tabBarIcon: ({ tintColor }) => renderIcon(tintColor, 'person-circle'),
      ...defaultOptions
    }
  }
});

export default createAppContainer(TabNavigator);
