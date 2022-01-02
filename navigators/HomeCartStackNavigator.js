import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/user/home/Home';
import Cart from '../screens/user/Cart/Cart';

const Stack = createStackNavigator();

function HomeCartStackNavigator() {
    return (
        <Stack.Navigator >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Notifications" component={Cart} />
        </Stack.Navigator>
    );
}

export default HomeCartStackNavigator;
