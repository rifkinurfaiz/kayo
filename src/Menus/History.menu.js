import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View } from 'react-native';

import { HistoryTabContainer } from '../Containers';
import colors from '../Assets/Colors';
import I18n from '../Localization';

const { primary } = colors;

const History = () => {
  const { Navigator, Screen } = createStackNavigator();

  return (
    <Navigator>
      <Screen
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
    </Navigator>
  );
};

export default History;
