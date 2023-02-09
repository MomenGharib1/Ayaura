import React, { useState } from "react";
import axios from "axios";
import {
  TextInput,
  Image,
  StyleSheet,
  Button,
  SafeAreaView,
  TouchableNativeFeedback,
  Text,
} from "react-native";

const TextToImage = ({ navigation }) => {
  const [text, setText] = useState("");
  const [image, setImage] = useState(
    "https://png.pngtree.com/png-clipart/20190918/ourmid/pngtree-pink-watercolor-brushes-171474-png-image_1733978.jpg"
  );
  const handlePress = () => {
    navigation.navigate("Home");
  };

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
          response_format: "b64_json",
        }),
      }
    );

    const data = await response.json();
    //console.log(data.data[0].b64_json);
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
      <TouchableNativeFeedback>
        <Image source={{ uri: image }} style={styles.image} />
      </TouchableNativeFeedback>

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
    marginBottom: 1,
  },
});

export default TextToImage;
