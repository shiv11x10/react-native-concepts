import React from 'react';
import { Text, StyleSheet, View, FlatList } from 'react-native';

const ListScreen = () => {
    const friends = [
        {name: "friend #1", age: '30'},
        {name: "friend #2", age: '32'},
        {name: "friend #3", age: '33'},
        {name: "friend #4", age: '34'},
        {name: "friend #5", age: '35'},
        {name: "friend #6", age: '36'},
        {name: "friend #7", age: '38'},
        {name: "friend #8", age: '39'},
        {name: "friend #9", age: '31'},

    ]

    return (
        <FlatList 
            // horizontal
            // showsHorizontalScrollIndicator={false}
            keyExtractor = { friend => friend.name} // use the key help react identify items uniquely
            data = {friends}
            // renderItem = {(element) => {
            //     // element == { item: { name: 'Friend #1' }, index: 0 } structure of element
            // }}
            //instead, we can use destructuring directly
            renderItem = {({item}) => {
                //item === {name : 'Friend #1'}
                return  <Text style = {styles.textStyle}>{item.name} - Age {item.age}</Text>
            }}
            
        />
    )
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }
});

export default ListScreen;
