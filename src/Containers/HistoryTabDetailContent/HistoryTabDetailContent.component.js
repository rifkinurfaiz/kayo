import * as React from 'react';
import { View, Text, ScrollView } from 'react-native';

import styles from './HistoryTabDetailContent.styles';
import DetailItem from '../../Components/DetailItem';

export const HistoryTabDetailContent = props => {
  return (
    <View>
      <View style={styles.yearContainer}>
        <Text>{props.year}</Text>
      </View>
      <ScrollView>
        <View style={styles.detailItemContainer}>
          <DetailItem month="January" />
          <DetailItem month="February" />
        </View>
      </ScrollView>
    </View>
  );
};

export default HistoryTabDetailContent;
