import React from "react";
import { ScrollView, View, StyleSheet, Text } from "react-native";

export default class Profile extends React.Component {

    render() {

        return (
            <View style={styles.app}>
                <Text>Profile</Text>
                {/* <Link toRoute="Web" routeName="Web">To Web</Link> */}
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