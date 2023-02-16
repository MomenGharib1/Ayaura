import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../pages/Home";
import TextToImage from "../pages/TextToImage";
import Header from "../shared/header";
import React from "react";
const screens = {
  TextToImage: {
    screen: TextToImage,
    navigationOptions: () => {
      return {
        headerTitle: () => <Header title="Ayaura" />,
      };
    },
  },
  Home: {
    screen: Home,
    navigationOptions: () => {
      return {
        headerTitle: () => <Header title="Ayaura's Gallery" />,
      };
    },
  },
};

// home stack navigator screens
const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
