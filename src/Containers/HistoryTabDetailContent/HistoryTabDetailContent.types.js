// @flow
export type Props = {|
  year: number,
  data: Object,
  shouldRenderAddMoreButton: Function,
  mapNewMonthData: Function,
  openBottomSheet: Function
|};

export type PartialProps = $Values<Props>;

export type Methods = {|
  bottomSheetRef: Object,
  bottomSheetAddRef: Object,
  item: Object,
  setItem: Function
|}
