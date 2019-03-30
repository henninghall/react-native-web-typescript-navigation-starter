import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import Links from "./Links";
import { web } from "./utils";

type Props = {
    title: string,
}

const a = JSON.parse('{"b":"s"}')

export default (props: Props) => (
    <View style={styles.container}>

        <Text style={styles.header}>{getBool(a) ? 'true' : false}</Text>
        <Links />
    </View>
)

const getBool = (a: { b: boolean }): boolean => {
    return a.b
}

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