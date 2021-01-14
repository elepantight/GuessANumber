import React from "react";
import { View, StyleSheet } from "react-native";

const Card = (props) => {
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
    backgroundColor: "white",
    elevation: 2.5,
    padding: 20,
    borderRadius: 20,
    /* iOS shadowColor: 'black',
              shadowOffset: { width: 0, height: 2},
              shadowRadius: 6,
              shadowOpacity: 0.25,
               */
  },
});

export default Card;
