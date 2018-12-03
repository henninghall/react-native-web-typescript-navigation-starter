import { createStackNavigator, createAppContainer } from "react-navigation";

import Profile from "./Profile";
import Web from './Web';

const MyNavigator = createStackNavigator({
  Web,
  Profile
});

export default createAppContainer(MyNavigator)
