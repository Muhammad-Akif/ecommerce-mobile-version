import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Button, TouchableOpacity } from 'react-native';
import colors from '../../constants/colors';
import { useEcommerceContext } from '../../contexts/ContextProvider';
import CartItem from '../../models/cartItem';
import Cart from '../../models/cart';
import checkAndWriteFile from '../../functions/checkAndWriteFile';
import { Ionicons } from '@expo/vector-icons';
import FavoritesItemModal from '../../models/favoriteItem';


const ProductDetailScreen = props => {
    const product = props?.route?.params?.item;
    const category = props?.route?.params?.category;
    const { cart, setCart, auth, allData, setAllData, favoriteItems, setFavoriteItems } = useEcommerceContext();

    const isItemExists = favoriteItems.findIndex(item => (item.username == auth.username && item.id == product.id));


    const handleFavorite = async () => {
        let newFavorites = [];
        if (isItemExists != -1) {
            newFavorites = [...favoriteItems];
            favoriteDuplicate.splice(isItemExists, 1);
        } else {
            newFavorites = [
                ...favoriteItems,
                new FavoritesItemModal(
                    auth.username,
                    product.id,
                    product.name,
                    product.detail,
                    product.price,
                    product.uri,
                    []
                )
            ];
        }


        setFavoriteItems(newFavorites);
        const newData = {
            ...allData,
            favoriteItems: newFavorites
        };

        await checkAndWriteFile(newData)
        setAllData(newData);
    }

    useEffect(() => {
        props.navigation.setOptions({
            headerTitle: product.name[0].toUpperCase() + product.name.slice(1),
            headerRight: () => (
                <TouchableOpacity style={{ marginRight: 10 }} onPress={handleFavorite}>
                    <Ionicons name={isItemExists > -1 ? 'md-star' : 'md-star-outline'} size={26} color={colors.primary} />
                </TouchableOpacity>
            )
        })
    })

    const handleAddToCart = async () => {
        const cartIndex = cart.findIndex(cartItem => cartItem.username == auth.username);
        if (cartIndex == -1) {
            const newCart = [...cart, new Cart(
                auth.username,
                product.price,
                [new CartItem(product.id, product.name, product.detail, product.price, product.uri, category, 1, product.price)]
            )]
            setCart(newCart);
            const newData = {
                ...allData,
                cart: newCart
            }
            await checkAndWriteFile(newData);
            setAllData(newData)
            return;
        }
        const index = cart[cartIndex].items.findIndex(cartItem => cartItem.id == product.id);
        if (index != -1) return;

        const newCart = [...cart]
        newCart.splice(cartIndex, 1, new Cart(
            auth.username,
            product.price,
            [...cart[cartIndex].items, new CartItem(product.id, product.name, product.detail, product.price, product.uri, category, 1, product.price)]
        ))

        setCart(newCart);
        const newData = {
            ...allData,
            cart: newCart
        }
        await checkAndWriteFile(newData);
        setAllData(newData)
    }

    return (
        <ScrollView>
            <Image style={styles.image} source={{ uri: product?.uri }} />
            <View style={styles.buttonContainer}>
                <Button color={colors.primary} title='Add to Cart' onPress={handleAddToCart} />
            </View>
            <Text style={styles.price}>${product?.price}</Text>
            <Text style={styles.description}>{product?.detail}</Text>
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
