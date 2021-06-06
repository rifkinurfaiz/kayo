import * as React from 'react';
import { View, Text } from 'react-native';

import styles from './DetailItem.styles';
import config from '../../Config';

const _dot = id => <View style={styles.dot(config.color[id])} />;

const _mapAccounts = accounts =>
  accounts.map(account => {
    return (
      <View style={styles.accounts}>
        {_dot(account.id)}
        <Text style={styles.accountName}>{account.name}</Text>
        <Text style={styles.amount(account.amount)}>{account.amount}</Text>
      </View>
    );
  });

export const DetailItem = props => (
  <View style={styles.container}>
    <View style={styles.title}>
      <Text style={styles.textTitle}>{props.month}</Text>
    </View>
    <View style={styles.accountsContainer}>{_mapAccounts(props.accounts)}</View>
    <Text>{props.totalAmount}</Text>
  </View>
);

export default DetailItem;
