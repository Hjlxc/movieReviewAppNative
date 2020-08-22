import React from 'react';
import {ScrollView, View, Dimensions, Text} from 'react-native';
import {Overlay} from 'react-native-elements';

import styles from '../styles';

const MovieModal = ({visible, onClose, overview, title}) => {
  const {width} = Dimensions.get('window');

  return (
    <Overlay
      isVisible={visible}
      onBackdropPress={onClose}
      overlayStyle={{width: width * 0.7}}>
      <View>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.divider} />
        <ScrollView>
          <Text>{overview}</Text>
        </ScrollView>
      </View>
    </Overlay>
  );
};

export default MovieModal;
