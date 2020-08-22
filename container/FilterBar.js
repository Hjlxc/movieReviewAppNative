import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  ScrollView,
  Text,
  StyleSheet,
  View,
  Switch,
  Dimensions,
} from 'react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

import FilterPopover from './FilterPopover';
import {CheckBoxGroup} from '../component';

import {modules} from 'movie-review-app';
import styles from '../styles';

const {
  selectMovieAdult,
  selectLanguageOption,
  selectMovieLanguage,
  selectMovieVoting,
} = modules.movieFilter.selectors;
const {
  setMovieFilterAdult,
  setMovieFilterLanguage,
  setMovieFilterVoting,
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
      popoverStyle={{width: Dimensions.get('window').width}}
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

const VotingFilter = () => {
  const dispatch = useDispatch();
  const voting = useSelector(selectMovieVoting);
  const onVotingFilterChange = ([min, max]) =>
    dispatch(setMovieFilterVoting({min, max}));
  return (
    <FilterPopover
      title={`Voting (${voting.selectMin.toFixed(
        1,
      )} - ${voting.selectMax.toFixed(1)})`}
      virticalOffset={-1}
      popoverStyle={{
        ...styles.centered,
        width: Dimensions.get('window').width,
      }}>
      <MultiSlider
        min={voting.min}
        max={voting.max}
        values={[voting.selectMin, voting.selectMax]}
        onValuesChangeFinish={onVotingFilterChange}
        step={0.1}
        allowOverlap={false}
        minMarkerOverlapDistance={10}
        sliderLength={Dimensions.get('window').width * 0.8}
      />
    </FilterPopover>
  );
};

const FilterBar = () => {
  return (
    <ScrollView horizontal={true} style={filterBarStyle.containerStyle}>
      <AdultFilter />
      <LanguageFilter />
      <VotingFilter />
    </ScrollView>
  );
};

const filterBarStyle = StyleSheet.create({
  containerStyle: {
    padding: 5,
  },
});
export default FilterBar;
