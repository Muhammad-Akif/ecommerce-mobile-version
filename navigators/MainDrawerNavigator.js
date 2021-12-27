import React from 'react';
import { View, Dimensions } from 'react-native';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem
} from '@react-navigation/drawer';
import Home from '../screens/user/home/Home';
import AdminHome from '../screens/admin/home/Home';
import colors from '../constants/colors';
import Orders from '../screens/user/orders/Orders';
import Filters from '../screens/user/filter/Filter';
import Favorites from '../screens/user/favorites/Favorites';
import OffersAndDeals from '../screens/user/offers and deals/OfferAndDeals';
import HeaderButton from '../components/UI/HeaderButton';
import { useSelector } from 'react-redux';

const { width } = Dimensions.get('window');
import { Ionicons, FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import ManageRates from '../screens/admin/manage rates/ManageRates';
import ManageOrders from '../screens/admin/manage orders/ManageOrders';
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
                    props.navigation.replace('Index')
                }}
                style={{ bottom: 40 }}

                activeTintColor={colors.primary}
                activeBackgroundColor={'white'}
                inactiveTintColor={'white'}
                icon={({ size }) => {
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
    const isUser = useSelector(state => state.auth.isUser);
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
            {/* User Screen */}
            {
                isUser ? (
                    <>
                        <Drawer.Screen name="Home" component={Home} options={({ navigation }) => ({
                            drawerIcon: ({ color, size, focused }) => <FontAwesome5 size={size} color={color} name={'house-user'} />,
                            headerRight: () => <HeaderButton cart navigation={navigation} />
                        })} />
                        <Drawer.Screen name="Filter" component={Filters} options={({ navigation }) => ({
                            drawerIcon: ({ color, size }) => <Ionicons size={size} color={color} name={'md-funnel-sharp'} />,
                            headerLeft: () => <HeaderButton navigation={navigation} />,
                            headerStyle: { backgroundColor: colors.offWhite }
                        })} />
                        <Drawer.Screen name="Orders" component={Orders} options={({ navigation }) => ({
                            drawerIcon: ({ color, size }) => <Ionicons size={size} color={color} name={'md-newspaper'} />,
                            headerLeft: () => <HeaderButton navigation={navigation} />,
                            headerStyle: { backgroundColor: colors.secondary }
                        })} />
                        <Drawer.Screen name="Favorites" component={Favorites} options={({ navigation }) => ({
                            drawerIcon: ({ color, size }) => <Ionicons size={size} color={color} name={'md-star'} />,
                            headerLeft: () => <HeaderButton navigation={navigation} />,
                        })} />
                        <Drawer.Screen name="Offers and Deals" component={OffersAndDeals} options={({ navigation }) => ({
                            drawerIcon: ({ color, size, focused }) => <Ionicons size={size} color={color} name={'infinite'} />,
                            headerLeft: () => <HeaderButton navigation={navigation} />,
                            headerStatusBarHeight: 59,
                            headerTitle: '',
                            headerLeftContainerStyle: { paddingLeft: 15 },
                            headerStyle: { borderBottomWidth: 0, elevation: 0, backgroundColor: colors.offWhite },
                        })} />
                    </>
                ) : (
                    <>
                        {/* Admin Screens */}
                        <Drawer.Screen name="Home" component={AdminHome} options={({ navigation }) => ({
                            drawerIcon: ({ color, size, focused }) => <FontAwesome5 size={size} color={color} name={'house-user'} />
                        })} />
                        <Drawer.Screen name="Manage Rates" component={ManageRates} options={({ navigation }) => ({
                            drawerIcon: ({ color, size, focused }) => <Ionicons size={size} color={color} name={'md-settings'} />,
                            headerLeft: () => <HeaderButton navigation={navigation} />,
                            headerStatusBarHeight: 59,
                            headerTitle: '',
                            headerLeftContainerStyle: { paddingLeft: 15 },
                            headerStyle: { borderBottomWidth: 0, elevation: 0, backgroundColor: colors.offWhite },
                        })} />
                        <Drawer.Screen name="Manage Orders" component={ManageOrders} options={({ navigation }) => ({
                            drawerIcon: ({ color, size, focused }) => <Ionicons size={size} color={color} name={'md-newspaper'} />,
                            headerLeft: () => <HeaderButton navigation={navigation} />,
                            headerStatusBarHeight: 59,
                            headerTitle: '',
                            headerLeftContainerStyle: { paddingLeft: 15 },
                            headerStyle: { borderBottomWidth: 0, elevation: 0, backgroundColor: colors.offWhite },
                        })} />
                    </>
                )
            }
        </Drawer.Navigator>
    );
}
