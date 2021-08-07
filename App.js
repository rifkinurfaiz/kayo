import * as React from 'react';
import { View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import { WealthMenu, HistoryMenu, ProfileMenu } from './src/Menus';
import I18n from './src/Localization';
import { appStyles } from './src/Assets';
import colors from './src/Assets/Colors';

const renderIcon = (icon) => (
  <View>
    <Icon style={[{ color: colors.primary.blue }]} size={25} name={icon} />
  </View>
);

const TabNavigator = createMaterialBottomTabNavigator({
  Wealth: {
    screen: WealthMenu,
    navigationOptions: {
      tabBarLabel: I18n.t('wealth'),
      tabBarIcon: () => renderIcon('md-infinite'),
      barStyle: appStyles.barStyle,
      tabBarOptions: { activeTintColor: 'blue' }
    }
  },
  History: {
    screen: HistoryMenu,
    navigationOptions: {
      tabBarLabel: I18n.t('history'),
      tabBarIcon: () => renderIcon('analytics'),
      barStyle: appStyles.barStyle
    }
  },
  Profile: {
    screen: ProfileMenu,
    navigationOptions: {
      tabBarLabel: I18n.t('profile'),
      tabBarIcon: () => renderIcon('person-circle'),
      barStyle: appStyles.barStyle
    }
  }
});

export default createAppContainer(TabNavigator);
