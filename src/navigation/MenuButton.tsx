import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import React from "react";
import { Text, TouchableOpacity } from 'react-native';
import NavigationService from './NavigationService';

export default ({ navigation }) => (
    <TouchableOpacity onPress={() => NavigationService.openDrawer()}>
        <Icon name='menu' color={'white'} size={30} style={{ marginLeft: 8 }} />
    </TouchableOpacity>
)