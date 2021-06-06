import { Dimensions } from 'react-native';

const _getScreenRatio = () => {
  const { width, height } = Dimensions.get('window');

  console.log('width', width);
  console.log('height', height);

  return height > width ? height / width : width / height;
};

const isSmallScreen = () => {
  return _getScreenRatio() < 2 ? true : false;
};

export default {
  isSmallScreen
};
