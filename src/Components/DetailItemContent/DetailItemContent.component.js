import * as React from 'react';
import { Fragment } from 'react';
import { View, TouchableWithoutFeedback, Dimensions, ScrollView, Text } from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';

import rbStyles from './RBSheet.styles';
import styles from './DetailItemContent.styles';
import config from '../../Config';

const Screen = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height
};

const _renderIcon = id => <View style={styles.icon(config.color[id])} />;

const _renderAssetList = (item, i) => (
  <Fragment key={i}>
    <View style={rbStyles.assetListContainer}>
      <View style={rbStyles.assetList} key={i}>
        {_renderIcon(item.id)}
        <Text style={rbStyles.assetName} numberOfLines={2}>{item.name}</Text>
        <Text style={rbStyles.amount}>{item.amount}</Text>
      </View>
      <Text style={rbStyles.type}>{item.type}</Text>
    </View>
  </Fragment>

);

const _renderContent = ({ assets, totalAmount, month }) => (
  <View>
    <Text style={rbStyles.month}>{month}</Text>
    <TouchableWithoutFeedback>
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        {assets && assets.map((item, i) => (
          _renderAssetList(item, i)
        ))}
        <Text style={rbStyles.totalAmount}>{totalAmount}</Text>
      </ScrollView>
    </TouchableWithoutFeedback>
  </View>
);

const DetailItemContent = React.forwardRef((props, ref) => (
  <RBSheet
    ref={ref}
    dragFromTopOnly={true}
    closeOnDragDown={true}
    height={Screen.height / props.height}
    customStyles={rbStyles}>
    {_renderContent(props.item)}
  </RBSheet>
));

export default DetailItemContent;
