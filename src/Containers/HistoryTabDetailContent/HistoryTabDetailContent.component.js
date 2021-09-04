// @flow
import React, { Fragment } from 'react';
import type { Node } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import RBSheet from 'react-native-raw-bottom-sheet';

import styles from './HistoryTabDetailContent.styles';
import { DetailItem, DetailItemContent } from '../../Components';
import type { Props, Icon } from './HistoryTabDetailContent.types';
import useHistoryTabDetailContent from './useHistoryTabDetailContent';
import colors from '../../Assets/Colors';
import I18n from '../../Localization';

const { height } = Dimensions.get('window');

const _renderHistoryTabDetailContent = (props: Props, bottomSheetRef: Object, setItem: Function): Node =>
  props.data.map((item, i) => (
    <Fragment key={`${props.year}-${i}`}>
      <TouchableOpacity
        onPress={props.openBottomSheet(bottomSheetRef, setItem, item)}>
        <DetailItem {...item} />
      </TouchableOpacity>
    </Fragment>
  ));

const _renderIcon = (icon: Icon) => (
  <MaterialCommunityIcons color={icon.color} size={icon.size} name={icon.name} />
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
        {_renderIcon({ name: 'plus-circle-outline', color: colors.primary.blue, size: 35 })}
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

const _renderYearBottomSheet = (ref: Object) => (
  <RBSheet
    ref={ref}
    dragFromTopOnly={true}
    closeOnDragDown={true}
    customStyles={styles}
    height={height / 3}
  >
    <View/>
  </RBSheet>
);

const _renderYearDropDownButton = (props: Props, bottomSheetYearListRef: Object, year: number) => (
  <View style={styles.yearContainer}>
    <TouchableOpacity
      style={styles.yearWrapper}
      onPress={props.showYearList(bottomSheetYearListRef)}
    >
      <Text style={styles.yearText}>{year}</Text>
      {_renderIcon({ name: 'chevron-down', color: colors.primary.black, size: 22 })}
    </TouchableOpacity>
  </View>
);

export const HistoryTabDetailContent = (props: Props): Node => {
  const { bottomSheetRef, bottomSheetAddRef, bottomSheetYearListRef, item, setItem } = useHistoryTabDetailContent();
  const { year, shouldRenderAddMoreButton, data } = props;

  return (
    <View style={styles.container}>
      {_renderBottomSheet(bottomSheetRef, bottomSheetAddRef, item)}
      {_renderYearBottomSheet(bottomSheetYearListRef)}
      {_renderYearDropDownButton(props, bottomSheetYearListRef, year)}
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
