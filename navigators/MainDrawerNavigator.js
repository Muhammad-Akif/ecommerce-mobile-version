import React from 'react';
import { View, Dimensions } from 'react-native';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem
} from '@react-navigation/drawer';
import Home from '../screens/user/home/Home';
import colors from '../constants/colors';
const { width } = Dimensions.get('window');
import { Ionicons, MaterialCommunityIcons, FontAwesome, FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import Orders from '../screens/user/orders/Orders';
import Filters from '../screens/user/filter/Filter';

function CustomDrawerContent(props) {
    return (
        <>
            <DrawerContentScrollView {...props}>
                <View style={{ flex: 1, marginTop: 75 }}>
                    <View style={{ position: 'absolute', width: 100, height: 100, borderRadius: 50, backgroundColor: colors.secondary, opacity: 0.1, top: -130, right: 20 }} />
                    <View style={{ position: 'absolute', width: 30, height: 30, borderRadius: 6, borderWidth: 8, borderColor: colors.secondary, opacity: 0.1, top: -50, left: '36%', transform: [{ rotate: '25deg' }] }} />
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
            <Drawer.Screen name="Filter" component={Filters} options={{ drawerIcon: ({ color, size, focused }) => <Ionicons size={size} color={color} name={'md-funnel-sharp'} /> }} />
            <Drawer.Screen name="Orders" component={Orders} options={{ drawerIcon: ({ color, size, focused }) => <Ionicons size={size} color={color} name={'md-newspaper'} /> }} />
            <Drawer.Screen name="Favorites" component={Filters} options={{ drawerIcon: ({ color, size, focused }) => <Ionicons size={size} color={color} name={'md-star'} /> }} />
            <Drawer.Screen name="Offers and Deals" component={Filters} options={{ drawerIcon: ({ color, size, focused }) => <Ionicons size={size} color={color} name={'md-star'} /> }} />
            {/* Admin Screens */}
        </Drawer.Navigator>
    );
}
