// @flow
import * as React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

import styles from './Shimmer.styles';

const Shimmer = (props: Object): React.Node => (
  <SkeletonPlaceholder {...styles.defaultShimmering}>
    {props.children}
  </SkeletonPlaceholder>
);

export default Shimmer;
