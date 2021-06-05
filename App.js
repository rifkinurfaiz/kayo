import * as React from 'react';
import { View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import { WealthMenu, HistoryMenu, ProfileMenu } from './src/Menus';

const TabNavigator = createMaterialBottomTabNavigator({
  Wealth: {
    screen: WealthMenu,
    navigationOptions: {
      tabBarLabel: 'Wealth',
      tabBarIcon: ({ tintColor }) => (
        <View>
          <Icon style={[{ color: tintColor }]} size={25} name={'md-infinite'} />
        </View>
      ),
    },
  },
  History: {
    screen: HistoryMenu,
    navigationOptions: {
      tabBarLabel: 'History',
      tabBarIcon: ({ tintColor }) => (
        <View>
          <Icon style={[{ color: tintColor }]} size={25} name={'analytics'} />
        </View>
      ),
    },
  },
  Profile: {
    screen: ProfileMenu,
    navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarIcon: ({ tintColor }) => (
        <View>
          <Icon
            style={[{ color: tintColor }]}
            size={25}
            name={'person-circle'}
          />
        </View>
      ),
    },
  },
});

export default createAppContainer(TabNavigator);
