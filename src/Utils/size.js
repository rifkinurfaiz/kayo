import { Dimensions } from 'react-native';
import { isTablet } from './platform';

const { height, width } = Dimensions.get('window');

const base = {
  width: 375,
  height: 667,
  pixelRatio: 2,
  fontScale: 2
};

const screenSize = {
  base: Math.sqrt((base.height * base.height) + (base.width * base.width)),
  current: Math.sqrt((height * height) + (width * width))
};

export const scaleSize = size => (size / screenSize.base) * screenSize.current;

export const scaleWidth = w => (w / base.width) * width;

export const scaleHeight = h =>  (h / base.height) * height;

export const scaleFont = fontSize => (isTablet() ? fontSize : (fontSize / base.width) * width);

export default {
  scaleSize,
  scaleWidth,
  scaleHeight,
  scaleFont
};
