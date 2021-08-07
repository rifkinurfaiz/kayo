// @flow
import * as React from 'react';
import type { Node } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';

import styles from './HistoryTabDetailContent.styles';
import { DetailItem, BottomSheet } from '../../Components/';
import type { Props } from './HistoryTabDetailContent.types';
import useHistoryTabDetailContent from './useHistoryTabDetailContent';

const _renderHistoryTabDetailContent = (
  props: Props,
  bottomSheetRef: Object,
  setItem: Function
): Node =>
  props.data.map((item, i) => (
    <View>
      <TouchableOpacity
        onPress={props.openBottomSheet(bottomSheetRef, setItem, item)}>
        <DetailItem key={i} {...item} />
      </TouchableOpacity>
    </View>
  ));

export const HistoryTabDetailContent = (props: Props): Node => {
  const { bottomSheetRef, item, setItem } = useHistoryTabDetailContent();

  return (
    <View>
      <BottomSheet ref={bottomSheetRef} height={2} item={item} />
      <View style={styles.yearContainer}>
        <Text style={styles.yearText}>{props.year}</Text>
      </View>
      <ScrollView style={styles.scrollView}>
        <View style={styles.detailItemContainer}>
          {_renderHistoryTabDetailContent(props, bottomSheetRef, setItem)}
        </View>
      </ScrollView>
    </View>
  );
};

export default HistoryTabDetailContent;
