import * as React from 'react';
import { View, TouchableWithoutFeedback, Dimensions, ScrollView, Text } from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';

import styles from './BottomSheet.styles';
import config from '../../Config';

const Screen = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height
};

const _renderIcon = id => <View style={styles.icon(config.color[id])} />;

const _renderAccountList = (item, i) => (
  <View style={styles.accountList} key={i}>
    {_renderIcon(item.id)}
    <Text style={styles.accountName}>{item.name}</Text>
    <View style={styles.amountContainer}>
      <Text style={styles.amount}>{item.amount}</Text>
      <Text style={styles.type}>{item.type}</Text>
    </View>
  </View>
);

const _renderContent = ({ accounts, totalAmount, month }) => (
  <View>
    <Text style={styles.month}>{month}</Text>
    <TouchableWithoutFeedback>
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        {accounts && accounts.map((item, i) => (
          _renderAccountList(item, i)
        ))}
        <Text style={styles.totalAmount}>{totalAmount}</Text>
      </ScrollView>
    </TouchableWithoutFeedback>
  </View>
);

const BottomSheet = React.forwardRef((props, ref) => {
  return (
    <RBSheet
      ref={ref}
      dragFromTopOnly={true}
      closeOnDragDown={true}
      height={Screen.height / props.height}
      customStyles={styles}>
      {_renderContent(props.item)}
    </RBSheet>
  );
});

export default BottomSheet;
