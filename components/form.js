import React from "react";
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";

const Form = ({ text, setText, submitHandler }) => {
  const addHandler = (val) => {
    setText(val);
  };
  return (
    <SafeAreaView style={styles.inputcontainer}>
      <TextInput
        style={styles.input}
        onChangeText={addHandler}
        value={text}
        placeholder="What's your plan?"
      />
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => submitHandler(text)}
        >
          <Text style={styles.buttontext}>ADD</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  inputcontainer: {
    flexDirection: "row",
  },
  input: {
    marginTop: 25,
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderBottomColor: "#ddd",
    borderBottomWidth: 1,
    height: 50,
    margin: 12,
    padding: 10,
    width: 290,
  },
  button: {
    padding: 10,
    marginTop: 25,
    backgroundColor: "green",
  },
  buttontext: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
export default Form;
