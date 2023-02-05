import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import TextToImage from "./pages/TextToImage";
import Home from "./pages/Home";
import Navigator from "./routes/homeStack";

export default function App() {
  return <Navigator />;
}
