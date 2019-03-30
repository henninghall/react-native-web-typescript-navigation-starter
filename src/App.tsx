import React from "react";
import NavigationService from "./navigation/NavigationService";
import Navigator from "./navigation/Navigator";

const navigationPersistenceKey = __DEV__ ? "NavigationStateDEV" : null;

export default class App extends React.Component {

  render() {
    return <Navigator ref={this.setRef} persistenceKey={navigationPersistenceKey} />
  }

  setRef = navigatorRef => NavigationService.setTopLevelNavigator(navigatorRef);

}