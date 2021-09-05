// @flow
export type Props = {|
  years: Object,
  data: Object,
  shouldRenderAddMoreButton: Function,
  mapNewMonthData: Function,
  openBottomSheet: Function,
  showYearList: Function
|};

export type PartialProps = $Values<Props>;

export type Icon = {|
  name: Object,
  color: string,
  size: number
|}

export type Methods = {|
  bottomSheetRef: Object,
  bottomSheetAddRef: Object,
  bottomSheetYearListRef: Object,
  item: Object,
  setItem: Function
|}
