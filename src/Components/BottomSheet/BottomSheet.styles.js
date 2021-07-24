import memoize from 'fast-memoize';

import colors from '../../Assets/Colors';

export default {
  container: {
    borderRadius: 10,
    opacity: 1,
    padding: 30,
    paddingBottom: 60
  },
  draggableIcon: {
    backgroundColor: '#000'
  },
  month: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  },
  assetList: {
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  totalAmount: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 'auto',
    paddingVertical: 20
  },
  assetName: {
    marginLeft: 20,
    color: colors.primary.black,
    fontSize: 17
  },
  amountContainer: {
    marginLeft: 'auto'
  },
  amount: {
    color: colors.primary.black,
    fontSize: 17,
    fontWeight: 'bold'
  },
  type: {
    color: colors.primary.grey,
    marginLeft: 'auto'
  },
  icon: memoize(color => ({
    width: 17,
    height: 17,
    borderRadius: 9,
    backgroundColor: color,
    marginVertical: 5,
    marginRight: 5
  }))
};
