import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { HistoryTabContainer } from '../Containers';
import colors from '../Assets/Colors';

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
            title: 'History',
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
