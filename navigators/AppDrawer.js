import * as React from 'react';
import { Dimensions, View } from 'react-native';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem
} from '@react-navigation/drawer';
import Profile from '../screens/Main/Profile';
import Orders from '../screens/Drawer/Orders';
import OfferPromo from '../screens/Drawer/OfferPromo';

import MainNavigator from './MainNavigator';
import theme from '../constants/theme';
import { Ionicons, MaterialCommunityIcons, FontAwesome, FontAwesome5, MaterialIcons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');


function CustomDrawerContent(props) {
    return (
        <>
            <DrawerContentScrollView {...props}>
                <View style={{ flex: 1, marginTop: 75 }}>

                    <DrawerItemList {...props} />
                </View>
            </DrawerContentScrollView>

            <DrawerItem
                label={`Sign-out`} onPress={() => {

                }}
                style={{ bottom: 40 }}

                activeTintColor={theme.primary}
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

export default function AppDrawer() {
    return (
        <Drawer.Navigator
            initialRouteName="Main"
            screenOptions={{
                drawerActiveBackgroundColor: 'white',
                drawerInactiveTintColor: 'white',
                drawerActiveTintColor: theme.primary,
                drawerContentStyle: { justifyContent: 'space-between' },
                drawerStyle: { backgroundColor: theme.primary, width: '100%' },
                drawerLabelStyle: { fontWeight: 'bold', left: -19 },
                drawerItemStyle: { marginLeft: 26 },
                // drawerItemStyle: { paddingLeft: 15, borderBottomColor: 'white', borderBottomWidth: .2 },
                drawerType: 'slide'
            }}
            drawerContent={props => <CustomDrawerContent {...props} />}
        >
            <Drawer.Screen
                name="Main"
                component={MainNavigator}
                options={{
                    headerShown: false,
                    drawerIcon: ({ color, size, focused }) => <FontAwesome5 size={size} color={color} name={'house-user'} />
                }} />

            <Drawer.Screen
                name="Profile"
                component={Profile}
                options={{
                    drawerIcon: ({ color, size, focused }) => <MaterialCommunityIcons size={size} color={color} name={'face'} />,
                    headerLeft: () => <MaterialIcons style={{ left: 20 }} size={28} color={'black'} name={'keyboard-arrow-left'} />,
                    headerStatusBarHeight: 59,
                    headerTitle: '',
                    headerLeftContainerStyle: { paddingLeft: 15 },
                    headerStyle: { borderBottomWidth: 0, elevation: 0, backgroundColor: theme.background },

                }} />

            <Drawer.Screen
                name="orders"
                component={Orders}
                options={{
                    drawerIcon: ({ color, size, focused }) => <Ionicons size={size} color={color} name={'cart-outline'} />,
                    headerLeft: () => <MaterialIcons style={{ left: 20 }} size={28} color={'black'} name={'keyboard-arrow-left'} />,
                    headerStatusBarHeight: 59,
                    headerTitle: 'Cart',
                    headerTitleAlign: 'center',
                    headerTitleStyle: {letterSpacing: -1.2},
                    headerLeftContainerStyle: { paddingLeft: 15},
                    headerRightContainerStyle: {paddingRight: 15}, //Used in order to center Title
                    headerStyle: { borderBottomWidth: 0, elevation: 0, backgroundColor: theme.background },
                }} />

            <Drawer.Screen
                name="offer and promo"
                component={OfferPromo}
                options={{
                    drawerIcon: ({ color, size, focused }) => <FontAwesome size={size} color={color} name={'tag'} />,
                    headerLeft: () => <MaterialIcons style={{ left: 20 }} size={28} color={'black'} name={'keyboard-arrow-left'} />,
                    headerStatusBarHeight: 59,
                    headerTitle: '',
                    headerLeftContainerStyle: { paddingLeft: 15 },
                    headerStyle: { borderBottomWidth: 0, elevation: 0, backgroundColor: theme.background },
                    
                }}
            />

        </Drawer.Navigator>
    );
}