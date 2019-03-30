import React from "react";
import { createStackNavigator, createAppContainer, createDrawerNavigator } from "react-navigation";

import routes from "./routes";
import MenuButton from "./MenuButton";
import { StyleSheet, SafeAreaView, Image } from 'react-native';
import { DrawerItems } from "react-navigation";
import DrawerRow from "./DrawerRow";
import { View } from 'react-native';
import { NavigationActions } from '@react-navigation/core';
import NavigationService from "./NavigationService";

const stackRotes = {
    Drawer: createStackNavigator(routes, {
        initialRouteName: 'Home',
        /* The header config from HomeScreen is now here */
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: 'green',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                // fontWeight: 'bold',
            },
            headerLeft: MenuButton

        },

    }
    )
}



const CustomDrawerContentComponent = (props) => {
    return (
        <SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }} style={{backgroundColor: 'green',}}>
            <View style={styles.container}>
                <Image source={require('../../images/logo.png')} style={styles.logo}/>
                <DrawerRow routeName={'PageA'} title={'Page A'} />
                <DrawerRow routeName={'PageB'} title={'Page B'} />
            </View>
        </SafeAreaView >
    )
}


const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: 'green',
        padding: 20,
        height: '100%'
    },
    logo: {
        height: 100,
        width: 200,
        resizeMode: 'contain',
        marginBottom: 20,
        tintColor: 'white'
    }
});


const drawerNav = createDrawerNavigator(stackRotes, {
    contentComponent: CustomDrawerContentComponent,
})


// const PrimaryNav = createStackNavigator({
//     loginStack: { screen: stackRotes },
//   }, {
//     // Default config for all screens
//     headerMode: 'none',
//     title: 'Main',
//     initialRouteName: 'loginStack'
//   })

export default createAppContainer(drawerNav)