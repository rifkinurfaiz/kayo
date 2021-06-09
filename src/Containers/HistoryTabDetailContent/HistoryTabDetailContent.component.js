import * as React from 'react';
import { View, Text, ScrollView } from 'react-native';

import styles from './HistoryTabDetailContent.styles';
import DetailItem from '../../Components/DetailItem';

const _renderHistoryTabDetailContent = items =>
  items.map((item, i) => {
    return <DetailItem key={i} {...item} />;
  });

export const HistoryTabDetailContent = props => {
  return (
    <View>
      <View style={styles.yearContainer}>
        <Text style={styles.yearText}>{props.year}</Text>
      </View>
      <ScrollView style={styles.scrollView}>
        <View style={styles.detailItemContainer}>
          {_renderHistoryTabDetailContent(props.data)}
        </View>
      </ScrollView>
    </View>
  );
};

export default HistoryTabDetailContent;
