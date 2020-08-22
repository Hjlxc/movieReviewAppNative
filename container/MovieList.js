import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  FlatList,
  StyleSheet,
  View,
  Text,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import config from 'react-native-config';
// import {MOVIE_DB_API_KEY} from '';
import {MovieItem, MovieModal} from '../component';
import {modules, utils} from 'movie-review-app';
console.log(config.MOVIE_DB_API_KEY);
const {parseItemData} = utils;
const {fetchMovieData} = modules.movieData.actions;
const {
  selectFirstUnfetchedPage,
  selectHasMoreData,
} = modules.movieData.selectors;
const {selectFilteredMovie} = modules.movieFilter.selectors;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // paddingTop: 22,
    paddingLeft: 10,
    paddingRight: 10,
  },
  item: {
    padding: 40,
    fontSize: 22,
  },
});

const MovieList = () => {
  const dispatch = useDispatch();

  const [modalItem, setModalItem] = useState(null);

  useEffect(() => {
    dispatch(fetchMovieData({apiKey: 'c06e14cd13b2c6373fdc8f9f3dd47eb3'}));
  }, []);

  const movieData = useSelector(selectFilteredMovie);
  const hasMoreData = useSelector(selectHasMoreData);
  const fetchPage = useSelector(selectFirstUnfetchedPage);
  //   console.log(movieData);

  const onEndReached = () =>
    dispatch(
      fetchMovieData({
        apiKey: 'c06e14cd13b2c6373fdc8f9f3dd47eb3',
        page: fetchPage,
      }),
    );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={movieData}
        renderItem={({item}) => (
          <MovieItem
            onPress={() => setModalItem(item)}
            {...parseItemData(item)}
          />
        )}
        keyExtractor={(item) => item.title}
        onEndReached={hasMoreData && onEndReached}
      />
      <MovieModal
        visible={!!modalItem}
        onClose={() => setModalItem(null)}
        {...parseItemData(modalItem || {})}
      />
    </SafeAreaView>
  );
};

export default MovieList;
