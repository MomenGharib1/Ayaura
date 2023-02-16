import React, { useState } from "react";
import * as api from "../api";

import axios from "axios";
import {
  TextInput,
  Image,
  StyleSheet,
  Button,
  SafeAreaView,
  Text,
  ToastAndroid,
  Platform,
} from "react-native";

const TextToImage = ({ navigation }) => {
  const loadingMessages = [
    "Generating your image...",
    "Just a few more seconds...",
    "Why did the tomato turn red? Because it saw the salad dressing! 🤣🤣",
    "I'm sorry, won't happen again",
    "Pls, don't close the app.",
    "my developer won't feed me 🥺.",
    "Oh wait, I don't even eat!",
  ];

  const [text, setText] = useState("");
  const [image, setImage] = useState(
    "https://png.pngtree.com/png-clipart/20190918/ourmid/pngtree-pink-watercolor-brushes-171474-png-image_1733978.jpg"
  );
  const handlePress = () => {
    navigation.navigate("Home");
  };

  const generateImage = async () => {
    Platform.OS === "android"
      ? loadingMessages.forEach((element) => {
          ToastAndroid.show(element, 3500);
          ToastAndroid.TOP;
        })
      : console.log("not android");

    const data = await api.Generate(text);
    const res = data.data[0].b64_json;
    const img = `data:image/jpeg;base64,${res}`;
    setImage(img);

    const imageData = {
      url: img,
      name: "image-" + new Date().getTime(),
      prompt: text,
    };
    const response2 = await axios.post("/images", imageData);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Imagination on you, rest on us 🤫</Text>
      <TextInput
        style={styles.input}
        placeholder="Imagination is free!"
        onChangeText={(text) => setText(text)}
        value={text}
      />

      <Image source={{ uri: image }} style={styles.image} />

      <Button
        color="#3C84AB"
        onPress={generateImage}
        title="Generate Image"
      ></Button>
      <Text onPress={handlePress} style={styles.text2}>
        Wanna see other's imaginations? 🤯
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    display: "flex",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    minHeight: 40,
    width: 200,
    borderColor: "#3C84AB",
    color: "black",
    borderRadius: 10,
    borderWidth: 2,
    margin: 10,
    padding: 10,
  },
  image: {
    width: 300,
    height: 300,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 20,
  },
  text: {
    fontSize: 20,
    fontFamily: "Montserrat",
    color: "#205E61",
  },
  text2: {
    fontSize: 18,
    fontFamily: "Montserrat",
    color: "#205E61",
    marginTop: 10,
    marginBottom: 10,
  },
});

export default TextToImage;
