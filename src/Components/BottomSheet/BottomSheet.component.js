import * as React from 'react';
import { View, Dimensions } from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';

import styles from './BottomSheet.styles';

const Screen = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height
};

const BottomSheet = React.forwardRef((props, ref) => {
  return (
    <RBSheet
      ref={ref}
      closeOnDragDown={true}
      height={Screen.height / props.height}
      customStyles={styles}>
      <View />
    </RBSheet>
  );
});

export default BottomSheet;
