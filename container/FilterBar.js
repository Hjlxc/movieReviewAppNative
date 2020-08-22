import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {ScrollView, Text, StyleSheet, View, Switch} from 'react-native';

import FilterPopover from './FilterPopover';
import {CheckBoxGroup} from '../component';

import {modules} from 'movie-review-app';
import styles from '../styles';

const {
  selectMovieAdult,
  selectLanguageOption,
  selectMovieLanguage,
} = modules.movieFilter.selectors;
const {
  setMovieFilterAdult,
  setMovieFilterLanguage,
} = modules.movieFilter.actions;

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
  const dispatch = useDispatch();
  const options = useSelector(selectLanguageOption);
  const checked = useSelector(selectMovieLanguage);
  const onOptionPress = (option) => dispatch(setMovieFilterLanguage(option));
  const checkedNumber = Object.keys(checked).length;
  return (
    <FilterPopover
      title={`Language${checkedNumber ? ` (${checkedNumber})` : ''}`}
      virticalOffset={-1}>
      <CheckBoxGroup
        options={options}
        checked={checked}
        onOptionPress={onOptionPress}
      />
    </FilterPopover>
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
  containerStyle: {
    padding: 5,
  },
});
export default FilterBar;
