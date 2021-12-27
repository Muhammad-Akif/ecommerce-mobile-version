import React from 'react';
import { Dimensions } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Completed from '../screens/user/orders/Completed';
import Inprogress from '../screens/user/orders/Inprogress';
import colors from '../constants/colors';

const Tab = createMaterialTopTabNavigator();
const { width } = Dimensions.get('window');

function OrdersTopTabNavigator() {
    return (
        <Tab.Navigator
            initialLayout={{ width }}
            screenOptions={{
                tabBarLabelStyle: { fontWeight: 'bold', textTransform: 'none' },
                tabBarStyle: { borderBottomLeftRadius: 20, borderBottomRightRadius: 20, backgroundColor: colors.secondary },
                tabBarIndicatorStyle: { width: width / 3, backgroundColor: colors.primary, left: width / 12 }
            }}
        >
            <Tab.Screen name="InprogressOrders" component={Inprogress} options={{ title: 'In Progress' }} />
            <Tab.Screen name="CompletedOrders" component={Completed} options={{ title: 'Completed' }} />
        </Tab.Navigator>
    );
}

export default OrdersTopTabNavigator;
