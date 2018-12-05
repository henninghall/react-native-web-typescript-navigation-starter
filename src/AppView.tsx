import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import Links from "./Links";
import { web } from "./utils";

type Props = {
    title: string,
}

export default (props: Props) => (
    <View style={styles.container}>
        {web && <Text style={styles.header}>{props.title}</Text>}
        <Links />
    </View>
)

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    header: {
        fontSize: 30,
        marginBottom: 20,
    }
})

