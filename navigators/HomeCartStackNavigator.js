import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function HomeCartStackNavigator() {
    return (
        <Stack.Navigator >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Notifications" component={Notifications} />
        </Stack.Navigator>
    );
}

export default HomeCartStackNavigator;
