import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnBoarding from '../screens/OnBoarding';
import Login from '../screens/Auth/Login';
import LoginModal from '../screens/Auth/LoginModal';
import SignupModel from '../screens/Auth/SignupModal';

const RootStack = createNativeStackNavigator();

export default function RootStackNavigator() {
    return (
        <RootStack.Navigator>
            <RootStack.Group screenOptions={{ headerShown: false }}>
                <RootStack.Screen name="Index" component={OnBoarding} />
                <RootStack.Screen name="Auth" component={Login} />
            </RootStack.Group>
            <RootStack.Group screenOptions={{ presentation: 'modal', headerShown: false, animation: 'slide_from_bottom' }}>
                <RootStack.Screen name="Login" component={LoginModal} />
                <RootStack.Screen name="Sogin" component={SignupModel} />
            </RootStack.Group>
        </RootStack.Navigator>
    );
}