/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Provider} from 'react-redux';
import {View} from 'react-native';

import FilterBar from './container/FilterBar';
import SearchBox from './container/SearchBox';
import MovieList from './container/MovieList';
import styles from './styles';

import store from 'movie-review-app';

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <View>
        <View>
          <SearchBox />
        </View>
        <View>
          <FilterBar />
        </View>
        <View style={{...styles.divider, marginTop: 0}} />
        <View>
          <MovieList />
        </View>
      </View>
    </Provider>
  );
};

export default App;
