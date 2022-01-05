import React from 'react';
import { View, Dimensions } from 'react-native';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem
} from '@react-navigation/drawer';
import AdminHome from '../screens/admin/home/Home';
import colors from '../constants/colors';
import Orders from '../screens/user/orders/Orders';
import Filters from '../screens/user/filter/Filter';
import Favorites from '../screens/user/favorites/Favorites';
import OffersAndDeals from '../screens/user/offersanddeals/OfferAndDeals';
import HeaderButton from '../components/UI/HeaderButton';
import weeklyDeals from '../components/admin/deals/weeklyDeals';

const { width } = Dimensions.get('window');
import { Ionicons, FontAwesome5, MaterialIcons, Entypo } from '@expo/vector-icons';
import ManageOrders from '../screens/admin/manageorders/ManageOrders';
import { useEcommerceContext } from '../contexts/ContextProvider';
import Home from '../screens/user/home/Home';

import template from '../template/initialTemplate';
import checkAndWriteFile from '../functions/checkAndWriteFile';

function CustomDrawerContent(props) {
    const { allData, setAllData, auth, setAuth } = useEcommerceContext();
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
                label={`Sign-out`} onPress={async () => {

                    const newAuth = {
                        ...auth,
                        whoIsLogin: template.auth.whoIsLogin,
                        loginUserInfo: template.auth.loginUserInfo
                    };

                    const newData = {
                        ...allData,
                        auth: newAuth
                    };

                    await checkAndWriteFile(newData);
                    setAuth(newAuth)
                    setAllData(newData);

                    props.navigation.replace('Index');

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
    const { auth, cart } = useEcommerceContext();
    const index = cart?.findIndex(item => item.username == auth.loginUserInfo.username);
    let length = 0;
    if (index != -1) {
        length = cart[index].items.length;
    }
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
                drawerType: 'slide',
                headerTitleStyle: { fontFamily: 'bold' }
            }}
            drawerContent={props => <CustomDrawerContent {...props} />}
        >
            {
                auth.whoIsLogin == 'user' ? (
                    <>
                        {/* User Screen */}
                        <Drawer.Screen name="Home" component={Home} options={({ navigation }) => ({
                            drawerIcon: ({ color, size, focused }) => <FontAwesome5 size={size} color={color} name={'house-user'} />,
                            headerRight: () => <HeaderButton cart navigation={navigation} text={length} />
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
                        < Drawer.Screen name="Home" component={AdminHome} options={({ navigation }) => ({
                            drawerIcon: ({ color, size, focused }) => <FontAwesome5 size={size} color={color} name={'house-user'} />
                        })} />
                        <Drawer.Screen name="Manage Orders" component={ManageOrders} options={({ navigation }) => ({
                            drawerIcon: ({ color, size, focused }) => <Ionicons size={size} color={color} name={'md-newspaper'} />,
                            headerLeft: () => <HeaderButton navigation={navigation} />,
                            headerStatusBarHeight: 59,
                            headerTitle: '',
                            headerLeftContainerStyle: { paddingLeft: 15 },
                            headerStyle: { borderBottomWidth: 0, elevation: 0, backgroundColor: colors.offWhite },
                        })} />
                           <Drawer.Screen name="Create Weekly Deals" component={weeklyDeals} options={({ navigation }) => ({
                            drawerIcon: ({ color, size, focused }) => <Entypo size={size} color={color} name={'shopping-bag'} />,
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
