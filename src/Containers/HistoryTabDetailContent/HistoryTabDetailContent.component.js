import * as React from 'react';
import { View, Text, ScrollView } from 'react-native';

import styles from './HistoryTabDetailContent.styles';
import DetailItem from '../../Components/DetailItem';

const _renderHistoryTabDetailContent = items =>
  items.map(item => {
    return <DetailItem {...item} />;
  });

export const HistoryTabDetailContent = props => {
  return (
    <View>
      <View style={styles.yearContainer}>
        <Text>{props.year}</Text>
      </View>
      <ScrollView>
        <View style={styles.detailItemContainer}>
          {_renderHistoryTabDetailContent(props.data)}
        </View>
      </ScrollView>
    </View>
  );
};

export default HistoryTabDetailContent;