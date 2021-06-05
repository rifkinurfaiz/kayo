import * as React from 'react';
import { View, Text } from 'react-native';

import styles from './DetailItem.styles';

export const DetailItem = props => (
  <View style={styles.container}>
    <View style={styles.title}>
      <Text>{props.month}</Text>
    </View>
  </View>
);

export default DetailItem;
