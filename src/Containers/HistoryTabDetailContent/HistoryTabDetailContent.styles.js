import { Dimensions } from 'react-native';

import { size, platform } from '../../Utils';
import colors from '../../Assets/Colors';

const { scaleWidth, scaleHeight, scaleFont } = size;
const { primary } = colors;
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
    backgroundColor: '#EEEEEE'
  },
  detailItemContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: scaleWidth(10)
  },
  yearContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: scaleHeight(10)
  },
  yearWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: scaleWidth(80),
    padding: 3,
    borderRadius: 3
  },
  yearText: {
    fontWeight: 'bold',
    color: primary.black,
    fontSize: scaleFont(17)
  },
  scrollView: {
    marginBottom: scaleHeight(40)
  },
  addMoreContainer: {
    borderRadius: 5,
    width: getWidth(),
    marginBottom: scaleHeight(10)
  },
  addMoreWrapper: {
    marginTop: scaleHeight(60),
    alignItems: 'center',
    justifyContent: 'center'
  },
  addMoreText: {
    height: scaleHeight(85),
    marginTop: scaleHeight(5),
    fontSize: scaleFont(14),
    color: primary.grey
  }
};
