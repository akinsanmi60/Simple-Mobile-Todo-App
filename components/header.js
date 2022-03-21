import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";

const header = () => {
  return (
    <View style={styles.headertext}>
      <ImageBackground resizeMode="cover" style={styles.image}>
        <Text style={styles.titletext}>Todo List</Text>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  headertext: {
    height: 50,
    paddingTop: 5,
    backgroundColor: "#723c70",
    marginTop: 50,
  },
  image: {
    flex: 1,
  },
  titletext: {
    textAlign: "center",
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
  },
});
export default header;
