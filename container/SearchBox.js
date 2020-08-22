import React, {useState} from 'react';
import {SearchBar} from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign';

import {useSelector, useDispatch} from 'react-redux';

import {modules} from 'movie-review-app';

const {setMovieFilterSearch} = modules.movieFilter.actions;
const {selectMovieSearch} = modules.movieFilter.selectors;

const SearchBox = () => {
  const dispatch = useDispatch();
  const reduxSearch = useSelector(selectMovieSearch);
  const setReduxSearch = (search) => dispatch(setMovieFilterSearch(search));

  const [search, setSearch] = useState(reduxSearch);

  return (
    <SearchBar
      placeholder="Search"
      platform="android"
      value={search}
      searchIcon={<Icon name="search1" size={25} />}
      cancelIcon={<Icon name="search1" size={25} />}
      onChangeText={(text) => setSearch(text)}
      onEndEditing={() => setReduxSearch(search)}
      onCancel={() => setSearch(reduxSearch)}
      clearIcon={
        <Icon
          name="close"
          size={25}
          onPress={() => {
            setReduxSearch('');
            setSearch('');
          }}
        />
      }
    />
  );
};

export default SearchBox;
