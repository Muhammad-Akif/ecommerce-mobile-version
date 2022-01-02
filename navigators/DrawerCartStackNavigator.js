import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Cart from '../screens/user/Cart/Cart';
import MainDrawerNavigator from './MainDrawerNavigator';

const Stack = createStackNavigator();

function DrawerCartStackNavigator() {
    return (
        <Stack.Navigator initialRouteName={'Main'}>
            <Stack.Screen name="Main" component={MainDrawerNavigator} options={{ headerShown: false }} />
            <Stack.Screen name="Cart" component={Cart} />
        </Stack.Navigator>
    );
}

export default DrawerCartStackNavigator;
