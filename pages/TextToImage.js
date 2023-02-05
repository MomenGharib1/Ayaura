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

const TextToImage = () => {
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);

  const generateImage = async () => {
    // code to call the DALL-E API and get the generated image
    const response = await fetch(
      `https://api.openai.com/v1/images/generations`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer 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`,
        },
        body: JSON.stringify({
          model: "image-alpha-001",
          prompt: text,
          num_images: 1,
          size: "1024x1024",
        }),
      }
    );

    const data = await response.json();
    setImage(data.data[0].url);
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Imagination is free!"
        onChangeText={(text) => setText(text)}
        value={text}
      />
      <TouchableNativeFeedback>
        <Image source={{ uri: image }} style={styles.image} />
      </TouchableNativeFeedback>

      <Button onPress={generateImage} title="Generate Image"></Button>
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
    margin: 10,
  },
});

export default TextToImage;
