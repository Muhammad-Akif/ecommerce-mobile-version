import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Cart from '../screens/user/Cart/Cart';
import MainDrawerNavigator from './MainDrawerNavigator';
import ProductDetailScreen from '../screens/ecommerce/ProductDetail';
import AddModifyItems from '../screens/admin/addmodifyitems/AddModifyItems';
import Ratings from '../screens/user/Ratings/Ratings';
import createDeals from '../screens/admin/Deals/createDeals'

const Stack = createStackNavigator();

function StackDrawerNavigator() {
    return (
        <Stack.Navigator initialRouteName={'Main'} screenOptions={{ headerTitleStyle: { fontFamily: 'bold' } }}>
            <Stack.Screen name="Main" component={MainDrawerNavigator} options={{ headerShown: false }} />
            <Stack.Screen name="Cart" component={Cart} />
            <Stack.Screen name="ProductDetails" component={ProductDetailScreen} />
            <Stack.Screen name="AddModifyItems" component={AddModifyItems} options={{ headerTitle: 'Add Item' }} />
            <Stack.Screen name="createDeals" component={createDeals} options={{ headerTitle: 'Create new Deal' }} />
        </Stack.Navigator>
    );
}

export default StackDrawerNavigator;
