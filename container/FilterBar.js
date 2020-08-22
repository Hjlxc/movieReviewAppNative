import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  ScrollView,
  Text,
  StyleSheet,
  View,
  Switch,
  Dimensions,
} from 'react-native';
import {Button} from 'react-native-elements';
import Popover from 'react-native-popover-view';

import Icon from 'react-native-vector-icons/AntDesign';

import {modules} from 'movie-review-app';
import styles from '../styles';

const {sortOptions} = modules.movieFilter.metadata;
const {selectMovieAdult} = modules.movieFilter.selectors;
const {setMovieFilterAdult} = modules.movieFilter.actions;

const AdultFilter = () => {
  const dispatch = useDispatch();
  const reduxAdult = useSelector(selectMovieAdult);
  return (
    <View style={{...styles.horizontalCentered, ...styles.horizontalContainer}}>
      <View style={{...styles.centered, ...styles.horizontalContainer}}>
        <Text>Adult Only</Text>
      </View>
      <Switch
        trackColor={{false: '#767577', true: '#febd69'}}
        thumbColor={reduxAdult ? '#81b0ff' : '#f4f3f4'}
        onValueChange={(value) => {
          dispatch(setMovieFilterAdult(value));
        }}
        value={reduxAdult}
      />
    </View>
  );
};

const LanguageFilter = () => {
  return (
    <Popover
      mode="rn-modal"
      placement="bottom"
      arrowStyle={{backgroundColor: 'transparent'}}
      popoverStyle={{width: Dimensions.get('window').width}}
      verticalOffset={-1}
      from={(sourceRef, showPopover) => (
        <Button
          onPress={showPopover}
          ref={sourceRef}
          type="outline"
          title="Language"
          iconRight
          icon={<Icon name="down" size={15} />}
          titleStyle={filterBarStyle.titleStyle}
        />
      )}>
      <Text>Test Popover</Text>
    </Popover>
  );
};

const FilterBar = () => {
  return (
    <ScrollView horizontal={true} style={filterBarStyle.containerStyle}>
      <AdultFilter />
      <LanguageFilter />
    </ScrollView>
  );
};

const filterBarStyle = StyleSheet.create({
  //   containerStyle: {
  //     position: 'relative',
  //   },
  containerStyle: {
    display: 'flex',
    padding: 5,
  },
  iconContainerStyle: {
    position: 'relative',
    top: 10,
  },
  titleStyle: {
    padding: 10,
  },
});
export default FilterBar;
