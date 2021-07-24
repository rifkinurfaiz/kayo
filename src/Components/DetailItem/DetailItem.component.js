import * as React from 'react';
import { View, Text } from 'react-native';

import styles from './DetailItem.styles';
import config from '../../Config';

const _renderDot = id => <View style={styles.dot(config.color[id])} />;

/**
 * Display first 4 of assets
 *
 * @param {Array} assets - array of assets
 * @returns {React.Node} Mapped asset list component
 */
const _mapAssets = assets =>
  assets.slice(0, 4).map((asset, i) => {
    return (
      <View style={styles.assetContainer} key={i}>
        {_renderDot(asset.id)}
        <Text style={styles.assetName}>{asset.name}</Text>
        <Text style={styles.amount(asset.amount)}>{asset.amount}</Text>
      </View>
    );
  });

/**
 * Render component detail item
 *
 * @param {Object} props - props
 * @returns {React.Node} Detail item component
 */
export const DetailItem = props => (
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
