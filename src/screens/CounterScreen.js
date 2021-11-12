// How to use state management in react components

import React, { useState } from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const CounterScreen = (props) => {
  const [counter, setCounter] = useState(0); //default value is et as 0

  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          //counter++  -> Don't do this
          setCounter(counter + 1);
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          //counter++  -> Don't do this
          setCounter(counter - 1);
        }}
      />
      <Text>Counter value: {counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
