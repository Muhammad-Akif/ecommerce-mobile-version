import React from 'react';
import { View, Dimensions } from 'react-native';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem
} from '@react-navigation/drawer';
import Home from '../screens/user/Home';
import colors from '../constants/colors';
const { width } = Dimensions.get('window');
import { Ionicons, MaterialCommunityIcons, FontAwesome, FontAwesome5, MaterialIcons } from '@expo/vector-icons';

function CustomDrawerContent(props) {
    return (
        <>
            <DrawerContentScrollView {...props}>
                <View style={{ flex: 1, marginTop: 75 }}>
                    {/* <View style={{ position: 'absolute', width: 40, height: 40, borderRadius: 20, borderWidth: 8, borderColor: colors.secondary, opacity: 0.1, top: -70, right: 30 }} /> */}
                    <View style={{ position: 'absolute', width: 30, height: 30, borderRadius: 6, borderWidth: 8, borderColor: colors.secondary, opacity: 0.1, top: -60, left: 30, transform: [{ rotate: '25deg' }] }} />
                    <View style={{ position: 'absolute', width: 30, height: 30, borderRadius: 6, borderWidth: 8, borderColor: colors.secondary, opacity: 0.1, top: -60, left: '82%', transform: [{ rotate: '25deg' }] }} />
                    <View style={{ position: 'absolute', width: 30, height: 30, borderRadius: 6, borderWidth: 8, borderColor: colors.secondary, opacity: 0.1, top: -60, left: '46%', transform: [{ rotate: '25deg' }] }} />
                    <DrawerItemList {...props} />
                </View>
            </DrawerContentScrollView>

            <DrawerItem
                label={`Sign-out`} onPress={() => {

                }}
                style={{ bottom: 40 }}

                activeTintColor={colors.primary}
                activeBackgroundColor={'white'}
                inactiveTintColor={'white'}
                icon={({ focused, size }) => {
                    return <MaterialIcons
                        style={{ left: width / 5 }}
                        name="arrow-right-alt"
                        size={size}
                        color={'white'}
                    />
                }}
                labelStyle={{ fontWeight: 'bold', right: width / 9 }}
            />
        </>
    );
}

const Drawer = createDrawerNavigator();

export default function MainDrawerNavigator() {
    return (
        <Drawer.Navigator
            initialRouteName="Home"
            screenOptions={{
                drawerActiveBackgroundColor: 'white',
                drawerInactiveTintColor: 'white',
                drawerActiveTintColor: colors.primary,
                drawerContentStyle: { justifyContent: 'space-between' },
                drawerStyle: { backgroundColor: colors.primary, width: '100%' },
                drawerLabelStyle: { fontWeight: 'bold', left: -19 },
                drawerItemStyle: { marginLeft: 26 },
                drawerType: 'slide'
            }}
            drawerContent={props => <CustomDrawerContent {...props} />}
        >
            {/* User Screens */}
            <Drawer.Screen name="Home" component={Home} options={{ drawerIcon: ({ color, size, focused }) => <FontAwesome5 size={size} color={color} name={'house-user'} /> }} />
            <Drawer.Screen name="Orders" component={Home} options={{ drawerIcon: ({ color, size, focused }) => <Ionicons size={size} color={color} name={'md-newspaper'} /> }} />
            {/* Admin Screens */}
        </Drawer.Navigator>
    );
}
