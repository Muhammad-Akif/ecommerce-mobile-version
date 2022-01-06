import React, { useEffect, useState } from 'react';
import { Text, ScrollView, View, StyleSheet, Alert } from 'react-native';
import colors from '../../../constants/colors';
import { useEcommerceContext } from '../../../contexts/ContextProvider';
import CartItem from '../../../components/user/orders/CartItem';
import CartModel from '../../../models/cart';
import OrderModel from '../../../models/order';
import CartItemModal from '../../../models/cartItem';
import checkAndWriteFile from '../../../functions/checkAndWriteFile';
import Button from '../../../components/UI/Button';
import generateID from '../../../functions/generateId';
import RoundButton from '../../../components/UI/RoundButtton';
import Dialog from "react-native-dialog";

const Cart = props => {
    const { auth, cart, setCart, allData, setAllData, setOrders, orders } = useEcommerceContext();
    const cartIndex = cart.findIndex(cartItem => cartItem.username == auth.loginUserInfo.username);

    const [isDialogVisible, setIsDialogVisible] = useState(false);
    const [address, setAddress] = useState('');

    let totalPrice = 0;
    try {

        cart[cartIndex].items.forEach(item => {
            totalPrice += parseFloat(item.totalPrice);
        })
    } catch (err) {
        totalPrice = 0
    }
    useEffect(() => {
        props.navigation.setOptions({
            headerRight: () => <View style={{ marginRight: 20 }}>
                <Text style={{ fontFamily: 'bold' }}>Total Price: ${totalPrice}</Text>
            </View>
        })
    }, [totalPrice])

    if (cartIndex == -1 || cart[cartIndex].items.length == 0) {
        return (
            <View style={{ ...styles.screen, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={styles.noItemLabel}>No items here</Text>
            </View>
        )
    }

    const handleIncrementDecrement = async (id, category, increDecre, product) => {
        console.log(id, category, increDecre)

        const cartIndex = cart.findIndex(cartItem => cartItem.username == auth.loginUserInfo.username);
        if (cartIndex == -1) return;


        const index = cart[cartIndex].items.findIndex(cartItem => cartItem.id == product.id);
        if (index == -1) return;

        const quantity = parseInt(increDecre == 'decrement' ? (product.quantity == 1 ? 1 : product.quantity - 1) : product.quantity + 1);
        const newCart = [...cart]
        cart[cartIndex].items.splice(index, 1, new CartItemModal(product.id, product.name, product.detail, product.price, product.uri, category, quantity, product.price * quantity))

        setCart(newCart);
        const newData = {
            ...allData,
            cart: newCart
        }
        await checkAndWriteFile(newData);
        setAllData(newData)

    }


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
                new Date(new Date().getTime() + 24 * 60 * 60 * 1000).toUTCString(),
                'not picked yet',
                cart[cartIndex].items,
                address
            )
        ]

        alert('Please check your email for order confirmation!')

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

                <ScrollView>
                    {cart[cartIndex].items.map((item) => (
                        <View key={item.id} style={{}}>
                            <CartItem title={item.name} price={item.totalPrice} quantity={item.quantity} deleteButton onDeleteItem={handleDeleteItem.bind(null, item.id)} />
                            {
                                item.category != 'no category' && (
                                    <View style={{ flexDirection: 'row' }}>
                                        <RoundButton up style={{ marginLeft: '6%' }} onPress={handleIncrementDecrement.bind(null, item.id, item.category, 'decrement', item)} />
                                        <RoundButton down style={{ marginLeft: 5 }} onPress={handleIncrementDecrement.bind(null, item.id, item.category, 'increment', item)} />
                                    </View>
                                )
                            }
                        </View>
                    ))}
                </ScrollView>
            </View>
            <View style={{ flex: 0.1, justifyContent: 'flex-end', marginHorizontal: 20, marginBottom: 20 }}>
                <Button title={'Order Now'} onPress={setIsDialogVisible.bind(null, true)} />
            </View>
            {
                isDialogVisible && (
                    <Dialog.Container visible>
                        <Dialog.Title>Provide us your Address!</Dialog.Title>
                        <Dialog.Input
                            value={address}
                            onChangeText={setAddress}
                            autoFocus
                        />
                        <Dialog.Button label="Cancel" onPress={() => {
                            setIsDialogVisible(false);
                        }} />
                        <Dialog.Button label="Done" onPress={() => {
                            if (!address) return
                            setIsDialogVisible(false);
                            handleOrder();
                        }} />
                    </Dialog.Container>
                )
            }
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
