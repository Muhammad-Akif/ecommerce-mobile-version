import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Cart from '../screens/user/Cart/Cart';
import MainDrawerNavigator from './MainDrawerNavigator';
import ProductDetailScreen from '../screens/ecommerce/ProductDetail';

const Stack = createStackNavigator();

function DrawerCartStackNavigator() {
    return (
        <Stack.Navigator initialRouteName={'Main'} screenOptions={{ headerTitleStyle: { fontFamily: 'bold' } }}>
            <Stack.Screen name="Main" component={MainDrawerNavigator} options={{ headerShown: false }} />
            <Stack.Screen name="Cart" component={Cart} />
            <Stack.Screen name="ProductDetails" component={ProductDetailScreen} />
        </Stack.Navigator>
    );
}

export default DrawerCartStackNavigator;
