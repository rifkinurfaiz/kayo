import memoize from 'fast-memoize';

import colors from '../../Assets/Colors';

const { primary, secondary } = colors;

export default {
  tabView: {
    backgroundColor: secondary.grey
  },
  tab: {
    backgroundColor: primary.white
  },
  tabIndicator: {
    backgroundColor: primary.blue
  },
  tabLabel: memoize(focused => ({
    color: focused ? primary.blue : primary.black,
    fontWeight: focused ? 'bold' : 'normal'
  })),
  tabLabelWrapper: {
    width: 50
  }
};
