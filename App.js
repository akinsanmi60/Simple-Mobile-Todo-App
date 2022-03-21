import { StyleSheet, Text, View, FlatList } from "react-native";
import React, { useState } from "react";
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
    SetTodos((prevTodos) => {
      // Math.random() * 1000 is use to generate key number for new todo
      return [...prevTodos, { text: text, key: Math.random() * 1000 }];
    });
  };
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.formcontainer}>
        <Form text={text} setText={setText} submitHandler={submitHandler} />
      </View>

      <View style={styles.todlistcontainer}>
        <FlatList
          data={todos}
          renderItem={({ item }) => (
            <TodoItem item={item} deleteHandler={deleteHandler} />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
