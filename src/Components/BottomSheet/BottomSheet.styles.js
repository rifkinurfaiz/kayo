import memoize from 'fast-memoize';

import colors from '../../Assets/Colors';

export default {
  container: {
    borderRadius: 10,
    opacity: 1,
    padding: 30
  },
  draggableIcon: {
    backgroundColor: '#000'
  },
  month: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  accountList: {
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  totalAmount: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 'auto',
    paddingTop: 20
  },
  accountName: {
    marginLeft: 20,
    color: colors.primary.black,
    width: 55,
    fontSize: 17
  },
  amountContainer: {
    marginLeft: 'auto'
  },
  amount: {
    color: colors.primary.black,
    fontSize: 17
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
  })),
  scrollView: {
    marginTop: 20
  }
};
