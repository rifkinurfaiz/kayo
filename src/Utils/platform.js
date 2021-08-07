
import { Platform, Dimensions } from 'react-native';
import constants from '../Constants';

export const isAndroid = () => Platform.OS === constants.PLATFORM.ANDROID;
export const isIOS = () => Platform.OS === constants.PLATFORM.IOS;
export const isNative = () =>
  Platform.OS === constants.PLATFORM.ANDROID || Platform.OS === constants.PLATFORM.IOS;
export const isTestingNative = () => {
  let OsVersion;
  try {
    OsVersion = Platform.Version;
  } catch (err) {
    OsVersion = undefined;
  }
  return isNative() && !OsVersion;
};
export const isWeb = () => Platform.OS === constants.PLATFORM.WEB;
export const isMobileWeb = () => isWeb() && Dimensions.get('window').width <= 480;
export const isIpad = () => isIOS() && Platform.isPad;

export const getRatio = () => {
  const { height, width } = Dimensions.get('window');

  let ratio = height / width;
  if (width > height) {
    ratio = width / height;
  }

  return ratio;
};

export const isIphoneXsMax = () => isIOS() && getRatio() >= 2.1;
export const isIphoneX = () => isIOS() && getRatio() >= 2.0;
export const isAndroidHighRatio = () => isAndroid() && getRatio() >= 1.93;
export const isAndroidTablet = () => isAndroid() && getRatio() <= 1.6;

export const isTablet = () => isIpad() || isAndroidTablet();

export const iPhoneXStyle = style => (isIphoneX() ? style : {});
export const iPadStyle = style => (isIpad() ? style : {});
export const tabletStyle = style => (isTablet() ? style : {});
export const getAccessibilityLabel = accessibilityLabel =>
  (isIOS() ? { testID: accessibilityLabel } : { accessibilityLabel });

const keyboardTypes = {
  web: 'default',
  ios: 'numeric',
  android: 'numeric'
};
export const numericKeyboard = keyboardTypes[Platform.OS];

export default {
  isAndroid,
  isIOS,
  isNative,
  isTestingNative,
  isWeb,
  isMobileWeb,
  isIphoneX,
  isIphoneXsMax,
  isAndroidHighRatio,
  isAndroidTablet,
  isTablet,
  iPhoneXStyle,
  iPadStyle,
  tabletStyle,
  numericKeyboard,
  getAccessibilityLabel,
  getRatio
};
