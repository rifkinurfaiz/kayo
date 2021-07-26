import memoize from 'fast-memoize';

import colors from '../../Assets/Colors';
import { size } from '../../Utils';
const { scaleWidth, scaleHeight, scaleSize, scaleFont } = size;

export default {
  container: {
    borderRadius: 10,
    opacity: 1,
    padding: scaleWidth(20),
    paddingBottom: scaleHeight(60)
  },
  draggableIcon: {
    backgroundColor: '#000'
  },
  month: {
    fontSize: scaleFont(24),
    fontWeight: 'bold',
    marginBottom: scaleHeight(15)
  },
  assetList: {
    marginTop: scaleHeight(5),
    marginBottom: scaleHeight(2),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  totalAmount: {
    fontSize: scaleFont(18),
    fontWeight: 'bold',
    marginLeft: 'auto',
    paddingTop: scaleHeight(20),
    paddingBottom: scaleHeight(30)
  },
  assetName: {
    marginLeft: scaleWidth(10),
    width: scaleWidth(150),
    color: colors.primary.black,
    fontSize: scaleFont(17)
  },
  amount: {
    color: colors.primary.black,
    fontSize: scaleFont(17),
    fontWeight: 'bold',
    marginLeft: 'auto'
  },
  type: {
    color: colors.primary.grey,
    marginLeft: 'auto'
  },
  icon: memoize(color => ({
    width: scaleSize(25),
    height: scaleSize(25),
    borderRadius: 15,
    backgroundColor: color,
    marginRight: scaleWidth(5)
  })),
  assetListContainer: {
    marginBottom: scaleHeight(10)
  }
};
