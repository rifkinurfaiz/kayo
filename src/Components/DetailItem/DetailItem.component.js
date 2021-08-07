// @flow
import * as React from 'react';
import { View, Text } from 'react-native';

import styles from './DetailItem.styles';
import config from '../../Config';

const _renderIcon = id => <View style={styles.icon(config.color[id])} />;

/**
 * Display first 4 of assets
 *
 * @param {Array} assets - array of assets
 * @returns {React.Node} Mapped asset list component
 */
const _mapAssets = assets =>
  assets.slice(0, 4).map((asset, i): React.Node => {
    return (
      <View style={styles.assetContainer} key={i}>
        {_renderIcon(asset.id)}
        <Text style={styles.assetName} numberOfLines={1}>{asset.name}</Text>
        <Text style={styles.amount(asset.amount)} numberOfLines={1}>{asset.amount}</Text>
      </View>
    );
  });

/**
 * Render component detail item
 *
 * @param {Object} props - props
 * @returns {React.Node} Detail item component
 */
export const DetailItem = (props: Object): React.Node => (
  <View style={styles.container}>
    <View style={styles.title}>
      <Text style={styles.textTitle}>{props.month}</Text>
    </View>
    <View style={styles.assetsContainer}>{_mapAssets(props.assets)}</View>
    <View style={styles.totalAmountContainer}>
      <Text style={styles.totalAmountText}>{props.totalAmount}</Text>
    </View>
  </View>
);

export default DetailItem;
