// @flow
import React, { Fragment } from 'react';
import type { Node } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './HistoryTabDetailContent.styles';
import { DetailItem, BottomSheet } from '../../Components/';
import type { Props } from './HistoryTabDetailContent.types';
import useHistoryTabDetailContent from './useHistoryTabDetailContent';
import colors from '../../Assets/Colors';

const _renderHistoryTabDetailContent = (
  props: Props,
  bottomSheetRef: Object,
  setItem: Function
): Node =>
  props.data.map((item, i) => (
    <Fragment key={`${props.year}-${i}`}>
      <TouchableOpacity
        onPress={props.openBottomSheet(bottomSheetRef, setItem, item)}>
        <DetailItem {...item} />
      </TouchableOpacity>
    </Fragment>
  ));

const _renderIcon = (icon) => (
  <MaterialCommunityIcons color={colors.primary.blue} size={35} name={'plus-circle-outline'} />
);

const _renderAddMoreDetailContent = ( props: Props,
  bottomSheetRef: Object,
  setItem: Function
): Node => (
  <TouchableOpacity
    onPress={props.openBottomSheet(bottomSheetRef, setItem, [])}
    style={styles.addMoreContainer}
  >
    <View style={styles.addMoreWrapper}>
      {_renderIcon()}
      <Text style={styles.addMoreText}>Add this month</Text>
    </View>
  </TouchableOpacity>
);

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
          {_renderAddMoreDetailContent(props, bottomSheetRef, setItem)}
        </View>
      </ScrollView>
    </View>
  );
};

export default HistoryTabDetailContent;
