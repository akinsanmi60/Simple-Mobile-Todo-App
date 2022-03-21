import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const TodoItem = ({ item, deleteHandler }) => {
  return (
    <TouchableOpacity 
    style={styles.todositemlist} 
    onPress= {() => deleteHandler(item.key)}>
      <Text style={styles.item}>{item.text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
 item: {
    padding: 16,
    marginTop: 5,
    borderColor: '#bbb',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 10,  
    margin: 12,

  },
});
export default TodoItem;
