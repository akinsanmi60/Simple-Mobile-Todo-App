import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const header = () => {
  return (
    <View style={styles.headercontainer}>
      <Text style={styles.titletext}>
        Todo List <Ionicons name="book" size={34} color="white" />
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headercontainer: {
    height: 50,
    paddingTop: 5,
    backgroundColor: "#723c70",
    marginTop: 50,
  },
  titletext: {
    textAlign: "center",
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
    marginLeft: "10",
  },
});
export default header;
