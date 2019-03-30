import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import React from "react";
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import NavigationService from './NavigationService';

export default ({routeName, title}) => (
    <TouchableOpacity onPress={() => NavigationService.replace(routeName)} style={styles.container}>
        <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    container: {
        margin: 10,
    },
    text: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold'
    }
});
