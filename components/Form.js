import React, { useState } from "react";
import { Button, StyleSheet, TextInput, Text, View } from "react-native";

export default function Form({ addHandler }) {
  const [text, setValue] = useState("");
  const onChange = (text) => {
    setValue(text);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={onChange}
        placeholder="впишите задачу..."
      ></TextInput>
      <Button
        color={"#69c6c9"}
        title="Добавить задачу"
        onPress={() => {
          addHandler(text);
        }}
      ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    borderColor: "#000",
    padding: 10,
    marginVertical: 20,
    width: "60%",
    marginHorizontal: "20%",
  },
});
