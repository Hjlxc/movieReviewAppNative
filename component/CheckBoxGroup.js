import React from 'react';
import {View} from 'react-native';
import {CheckBox} from 'react-native-elements';

import styles from '../styles';

const CheckBoxGroup = ({options, checked, onOptionPress}) => {
  return (
    <View
      style={{
        ...styles.horizontalCentered,
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
      }}>
      {options.map((option, idx) => (
        <CheckBox
          title={option}
          checked={checked[option]}
          containerStyle={{width: 80}}
          onPress={() => onOptionPress(option)}
        />
      ))}
    </View>
  );
};

export default CheckBoxGroup;
