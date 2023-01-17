import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  Button,
} from "react-native";
import Header from "./components/Header";
import React, { useState } from "react";
import ListItem from "./components/ListItem";
import Form from "./components/Form";
export default function App() {
  const [listOfItems, addItems] = useState([
    // { text: "помыть машину", key: "2312" },
    // { text: "купить молоко", key: "432" },
    // { text: "помыть посуду", key: "346" },
    // { text: "стать миллионером", key: "412" },
    // { text: "изобрести вечный двигатель", key: "532" },
  ]);

  const addHandler = (text) => {
    addItems((list) => {
      return [{ text: text, key: Date.now() }, ...list];
    });
  };

  const deleteHandler = (key) => {
    addItems((list) => {
      return list.filter((listOfItems) => listOfItems.key !== key);
    });
  };

  const clear = () => {
    addItems((list) => {
      return [];
    });
  };
  return (
    <View>
      <Header />
      <Form addHandler={addHandler} />
      <Button onPress={clear} title="Удалить все задачи" />
      <SafeAreaView>
        <FlatList
          data={listOfItems}
          renderItem={({ item }) => (
            <ListItem el={item} deleteHandler={deleteHandler} />
          )}
          keyExtractor={(item) => item.key}
        />
      </SafeAreaView>
    </View>
  );
}
