import { Dimensions } from 'react-native';
import memoize from 'fast-memoize';

import colors from '../../Assets/Colors';

const { width } = Dimensions.get('window');
const { primary, secondary } = colors;

export default {
  container: {
    borderRadius: 5,
    width: width / 2 - 20,
    backgroundColor: primary.white,
    marginBottom: 15
  },
  title: {
    padding: 7,
    alignItems: 'center',
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    backgroundColor: primary.blue
  },
  textTitle: {
    color: primary.white,
    fontWeight: 'bold'
  },
  assetContainer: {
    padding: 6,
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  assetsContainer: {
    paddingHorizontal: 5
  },
  assetName: {
    fontSize: 13
  },
  amount: memoize(amount => ({
    fontSize: amount.length > 15 ? 12 : 14,
    marginLeft: 'auto'
  })),
  dot: memoize(color => ({
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: color,
    marginVertical: 5,
    marginRight: 5
  })),
  totalAmountContainer: {
    marginTop: 5,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: secondary.grey,
    justifyContent: 'center',
    alignItems: 'center'
  },
  totalAmountText: {
    fontWeight: 'bold'
  }
};
