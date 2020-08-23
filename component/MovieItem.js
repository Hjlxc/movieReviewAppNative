import React from 'react';
import {View, Text} from 'react-native';
import {Image, Button, Rating} from 'react-native-elements';
import styles from '../styles';

const MovieItem = ({
  swatch,
  title,
  vote_average,
  release_date,
  original_language,
  onPress,
}) => {
  return (
    <View
      style={{
        ...styles.horizontalCentered,
        ...styles.virticalContainer,
        height: 200,
        marginBottom: 30,
      }}>
      <View style={styles.centered}>
        <Image source={{uri: swatch}} style={{width: 132, height: 200}} />
      </View>
      <View
        style={{...styles.virticalCentered, marginLeft: 10, marginRight: 10}}>
        <Text style={styles.title}>{title}</Text>
        <Rating
          ratingCount={10}
          readonly
          defaultRating={vote_average}
          startingValue={vote_average}
          imageSize={20}
          fractions={1}
        />
        <View style={styles.divider} />
        <View
          style={{
            ...styles.horizontalCentered,
            justifyContent: 'space-between',
            width: '100%',
          }}>
          <View>
            <Text>{release_date}</Text>
          </View>
          <View>
            <Text>{`Language: ${original_language}`}</Text>
          </View>
        </View>
        <View style={{width: '100%', paddingBottom: 10}}>
          <Button title="Overview" onPress={onPress} />
        </View>
      </View>
    </View>
  );
};

export default MovieItem;
