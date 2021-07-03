import * as React from 'react';
import { View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { WealthMenu, HistoryMenu, ProfileMenu } from './src/Menus';
import I18n from './src/Localization';

const Stack = createStackNavigator();

const History = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="History"
        component={HistoryMenu}
        options={{
          title: 'History',
          headerStyle: {
            fontSize: 17,
            backgroundColor: '#1e90ff'
          },
          headerTintColor: '#ffffff'
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

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
    screen: History,
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
