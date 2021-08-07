// @flow
import * as React from 'react';
import { View } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

import { Shimmer } from '../../../Components';
import styles from './HistoryTabDetailLoading.styles';

const year = (): React.Node => (
  <SkeletonPlaceholder.Item {...styles.yearContainer}>
    <SkeletonPlaceholder.Item {...styles.year}/>
  </SkeletonPlaceholder.Item>
);

const content = (): React.Node => (
  <SkeletonPlaceholder.Item {...styles.contentContainer}>
    <SkeletonPlaceholder.Item {...styles.content}/>
    <SkeletonPlaceholder.Item {...styles.content}/>
  </SkeletonPlaceholder.Item>
);

const HistoryTabDetailLoading = (): React.Node => (
  <View style={styles.container}>
    <Shimmer {...styles.defaultShimmering}>
      {year()}
      {content()}
    </Shimmer>
  </View>
);

export default HistoryTabDetailLoading;
