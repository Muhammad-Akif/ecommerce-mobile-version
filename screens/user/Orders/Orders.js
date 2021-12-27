import React from 'react';
import { View, StyleSheet } from 'react-native';
import OrdersTopTabNavigator from '../../../navigators/OrdersTopTabNavigator';

const Orders = props => {

    const orders = [{ totalAmount: 2323, formatDate: 23, items: 23 }]

    return (
        <View style={styles.screen}>
            <OrdersTopTabNavigator />
        </View>
    );
}

export default Orders;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center'
    }
});
