// @flow
import * as React from 'react';
import type { ComponentType } from 'react';
import { compose, withProps } from 'recompose';

import HistoryTabDetailContentComponent from './HistoryTabDetailContent.component';
import type { Props } from './HistoryTabDetailContent.types';

export const HistoryTabDetailContentContainer = (props: Props): React.Node => (
  <HistoryTabDetailContentComponent {...props} />
);

const openBottomSheet =
  (bottomSheetRef: Object, setItem: Function, item: Object): Function => () => {
    setItem(item);
    bottomSheetRef.current.open();
  };

const mapProps = (): Object => ({
  openBottomSheet
});

export default (compose(withProps(mapProps))(
  HistoryTabDetailContentContainer
): ComponentType<Props>);
