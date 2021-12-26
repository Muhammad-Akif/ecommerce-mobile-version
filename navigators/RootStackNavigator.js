import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnBoarding from '../screens/OnBoarding';
import Login from '../screens/Auth/Login';

const RootStack = createNativeStackNavigator();

export default function RootStackNavigator() {
    return (
        <RootStack.Navigator>
            <RootStack.Group screenOptions={{headerShown: false}}>
                <RootStack.Screen name="Index" component={OnBoarding} />
                <RootStack.Screen name="Auth" component={Login} />
            </RootStack.Group>
            {/* <RootStack.Group screenOptions={{ presentation: 'modal' }}>
                <RootStack.Screen name="MyModal" component={} />
            </RootStack.Group> */}
        </RootStack.Navigator>
    );
}