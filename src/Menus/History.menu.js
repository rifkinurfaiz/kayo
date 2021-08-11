import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { HistoryTabContainer } from '../Containers';
import colors from '../Assets/Colors';
import I18n from '../Localization';

const { primary } = colors;

const History = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="History"
          component={HistoryTabContainer}
          options={{
            title: I18n.t('history'),
            headerStyle: {
              elevation: 0,
              shadowOpacity: 0
            },
            headerTintColor: primary.black
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default History;
