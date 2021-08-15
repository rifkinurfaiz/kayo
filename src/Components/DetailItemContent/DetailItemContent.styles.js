import memoize from 'fast-memoize';

import { size } from '../../Utils';
const { scaleWidth, scaleSize } = size;

export default {
  icon: memoize(color => ({
    width: scaleSize(25),
    height: scaleSize(25),
    borderRadius: 15,
    backgroundColor: color,
    marginRight: scaleWidth(5)
  }))
};
