// @flow
import React, { Fragment } from 'react';
import type { Node } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './HistoryTabDetailContent.styles';
import { DetailItem, DetailItemContent } from '../../Components';
import type { Props } from './HistoryTabDetailContent.types';
import useHistoryTabDetailContent from './useHistoryTabDetailContent';
import colors from '../../Assets/Colors';
import I18n from '../../Localization';

const _renderHistoryTabDetailContent = (props: Props, bottomSheetRef: Object, setItem: Function): Node =>
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

const _renderAddMoreDetailContent = (props: Props, bottomSheetAddRef: Object, setItem: Function): Node => {
  const { mapNewMonthData, data, openBottomSheet } = props;
  const index = (data).length - 1;
  const nextMonthData = mapNewMonthData(data[index]);

  return (
    <TouchableOpacity
      onPress={openBottomSheet(bottomSheetAddRef, setItem, nextMonthData)}
      style={styles.addMoreContainer}
    >
      <View style={styles.addMoreWrapper}>
        {_renderIcon()}
        <Text style={styles.addMoreText}>{I18n.t('add-more-button')}</Text>
      </View>
    </TouchableOpacity>
  );
};

const _renderBottomSheet = (bottomSheetRef: Object, bottomSheetAddRef: Object, item: Array<Object>) => (
  <View>
    <DetailItemContent ref={bottomSheetRef} height={2} item={item} />
    <DetailItemContent ref={bottomSheetAddRef} height={1.5} item={item} />
  </View>
);

const _renderYearDropDown = (year: number) => (
  <View style={styles.yearContainer}>
    <TouchableOpacity
      style={styles.yearWrapper}
    >
      <Text style={styles.yearText}>{year}</Text>
      <MaterialCommunityIcons color={colors.primary.black} size={22} name={'chevron-down'} />
    </TouchableOpacity>
  </View>
);

export const HistoryTabDetailContent = (props: Props): Node => {
  const { bottomSheetRef, bottomSheetAddRef, item, setItem } = useHistoryTabDetailContent();
  const { year, shouldRenderAddMoreButton, data } = props;

  return (
    <View style={styles.container}>
      {_renderBottomSheet(bottomSheetRef, bottomSheetAddRef, item)}
      {_renderYearDropDown(year)}
      <ScrollView style={styles.scrollView}>
        <View style={styles.detailItemContainer}>
          {_renderHistoryTabDetailContent(props, bottomSheetRef, setItem)}
          {shouldRenderAddMoreButton(data) && _renderAddMoreDetailContent(props, bottomSheetAddRef, setItem)}
        </View>
      </ScrollView>
    </View>
  );
};

export default HistoryTabDetailContent;
