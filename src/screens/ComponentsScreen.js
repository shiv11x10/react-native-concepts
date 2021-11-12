import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
    const name = "Shivam";

    return (
        <View>
            <Text style={styles.textStyle}>This is Components Screen</Text>
            <Text style={{fontSize:20}}>Hi There</Text>
            <Text>My name is {name}</Text>

        </View>
        );
};

const styles = StyleSheet.create({ // This will validate the set of styling rules that we pass into it.
    textStyle: {
        fontSize: 30
    }
});

export default ComponentsScreen;