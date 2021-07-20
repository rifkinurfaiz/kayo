import React, { useRef, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';

import styles from './HistoryTabDetailContent.styles';
import { DetailItem, BottomSheet } from '../../Components/';

const _openBottomSheet = (bottomSheetRef, setItem, item) => () => {
  setItem(item);
  bottomSheetRef.current.open();
};

const _renderHistoryTabDetailContent = (items, bottomSheetRef, setItem) =>
  items.map((item, i) => {
    return (
      <View>
        <TouchableOpacity
          onPress={_openBottomSheet(bottomSheetRef, setItem, item)}>
          <DetailItem key={i} {...item} />
        </TouchableOpacity>
      </View>
    );
  });

export const HistoryTabDetailContent = props => {
  const bottomSheetRef = useRef(null);
  const [item, setItem] = useState({});

  return (
    <View>
      <BottomSheet ref={bottomSheetRef} height={2} item={item} />
      <View style={styles.yearContainer}>
        <Text style={styles.yearText}>{props.year}</Text>
      </View>
      <ScrollView style={styles.scrollView}>
        <View style={styles.detailItemContainer}>
          {_renderHistoryTabDetailContent(props.data, bottomSheetRef, setItem)}
        </View>
      </ScrollView>
    </View>
  );
};

export default HistoryTabDetailContent;
