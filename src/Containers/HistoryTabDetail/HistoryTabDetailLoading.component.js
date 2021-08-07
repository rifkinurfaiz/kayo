import * as React from 'react';
import { View } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

import { Shimmer } from '../../Components';
import styles from './HistoryTabDetailLoading.styles';

const year = () => (
  <SkeletonPlaceholder.Item {...styles.yearContainer}>
    <SkeletonPlaceholder.Item {...styles.year}/>
  </SkeletonPlaceholder.Item>
);

const content = () => (
  <SkeletonPlaceholder.Item {...styles.contentContainer}>
    <SkeletonPlaceholder.Item {...styles.content}/>
    <SkeletonPlaceholder.Item {...styles.content}/>
  </SkeletonPlaceholder.Item>
);

const HistoryTabDetailLoading = () => (
  <View style={styles.container}>
    <Shimmer {...styles.defaultShimmering}>
      {year()}
      {content()}
    </Shimmer>
  </View>
);

export default HistoryTabDetailLoading;
