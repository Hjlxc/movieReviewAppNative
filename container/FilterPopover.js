import React, {useState} from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';
import Popover from 'react-native-popover-view';
import Icon from 'react-native-vector-icons/AntDesign';

const filterBarStyle = StyleSheet.create({
  titleStyle: {
    padding: 10,
  },
});

const FilterPopover = ({title, virticalOffset, children, popoverStyle}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Popover
      mode="rn-modal"
      placement="bottom"
      arrowStyle={{backgroundColor: 'transparent'}}
      popoverStyle={popoverStyle}
      verticalOffset={virticalOffset}
      onOpenComplete={() => setIsOpen(true)}
      onCloseStart={() => setIsOpen(false)}
      from={(sourceRef, showPopover) => (
        <Button
          onPress={() => {
            showPopover();
            setIsOpen(true);
          }}
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
    </Popover>
  );
};

export default FilterPopover;
