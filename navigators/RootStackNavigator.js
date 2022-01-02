import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnBoarding from '../screens/OnBoarding';
import Auth from '../screens/auth/Auth';
import LoginModal from '../screens/auth/LoginModal';
import Signup from '../screens/auth/Signup';
import StackDrawerNavigator from './StackDrawerNavigator';

const RootStack = createNativeStackNavigator();

export default function RootStackNavigator() {
    return (
        <RootStack.Navigator>
            <RootStack.Group screenOptions={{ headerShown: false }}>
                <RootStack.Screen name="Index" component={OnBoarding} />
                <RootStack.Screen name="Auth" component={Auth} />
                <RootStack.Screen name="Signup" component={Signup} options={{ headerShown: true, title: 'Sign Up' }} />
                <RootStack.Screen name="DrawerCartStackNavigator" component={StackDrawerNavigator} />
            </RootStack.Group>
            <RootStack.Group screenOptions={{ presentation: 'modal', headerShown: false, animation: 'slide_from_bottom' }}>
                <RootStack.Screen name="Login" component={LoginModal} />
            </RootStack.Group>
        </RootStack.Navigator>
    );
}