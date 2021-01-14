import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import Colors from '../constants/colors';

const GameOverScreen = props => {
  return (
    <View style={styles.root}>
      <Text style={styles.text}> The Game is Over</Text>
      <Text>Number of rounds: {props.roundsNumber}</Text>
      <Text>Number was: {props.userNumber}</Text>
      <View style={styles.button} >
      <Button title="NEW GAME" onPress={props.onRestart} 
      color={Colors.primary}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
      fontSize: 32
  },
  button: {
     width: 150,
     padding: 20,
  }
});

export default GameOverScreen;
