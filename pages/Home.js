import React, { useState } from "react";
import {
  View,
  TextInput,
  Image,
  StyleSheet,
  Button,
  SafeAreaView,
  Touchable,
  TouchableNativeFeedback,
  Text,
} from "react-native";

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>hello!!</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 40,
    width: 200,
    borderColor: "gray",
    borderWidth: 1,
    margin: 10,
    padding: 10,
  },
  image: {
    width: 300,
    height: 300,
    margin: 10,
  },
});

export default Home;
