import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import colors from '../../../constants/colors';

const Cart = props => {
    return (
        <View style={styles.screen}/>
    );
}

export default Cart;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: colors.secondary
    }
})
