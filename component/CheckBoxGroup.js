import React from 'react';

import {CheckBox} from 'react-native-elements';

const checkBoxGroup = (options, checked, onOptionClick) => {
  return (
    <View>
      {options.map((option, idx) => (
        <CheckBox title={option} checked={checked[option]} />
      ))}
    </View>
  );
};
