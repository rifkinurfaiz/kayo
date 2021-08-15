// @flow
import * as React from 'react';
import type { ComponentType } from 'react';
import { compose, withProps } from 'recompose';

import HistoryTabDetailContentComponent from './HistoryTabDetailContent.component';
import type { Props } from './HistoryTabDetailContent.types';
import constans from '../../Constants';

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
} } = constans;

export const HistoryTabDetailContentContainer = (props: Props): React.Node => (
  <HistoryTabDetailContentComponent {...props} />
);

const months = [JANUARY, FEBRUARY, MARCH, APRIL, MAY, JUNE, JULY, AUGUST, SEPTEMBER, OCTOBER, NOVEMBER, DECEMBER];

const mapNewMonthData = data => () => {
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

const mapProps = (): Object => ({
  openBottomSheet,
  mapNewMonthData
});

export default (compose(withProps(mapProps))(
  HistoryTabDetailContentContainer
): ComponentType<Props>);
