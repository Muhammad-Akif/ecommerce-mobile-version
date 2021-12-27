import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screens/user/Home';
const Drawer = createDrawerNavigator();

export default function MainDrawerNavigator() {
    return (
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={Home} />
        </Drawer.Navigator>
    );
}