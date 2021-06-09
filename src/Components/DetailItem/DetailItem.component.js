import * as React from 'react';
import { View, Text } from 'react-native';

import styles from './DetailItem.styles';
import config from '../../Config';

const _dot = id => <View style={styles.dot(config.color[id])} />;

/**
 * Display first 4 of accounts
 *
 * @param {Array} accounts - array of bank accounts
 * @returns {React.Node} Mapped account list component
 */
const _mapAccounts = accounts =>
  accounts.slice(0, 4).map((account, i) => {
    return (
      <View style={styles.accounts} key={i}>
        {_dot(account.id)}
        <Text style={styles.accountName}>{account.name}</Text>
        <Text style={styles.amount(account.amount)}>{account.amount}</Text>
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
    <View style={styles.accountsContainer}>{_mapAccounts(props.accounts)}</View>
    <View style={styles.totalAmountContainer}>
      <Text style={styles.totalAmountText}>{props.totalAmount}</Text>
    </View>
  </View>
);

export default DetailItem;
