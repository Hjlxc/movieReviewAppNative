import React from 'react';
import {View} from 'react-native';
import {CheckBox} from 'react-native-elements';

const CheckBoxGroup = ({
  options,
  checked,
  onOptionPress,
  containerStyle,
  checkBoxContainerStyle,
}) => {
  return (
    <View style={containerStyle}>
      {options.map((option) => (
        <CheckBox
          key={option}
          title={option}
          checked={checked[option]}
          containerStyle={checkBoxContainerStyle}
          onPress={() => onOptionPress(option)}
        />
      ))}
    </View>
  );
};

export default CheckBoxGroup;
