import React, { Component } from "react";
import AppView from "./AppView";
import NavigationService from "./navigation/NavigationService";

export default class Home extends Component {

    static navigationOptions = {
        drawerLabel: 'Home',
        drawerTitle: 'Home',
        title: 'Home',
    }

    constructor(p) {
        super(p)
        setTimeout(NavigationService.closeDrawer, 500)
        setTimeout(NavigationService.openDrawer, 2000)
      }

    render() {
        return (
            <AppView title={'Home'} />
        )
    }
}