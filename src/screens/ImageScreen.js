// How to use reusable components(ImageDetail)

import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import ImageDetail from '../components/ImageDetails';

const ImageScreen = () => {
    return (
        <View>
            <ImageDetail title="Forest" imageSrc={require('../../assets/forest.jpg')} score={9}/>
            <ImageDetail title="Beach" imageSrc={require('../../assets/beach.jpg')} score={7}/>
            <ImageDetail title="Mountain" imageSrc={require('../../assets/mountain.jpg')} score={10}/>
        </View>
    );
}

const styles = StyleSheet.create({});

export default ImageScreen;