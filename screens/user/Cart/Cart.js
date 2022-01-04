import React from 'react';
import { Text, ScrollView, View, StyleSheet } from 'react-native';
import colors from '../../../constants/colors';
import { useEcommerceContext } from '../../../contexts/ContextProvider';
import CartItem from '../../../components/user/orders/CartItem';
import CartModel from '../../../models/cart';
import OrderModel from '../../../models/order';
import checkAndWriteFile from '../../../functions/checkAndWriteFile';
import Button from '../../../components/UI/Button';
import generateID from '../../../functions/generateId';

const Cart = props => {
    const { auth, cart, setCart, allData, setAllData, setOrders, orders } = useEcommerceContext();
    const cartIndex = cart.findIndex(cartItem => cartItem.username == auth.loginUserInfo.username);

    if (cartIndex == -1 || cart[cartIndex].items.length == 0) {
        return (
            <View style={{ ...styles.screen, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={styles.noItemLabel}>No items here</Text>
            </View>
        )
    }

    let totalPrice = 0;
    cart[cartIndex].items.forEach(item => {
        totalPrice += parseFloat(item.totalPrice);
    })
    const handleDeleteItem = async id => {
        const newCartItemData = cart[cartIndex].items.filter(item => item.id != id);
        const cartDuplicate = [...cart];
        cartDuplicate.splice(cartIndex, 1, new CartModel(
            auth.loginUserInfo.username,
            2,
            newCartItemData
        ))
        setCart(cartDuplicate);
        const newFileData = {
            ...allData,
            cart: cartDuplicate
        };
        await checkAndWriteFile(newFileData);
        setAllData(newFileData);
    }

    const handleOrder = async () => {
        const cartDuplicate = [...cart];
        cartDuplicate.splice(cartIndex, 1, new CartModel(
            auth.loginUserInfo.username,
            2,
            []
        ));
        setCart(cartDuplicate);

        const newOrders = [
            ...orders,
            new OrderModel(
                generateID(),
                auth.loginUserInfo.username,
                new Date().toUTCString(),
                totalPrice,
                'not defined yet',
                'not picked yet',
                cart[cartIndex].items
            )
        ]

        setOrders(newOrders);

        const newFileData = {
            ...allData,
            cart: cartDuplicate,
            orders: newOrders
        };
        await checkAndWriteFile(newFileData);
        setAllData(newFileData);
    }



    return (
        <View style={styles.screen}>
            <View style={{ flex: 0.9 }}>

                <ScrollView >
                    {cart[cartIndex].items.map((item) => (
                        <CartItem key={item.id} title={item.name} price={item.totalPrice} quantity={item.quantity} deleteButton onDeleteItem={handleDeleteItem.bind(null, item.id)} />
                    ))}
                </ScrollView>
            </View>
            <View style={{ flex: 0.1, justifyContent: 'flex-end', marginHorizontal: 20, marginBottom: 20 }}>
                <Button title={'Order Now'} onPress={handleOrder} />
            </View>
        </View>
    );
}

export default Cart;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: colors.secondary
    },
    noItemLabel: {
        fontSize: 16,
        fontFamily: 'light'
    }
})
