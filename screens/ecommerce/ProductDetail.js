import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Button } from 'react-native';
import colors from '../../constants/colors';
import { useEcommerceContext } from '../../contexts/ContextProvider';
import CartItem from '../../models/cartItem';

const ProductDetailScreen = props => {
    const selectedProduct = props?.route?.params?.item;
    const category = props?.route?.params?.category;
    const { cart, setCart } = useEcommerceContext();

    useEffect(() => {
        props.navigation.setOptions({
            headerTitle: selectedProduct.name[0].toUpperCase() + selectedProduct.name.slice(1)
        })
    }, [])

    const handleAddToCart = () => {
        const index = cart.items.findIndex(cartItem => cartItem.id == selectedProduct.id);
        if (index != -1) return;

        const items = [...cart.items, new CartItem(selectedProduct.id, selectedProduct.name, selectedProduct.detail, selectedProduct.price, selectedProduct.uri, category, 1, selectedProduct.price)];
        setCart({
            ...cart,
            items
        });
    }

    return (
        <ScrollView>
            <Image style={styles.image} source={{ uri: selectedProduct?.uri }} />
            <View style={styles.buttonContainer}>
                <Button color={colors.primary} title='Add to Cart' onPress={handleAddToCart} />
            </View>
            <Text style={styles.price}>${selectedProduct?.price}</Text>
            <Text style={styles.description}>{selectedProduct?.detail}</Text>
        </ScrollView>
    );
}

export default ProductDetailScreen;

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 300
    },
    buttonContainer: {
        alignItems: 'center',
        marginVertical: 10
    },
    price: {
        textAlign: 'center',
        marginVertical: 20,
        fontSize: 20,
        color: '#888',
        fontFamily: 'open-sans-bold'
    },
    description: {
        fontSize: 14,
        textAlign: 'center',
        marginHorizontal: 20,
        fontFamily: 'open-sans'
    }
});