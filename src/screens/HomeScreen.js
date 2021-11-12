import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

//buttons are less customizable
// TouchableOpacity is more customizable

const HomeScreen = (props) => {
  // console.log(props)

  return (
    <View>
      <Text style={styles.text}>Demo App!</Text>
      <Button
        onPress={() => props.navigation.navigate("Components")} //we can navigate using props of react-navigator
        title="Go to components demo"
      />

      <TouchableOpacity onPress={() => console.log("list pressed")}>
        <Text>Go to List Demo</Text>
      </TouchableOpacity>

      <Button
        onPress={() => props.navigation.navigate("Image")} //we can navigate using props of react-navigator
        title="Go to Image Screen"
      />

      <Button
        onPress={() => props.navigation.navigate("Counter")} //we can navigate using props of react-navigator
        title="Go to Counter Screen"
      />

      <Button
        onPress={() => props.navigation.navigate("Color")} //we can navigate using props of react-navigator
        title="Go to Color Screen"
      />

      <Button
        onPress={() => props.navigation.navigate("Square")} //we can navigate using props of react-navigator
        title="Go to Square Screen"
      />

      <Button
        onPress={() => props.navigation.navigate("ReducerSquare")} //we can navigate using props of react-navigator
        title="Go to Reducer Square Screen"
      />

      <Button
        onPress={() => props.navigation.navigate("Text")} //we can navigate using props of react-navigator
        title="Go to Text Screen"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
