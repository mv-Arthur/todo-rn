import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Header() {
  return (
    <View style={styles.main}>
      <Text style={styles.text}>Список дел</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 90,
    backgroundColor: "#7df6fa",
  },
  text: {
    marginTop: 30,
    fontSize: 18,
    color: "#fff",
  },
});
