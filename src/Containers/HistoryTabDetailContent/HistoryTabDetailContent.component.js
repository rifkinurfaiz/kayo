import * as React from 'react';
import { View, Text, ScrollView } from 'react-native';

import styles from './HistoryTabDetailContent.styles';
import DetailItem from '../../Components/DetailItem';

const data = {
  accounts: [
    {
      id: 'jenius',
      name: 'Jenius',
      amount: 'Rp10.000.000'
    },
    {
      id: 'bca',
      name: 'BCA',
      amount: 'Rp10.200.140.234'
    },
    {
      id: 'ovo',
      name: 'OVO',
      amount: 'Rp2.040.000'
    },
    {
      id: 'gopay',
      name: 'Gopay',
      amount: 'Rp1.000'
    }
  ],
  totalAmount: 'Rp212.181.234'
};

export const HistoryTabDetailContent = props => {
  return (
    <View>
      <View style={styles.yearContainer}>
        <Text>{props.year}</Text>
      </View>
      <ScrollView>
        <View style={styles.detailItemContainer}>
          <DetailItem month="January" data={data} />
          <DetailItem month="February" data={data} />
        </View>
      </ScrollView>
    </View>
  );
};

export default HistoryTabDetailContent;
