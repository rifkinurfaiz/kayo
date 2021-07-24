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
    marginVertical: 5,
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  totalAmount: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 'auto'
  },
  accountName: {
    marginLeft: 20,
    color: colors.blackPrimary,
    width: 55,
    fontSize: 16
  },
  amount: {
    color: colors.blackPrimary,
    marginLeft: 'auto',
    fontSize: 16
  },
  icon: memoize(color => ({
    width: 15,
    height: 15,
    borderRadius: 8,
    backgroundColor: color,
    marginVertical: 5,
    marginRight: 5
  })),
  scrollView: {
    marginVertical: 15
  }
};
