import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Link from "./Link";


export default class Web extends React.Component<{navigation: any}> {

    render() {

        return (
            <View style={styles.app}>
                <Text>Web</Text>
                <Link navigation={this.props.navigation}/>
                {/* <Link toRoute="Profile" routeName="Profile">To Profile</Link> */}
            </View>
        );
    }
}


const styles = StyleSheet.create({
    app: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
