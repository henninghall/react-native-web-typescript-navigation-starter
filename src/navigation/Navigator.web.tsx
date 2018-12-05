import { createSwitchNavigator } from "@react-navigation/core";
import { createBrowserApp } from "@react-navigation/web";

import routes from "./routes";

export default createBrowserApp(createSwitchNavigator(routes));