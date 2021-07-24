import { Dimensions } from 'react-native';
import memoize from 'fast-memoize';

import colors from '../../Assets/Colors';
import { size, platform } from '../../Utils';

const { width } = Dimensions.get('window');
const { primary, secondary } = colors;
const { scaleWidth, scaleHeight, scaleFont } = size;

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
    borderRadius: 5,
    width: getWidth(),
    backgroundColor: primary.white,
    marginBottom: scaleHeight(10)
  },
  title: {
    padding: scaleWidth(10),
    alignItems: 'center',
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    backgroundColor: primary.blue
  },
  textTitle: {
    color: primary.white,
    fontWeight: 'bold',
    fontSize: 16
  },
  assetContainer: {
    margin: scaleWidth(5),
    marginVertical: scaleHeight(7),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  assetsContainer: {
    padding: scaleWidth(0)
  },
  assetName: {
    fontSize: scaleFont(12),
    width: scaleWidth(55)
  },
  amount: memoize(amount => ({
    fontSize: scaleFont(12),
    width: platform.isIOS() ? scaleWidth(80) : scaleWidth(90),
    textAlign: 'right'
  })),
  icon: memoize(color => ({
    width: scaleWidth(10),
    height: platform.isIOS() ? scaleHeight(8) : scaleHeight(9),
    borderRadius: scaleWidth(5),
    backgroundColor: color,
    marginRight: scaleWidth(5)
  })),
  totalAmountContainer: {
    marginTop: scaleWidth(5),
    paddingVertical: scaleWidth(10),
    borderTopWidth: 1,
    borderTopColor: secondary.grey,
    justifyContent: 'center',
    alignItems: 'center'
  },
  totalAmountText: {
    fontWeight: 'bold'
  }
};
