import React from 'react';
import { Text, ScrollView, View, StyleSheet } from 'react-native';
import colors from '../../../constants/colors';
import { useEcommerceContext } from '../../../contexts/ContextProvider';
import CartItem from '../../../components/user/orders/CartItem';
import CartModel from '../../../models/cart';
import checkAndWriteFile from '../../../functions/checkAndWriteFile';

const Cart = props => {
    const { auth, setAuth, cart, setCart, allData, setAllData } = useEcommerceContext();
    const cartIndex = cart.findIndex(cartItem => cartItem.username == auth.username);

    const handleDeleteItem = async id => {
        const newCartItemData = cart[cartIndex].items.filter(item => item.id != id);
        const cartDuplicate = [...cart];
        cartDuplicate.splice(cartIndex, 1, new CartModel(
            auth.username,
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

    if (cart[cartIndex].items.length == 0) {
        return (
            <View style={styles.screen}>
                <Text style={styles.noItemLabel}>No items here</Text>
            </View>
        )
    }

    return (
        <View style={styles.screen}>
            <ScrollView >
                {cart[cartIndex].items.map((item) => (
                    <CartItem key={item.id} title={item.name} price={item.totalPrice} quantity={item.quantity} deleteButton onDeleteItem={handleDeleteItem.bind(null, item.id)} />
                ))}
            </ScrollView>
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
