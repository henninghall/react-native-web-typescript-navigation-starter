import { createStackNavigator, createAppContainer } from "react-navigation";

import routes from "./routes";

export default createAppContainer(createStackNavigator(routes))