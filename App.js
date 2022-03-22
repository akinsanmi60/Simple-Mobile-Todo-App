import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Alert,
  TouchableNativeFeedback,
  Keyboard,
} from "react-native";
import Header from "./components/header";
import Form from "./components/form";
import TodoItem from "./components/todo-item";

export default function App() {
  const [todos, SetTodos] = useState([
    { text: "Washing of clothes", key: 1 },
    { text: "Playing of game", key: 2 },
    { text: "Coding", key: 3 },
  ]);
  const [text, setText] = React.useState("");

  //function for deleting
  const deleteHandler = (key) => {
    SetTodos((prevTodos) => {
      return prevTodos.filter((todos) => todos.key != key);
    });
  };

  //function for submitting
  const submitHandler = (text) => {
    // adding a condition when submitting i.e if the text length is greater than 4words then submit but if not show Alert
    if (text.length > 4) {
      SetTodos((prevTodos) => {
        // Math.random() * 1000 is use to generate key number for new todo
        return [...prevTodos, { text: text, key: Math.random() * 1000 }];
      });
      setText(""); //clears input value
      //Alert obj is always imported
    } else {
      Alert.alert("HEY!", "The input value must be 4 characters long", [
        { text: "Understood", onPress: () => console.log("alert closed") },
      ]);
    }
  };

  // function to dismiss keyboard
  const dismissKeyboardHandler = () => {
    Keyboard.dismiss();
  };
  return (
    <TouchableNativeFeedback onPress={dismissKeyboardHandler}>
      <View style={styles.container}>
        <Header />
        <View style={styles.formcontainer}>
          <Form text={text} setText={setText} submitHandler={submitHandler} />

          <View style={styles.todlistcontainer}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item} deleteHandler={deleteHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableNativeFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  formcontainer: {
    flex: 1,
    padding: 10,
  },
  todlistcontainer: {
    marginTop: 10,
    flex: 1,
  },
});
