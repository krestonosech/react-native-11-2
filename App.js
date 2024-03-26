import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import Swiper from 'react-native-swiper';

const PhotoSlider = () => {
  return (
    <Swiper
      showsButtons={true}
      nextButton={<Text>сюда</Text>}
      prevButton={<Text>туда</Text>}
    >
      <View style={styles.slide}>
        <Image source={require('./assets/adaptive-icon.png')} style={styles.image} />
      </View>
      <View style={styles.slide}>
        <Image source={require('./assets/icon.png')} style={styles.image} />
      </View>
      <View style={styles.slide}>
        <Image source={require('./assets/splash.png')} style={styles.image} />
      </View>
    </Swiper>
  );
};

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});

export default PhotoSlider;
