import React from "react";
import { View, Text, Button } from "react-native";
import { Link } from "@react-navigation/web";

export default ({ title }: { title: any }) => (
    <React.Fragment>
        <Text>{title}</Text>
    </React.Fragment>
)