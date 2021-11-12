import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';

const ImageDetail = (props) => {
    return (
        <View>
            <Image source={props.imageSrc} />
            <Text>{props.title}</Text>
            <Text>Image score - {props.score}</Text>
        </View>        
    )
}

const styles = StyleSheet.create({});

export default ImageDetail;