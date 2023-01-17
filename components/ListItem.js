import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

export default function ListItem({ el, deleteHandler }) {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      underlayColor="#DDDDDD"
      onPress={() => deleteHandler(el.key)}
    >
      <Text style={styles.text}>
        {el.text + "\n" + Date().substring(0, 25)}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "#fff",
    textAlign: "center",
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: "#78c0ff",
    width: "60%",
    marginLeft: "20%",
    marginTop: 10,
    borderRadius: 10,
  },
});
