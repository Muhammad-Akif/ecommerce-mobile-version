import React from 'react';
import { View, Text, Dimensions, StyleSheet, Image } from 'react-native';
import Constants from 'expo-constants';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Login from '../screens/Auth/Login';
import Signup from '../screens/Auth/Signup';
import colors from '../constants/colors';

const Tab = createMaterialTopTabNavigator();
const { width } = Dimensions.get('window');

function AuthTopTab() {
    return (
        <View style={{ flex: 1, marginTop: Constants.statusBarHeight, backgroundColor: colors.secondary }}>
            <View style={{ height: '30%', backgroundColor: colors.primary, }}>
                <View style={{ width: 20, height: 20, position: 'absolute', borderRadius: 10, borderWidth: 4, borderColor: colors.secondary, opacity: 0.1, left: '20%', top: '4%' }} />
                <View style={{ width: 20, height: 20, position: 'absolute', borderRadius: 10, borderWidth: 4, borderColor: colors.secondary, opacity: 0.1, right: '10%', bottom: '20%' }} />
                {/* <Image source={require('../assets/images/auth.png')} style={{width: '50%', height: 50}}/> */}
            </View>
            <View style={{ height: '70%', top: -20 }}>
                <Tab.Navigator
                    screenOptions={{
                        tabBarHideOnKeyboard: true
                    }}
                    initialLayout={{ width }}
                    screenOptions={{
                        tabBarHideOnKeyboard: true,
                        tabBarLabelStyle: { fontWeight: 'bold', textTransform: 'none' },
                        tabBarStyle: { borderTopLeftRadius: 12, borderTopRightRadius: 12, elevation: 0 },
                        tabBarIndicatorStyle: { width: width / 3, backgroundColor: colors.primary, left: width / 12 }
                    }}
                >
                    <Tab.Screen name="User" component={Login} />
                    <Tab.Screen name="Admin" component={Signup} />
                </Tab.Navigator>
            </View>
        </View>

    );
}

export default AuthTopTab;
