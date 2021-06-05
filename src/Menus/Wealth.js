import * as React from 'react';
import { View, Text } from 'react-native';

import I18n from '../Localization';

class Wealth extends React.Component {
  render() {
    return (
      <View>
        <Text>{I18n.t('wealth')}</Text>
      </View>
    );
  }
}

export default Wealth;
