// @flow
import * as React from 'react';
import type { ComponentType } from 'react';
import { compose, withProps } from 'recompose';

import HistoryTabDetailContentComponent from './HistoryTabDetailContent.component';
import type { Props, PartialProps } from './HistoryTabDetailContent.types';
import constants from '../../Constants';

const { MONTHS: {
  JANUARY,
  FEBRUARY,
  MARCH,
  APRIL,
  MAY,
  JUNE,
  JULY,
  AUGUST,
  SEPTEMBER,
  OCTOBER,
  NOVEMBER,
  DECEMBER
} } = constants;

export const HistoryTabDetailContentContainer = (props: Props): React.Node => (
  <HistoryTabDetailContentComponent {...props} />
);

const mapNewMonthData = data => () => {
  const months = [JANUARY, FEBRUARY, MARCH, APRIL, MAY, JUNE, JULY, AUGUST, SEPTEMBER, OCTOBER, NOVEMBER, DECEMBER];

  const thisMonth = months.indexOf(data.month);
  const nextMonth = months[thisMonth + 1];

  return {
    ...data,
    month: nextMonth
  };
};

const openBottomSheet =
  (bottomSheetRef: Object, setItem: Function, item: Object): Function => () => {
    setItem(item);
    bottomSheetRef.current.open();
  };

const shouldRenderAddMoreButton = (data: Array<Object>): boolean => {
  return data[11] === undefined;
};

const mapProps = (): PartialProps => ({
  openBottomSheet,
  mapNewMonthData,
  shouldRenderAddMoreButton
});

export default (compose(withProps(mapProps))(
  HistoryTabDetailContentContainer
): ComponentType<Props>);
