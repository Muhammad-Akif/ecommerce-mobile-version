import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnBoarding from '../screens/OnBoarding';
import Auth from '../screens/Auth/Auth';
import LoginModal from '../screens/Auth/LoginModal';
import Signup from '../screens/Auth/Signup';

const RootStack = createNativeStackNavigator();

export default function RootStackNavigator() {
    return (
        <RootStack.Navigator>
            <RootStack.Group screenOptions={{ headerShown: false }}>
                <RootStack.Screen name="Index" component={OnBoarding} />
                <RootStack.Screen name="Auth" component={Auth} />
                <RootStack.Screen name="Signup" component={Signup} options={{headerShown: true, title: 'Sign Up'}}/>
            </RootStack.Group>
            <RootStack.Group screenOptions={{ presentation: 'modal', headerShown: false, animation: 'slide_from_bottom' }}>
                <RootStack.Screen name="Login" component={LoginModal} />
                {/* <RootStack.Screen name="Signup" component={} /> */}
            </RootStack.Group>
        </RootStack.Navigator>
    );
}