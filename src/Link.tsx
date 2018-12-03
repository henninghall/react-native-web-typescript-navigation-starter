import React from "react";
import { View, Button } from "react-native";

const Link = ({ navigation }: {navigation: any}) => (
    <View>
        <Button
            title="Go to Profile"
            onPress={() => navigation.navigate('Profile')}
        />
    </View>
)

export default Link