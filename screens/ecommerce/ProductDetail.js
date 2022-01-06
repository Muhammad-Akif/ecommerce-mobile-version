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

    const isItemExists = favoriteItems.findIndex(item => (item.username == auth.loginUserInfo.username && item.id == product.id));

    const ratingsNum = [1, 2, 3, 4, 5];
    const handleFavorite = async () => {
        let newFavorites = [];
        if (isItemExists != -1) {
            newFavorites = [...favoriteItems];
            newFavorites.splice(isItemExists, 1);
        } else {
            newFavorites = [
                ...favoriteItems,
                new FavoritesItemModal(
                    auth.loginUserInfo.username,
                    product.id,
                    product.name,
                    product.detail,
                    product.price,
                    product.uri,
                    category,
                    [...product.ratings]
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
        const cartIndex = cart.findIndex(cartItem => cartItem.username == auth.loginUserInfo.username);
        if (cartIndex == -1) {
            const newCart = [...cart, new Cart(
                auth.loginUserInfo.username,
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
            auth.loginUserInfo.username,
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
            <View style={{ marginTop: 40 }}>
                <Text style={{ fontSize: 30, marginLeft: 20, textShadowColor: 'white', fontFamily: 'bold' }}>Ratings</Text>
            </View>

            {/*  */}
            {product.ratings.map((rating, index) => {
                if (rating.username == 'shikari') {
                    return <View key={index} />
                }
                return <View key={index} style={{ padding: 10, marginVertical: 5 }}>
                    <View style={{ alignItems: 'center', width: '76%', alignSelf: 'center' }}>
                        <Text style={{ fontFamily: 'italic' }} numberOfLines={1} adjustsFontSizeToFit={true}>{rating.email}</Text>
                    </View>
                    <View style={{ alignItems: 'center', width: '78%', alignSelf: 'center' }}>
                        <Text style={{ textAlign: 'center' }} numberOfLines={1} adjustsFontSizeToFit={true}>
                            {
                                // item.ratings.ratingNumber
                                ratingsNum.map((number, index) => {
                                    if (index < rating.rating) {
                                        return <Ionicons key={index} name={'star'} size={23} color={'red'} />
                                    } return <Ionicons key={index} name={'star-outline'} size={23} color={'red'} />
                                })
                            }
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 10, width: '76%', alignSelf: 'center' }}>
                        <View style={{ flex: 1 }}>
                            <Text style={{ textAlign: 'left', color: 'grey' }} numberOfLines={1} adjustsFontSizeToFit={true}>Username:</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text style={{ textAlign: 'center' }}>
                                {rating.username}
                            </Text>
                        </View>
                    </View>
                    <View style={{ height: 1, backgroundColor: 'grey', width: '80%', alignSelf: 'center', marginTop: 10 }} />
                </View>
            })}
            {
                (product.ratings.length == 1 && product.ratings[0].username == 'shikari') && (
                    <View style={{ alignItems: 'center', marginTop: 60 }}>
                        <Text style={{ fontFamily: 'italic', }}>No Ratings Yet!</Text>
                    </View>
                )
            }
            {/*  */}
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
