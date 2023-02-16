import React, { useState, useEffect } from "react";
import * as api from "../api";

import { View, Image, StyleSheet, Text, ScrollView } from "react-native";

const Home = () => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    const getPosts = async () => {
      const list = await api.getPosts();
      console.log(list);
      setImages(list.slice(-30).reverse());
    };
    getPosts();
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        {images.map((image) => (
          <View key={image._id} style={styles.ImageContainer}>
            <Image source={{ uri: image?.url }} style={styles.Image} />
            <Text style={styles.Text}>{image?.prompt}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};
/**/

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    marginTop: 30,
  },

  ImageContainer: {
    marginBottom: 30,
    width: 300,
    borderBottomWidth: 2,
    borderBottomColor: "black",
  },
  Image: {
    borderRadius: 10,
    width: 300,
    height: 300,
  },

  Text: {
    fontFamily: "Montserrat",

    textAlign: "center",
    fontSize: 25,
  },
});

export default Home;
