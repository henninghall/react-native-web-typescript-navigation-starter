import React from "react";
import NavigationService from "./navigation/NavigationService";
import Navigator from "./navigation/Navigator";

export default class App extends React.Component {

  render() {
    return <Navigator ref={this.setRef} />
  }
  
  setRef = navigatorRef => NavigationService.setTopLevelNavigator(navigatorRef);

}