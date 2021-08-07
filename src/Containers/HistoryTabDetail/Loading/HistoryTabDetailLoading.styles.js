import { Dimensions } from 'react-native';

import { size, platform } from '../../../Utils';

const { scaleWidth, scaleHeight } = size;
const { width } = Dimensions.get('window');

const getWidth = () => {
  if (platform.isIOS()) {
    return scaleWidth((width / 2) - 38);
  }

  return platform.isAndroidHighRatio()
    ? scaleWidth((width / 2) - 37)
    : scaleWidth((width / 2) - 12);
};

export default {
  container: {
    padding: scaleWidth(10)
  },
  yearContainer: {
    alignItems: 'center',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  year: {
    width: scaleWidth(70),
    height: scaleHeight(30)
  },
  contentContainer: {
    marginTop: scaleHeight(10),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  content: {
    width: getWidth(),
    height: scaleHeight(160),
    borderRadius: 5
  }
};
