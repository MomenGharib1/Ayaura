import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import TextToImage from "./pages/TextToImage";
import Home from "./pages/Home";
import Navigator from "./routes/homeStack";
import axios from "axios";

export default function App() {
  axios.defaults.baseURL = "http://localhost:3001/";
  return <Navigator />;
}
