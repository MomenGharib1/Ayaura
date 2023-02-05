import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../pages/Home";
import TextToImage from "../pages/TextToImage";

const screens = {
  TextToImage: {
    screen: TextToImage,
  },
  Home: {
    screen: Home,
  },
};

// home stack navigator screens
const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
