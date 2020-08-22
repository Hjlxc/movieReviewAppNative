import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';
import Popover from 'react-native-popover-view';
import Icon from 'react-native-vector-icons/AntDesign';

import styles from '../styles';

const filterBarStyle = StyleSheet.create({
  titleStyle: {
    padding: 10,
  },
});

const FilterPopover = ({
  title,
  virticalOffset,
  children,
  popoverStyle,
  onPressReset,
  resetVisible,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Popover
      isVisible={isOpen}
      mode="rn-modal"
      placement="bottom"
      arrowStyle={{backgroundColor: 'transparent'}}
      popoverStyle={{paddingTop: 15, ...popoverStyle}}
      verticalOffset={virticalOffset}
      from={(sourceRef) => (
        <Button
          onPress={() => setIsOpen(true)}
          ref={sourceRef}
          type="outline"
          title={title}
          iconRight
          icon={<Icon name={isOpen ? 'up' : 'down'} size={15} />}
          titleStyle={filterBarStyle.titleStyle}
          containerStyle={{paddingRight: 15}}
        />
      )}>
      {children}
      <View style={styles.divider}></View>
      <View
        style={{
          ...styles.virticalContainer,
          flexDirection: 'row',
          justifyContent: resetVisible ? 'space-between' : 'flex-end',
          width: '100%',
          paddingLeft: '5%',
          paddingRight: '5%',
        }}>
        {resetVisible && (
          <Button title="Reset" type="clear" onPress={onPressReset}></Button>
        )}
        <Button
          title="Done"
          type="clear"
          onPress={() => setIsOpen(false)}></Button>
      </View>
    </Popover>
  );
};

export default FilterPopover;
