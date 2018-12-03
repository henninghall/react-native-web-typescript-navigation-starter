import { createSwitchNavigator } from "@react-navigation/core";
import { createBrowserApp } from "@react-navigation/web";
import Web from "./Web";
import Profile from "./Profile";


const MyNavigator = createSwitchNavigator({
  Web,
  Profile
});

export default createBrowserApp(MyNavigator);

