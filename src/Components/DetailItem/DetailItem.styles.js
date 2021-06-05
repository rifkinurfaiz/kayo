import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default {
  container: {
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 5,
    paddingBottom: 5,
    width: width / 2 - 20
  },
  title: {
    padding: 3,
    alignItems: 'center',
    borderBottomWidth: 1
  }
};
