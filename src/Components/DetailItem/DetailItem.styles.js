import { Dimensions } from 'react-native';
import memoize from 'fast-memoize';

const { width } = Dimensions.get('window');

export default {
  container: {
    borderRadius: 5,
    width: width / 2 - 20,
    backgroundColor: '#FFFFFF',
    marginBottom: 15
  },
  title: {
    padding: 7,
    alignItems: 'center',
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    backgroundColor: '#1e90ff'
  },
  textTitle: {
    color: '#FFFFFF',
    fontWeight: 'bold'
  },
  accounts: {
    padding: 6,
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  accountsContainer: {
    paddingHorizontal: 5
  },
  accountName: {
    width: 55,
    fontSize: 13
  },
  amount: memoize(amount => ({
    fontSize: amount.length > 15 ? 12 : 14
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
    paddingVertical: 5,
    borderTopWidth: 1,
    borderTopColor: '#e1e1e1',
    justifyContent: 'center',
    alignItems: 'center'
  },
  totalAmountText: {
    fontWeight: 'bold'
  }
};
