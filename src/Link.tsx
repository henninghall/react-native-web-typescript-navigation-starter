import React, { Component } from "react";
import { Button, View } from "react-native";
import NavigationService from "./navigation/NavigationService";

type Props = {
    title: string,
    routeName: string,
}

export default class Link extends Component<Props> {

    render() {
        return (
            <View style={{padding: 4}}>
                <Button onPress={this.onPress} title={this.props.title} />
            </View>
        )
    }

    onPress = () => NavigationService.navigate(this.props.routeName);
}