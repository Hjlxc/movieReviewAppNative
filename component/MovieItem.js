import React from 'react';
import {View, Text} from 'react-native';
import {Card, Image, Divider, Rating, Button} from 'react-native-elements';

import styles from '../styles';

const MovieItem = (itemProps) => {
  return (
    <View
      style={{
        ...styles.horizontalCentered,
        ...styles.virticalContainer,
        height: 200,
        marginBottom: 30,
      }}>
      <View style={styles.centered}>
        <Image
          source={{uri: itemProps.swatch}}
          style={{width: 132, height: 200}}
        />
      </View>
      <View
        style={{...styles.virticalCentered, marginLeft: 10, marginRight: 10}}>
        <Text style={styles.title}>{itemProps.title}</Text>
        <Rating
          count={5}
          readonly
          defaultRating={itemProps.rating}
          startingValue={itemProps.rating}
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
            <Text>{itemProps.release_date}</Text>
          </View>
          <View>
            <Text>{`Language: ${itemProps.original_language}`}</Text>
          </View>
        </View>
        <View style={{width: '100%', paddingBottom: 10}}>
          <Button title="Overview" onPress={itemProps.onPress} />
        </View>
      </View>
    </View>
  );
};

export default MovieItem;
