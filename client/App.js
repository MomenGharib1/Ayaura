import Navigator from "./routes/homeStack";
import axios from "axios";
import React from "react";
import * as Font from "expo-font";
import { useFonts } from "expo-font";

export default function App() {
  // axios.defaults.baseURL = "http://localhost:3001/";
  axios.defaults.baseURL = "https://ayaura.azurewebsites.net/";
  const fetchFonts = async () =>
    await Font.loadAsync({
      Montserrat: require("./assets/fonts/GloriaHallelujah-Regular.ttf"),
    });
  const [loaded] = useFonts({
    Montserrat: require("./assets/fonts/GloriaHallelujah-Regular.ttf"),
  });

  if (fetchFonts && loaded) {
    return <Navigator />;
  }
}
