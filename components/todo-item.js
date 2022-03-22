import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const TodoItem = ({ item, deleteHandler }) => {
  return (
    <TouchableOpacity style={styles.todositemlist}>
      <View>
        <Text style={styles.item}>{item.text}</Text>
      </View>
      <MaterialIcons
        name="delete"
        style={styles.icon}
        onPress={() => deleteHandler(item.key)}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 5,
    borderColor: "#bbb",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10,
    margin: 12,
    width: 305,
  },
  todositemlist: {
    flexDirection: "row",
  },
  icon: {
    fontSize: 35,
    fontWeight: "bold",
    marginTop: 15,
    color: "black",
  },
});
export default TodoItem;
