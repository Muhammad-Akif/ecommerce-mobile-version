import React from 'react'
import { Text, View, StyleSheet, FlatList, Image, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import colors from '../constants/colors';
import EditIcon from 'react-native-vector-icons/FontAwesome'
import DeleteIcon from 'react-native-vector-icons/AntDesign'
import { useEcommerceContext } from '../contexts/ContextProvider';
import CartItem from '../models/cartItem';
import checkAndWriteFile from '../functions/checkAndWriteFile';
import Cart from '../models/cart';

export const Card = (props) => {
    const { cart, setCart, allData, setAllData, auth, items, setItems } = useEcommerceContext();
    const { item, isAdmin, navigation } = props;

    const handleDeletePress = async id => {
        const catIndex = items.categories.findIndex(cat => cat.name == item.name);
        const newItems = items.categories[catIndex].items.filter(item => item.id != id);

        const dupItems = {
            ...items
        }

        dupItems.categories[catIndex].items = newItems;

        setItems(dupItems);

        const newData = {
            ...allData,
            items: dupItems
        }

        await checkAndWriteFile(newData);
        setAllData(newData)

    }

    if (isAdmin) {
        const ItemView = (productItem) => {
            const product = productItem.item;
            return (
                <View key={product.id} style={styles.Acard}>
                    <TouchableOpacity
                        style={styles.button2}
                    >
                        <Text style={{ color: 'green', fontSize: 12 }}>20% OFF</Text>
                    </TouchableOpacity>
                    <Image source={{ uri: product.uri }} style={styles.productImage} />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ color: '#494949', fontWeight: '200', fontFamily: 'text-bold', fontSize: 16.5 }} adjustsFontSizeToFit={true} numberOfLines={1}>
                            {product.name}
                        </Text>
                    </View>
                    <View style={styles.childViewTextStyle}>
                        <Text style={{ color: 'grey', fontFamily: 'italic', fontSize: 15 }}>
                            {product.detail}
                        </Text>
                    </View>
                    <Text style={{ color: colors.primary, fontWeight: '200' }}>Rs. {product.price} <Text style={{ textDecorationLine: 'line-through', color: '#000' }}>Rs. {item.price}</Text> </Text>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => props.navigation.navigate('AddModifyItems', { isEdit: true, category: item.name, product })}
                        >
                            <Text adjustsFontSizeToFit={true} style={{ color: "green", fontFamily: 'bold', margin: 5 }}>
                                <EditIcon name="edit" style={{ fontSize: 40 }} />
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={handleDeletePress.bind(null, product.id)}>
                            <Text adjustsFontSizeToFit={true} style={{ color: "red", fontFamily: 'bold', margin: 5 }}>
                                <DeleteIcon name='delete' style={{ fontSize: 40 }} />
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            );
        };
        return (
            <View style={styles.cardStyle}>
                <View style={styles.cardHeadingStyle}>
                    <Text style={styles.cardHeadingTextStyle}>{item.name} Products</Text>
                </View>
                <FlatList
                    columnWrapperStyle={{ width: "100%" }}
                    data={item.items}
                    numColumns={2}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={ItemView}
                />
            </View>
        )
    }

    return (
        <View style={styles.cardStyle}>
            <View style={styles.cardHeadingStyle}>
                <Text style={styles.cardHeadingTextStyle}>{item.name} Products</Text>
                {
                    !isAdmin && (<Text style={{ color: 'green' }}>
                        View all &nbsp;
                        <Icon name="arrow-right" size={10} color="grey" />
                    </Text>)
                }
            </View>
            <View style={{ flexDirection: 'row', width: '100%' }}>
                <ScrollView horizontal={!isAdmin} showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingRight: 20 }}>
                    {item.items.map((product) => (
                        <TouchableOpacity key={product.id} style={styles.card} onPress={() => navigation.navigate('ProductDetails', { item: product, category: item.name })}>
                            <View
                                style={styles.button2}
                            >
                                <Text style={{ color: 'green', fontSize: 12 }}>20% OFF</Text>
                            </View>
                            <Image source={{ uri: product.uri }} style={styles.productImage} />
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ color: '#494949', fontWeight: '200', fontFamily: 'text-bold', fontSize: 16.5 }} adjustsFontSizeToFit={true} numberOfLines={1}>
                                    {product.name}
                                </Text>
                            </View>
                            <View style={styles.childViewTextStyle}>
                                <Text style={{ color: 'grey', fontFamily: 'italic', fontSize: 15 }}>
                                    {product.detail}
                                </Text>
                            </View>
                            <Text style={{ color: colors.primary, fontWeight: '200' }}>Rs. {product.price} <Text style={{ textDecorationLine: 'line-through', color: '#000' }}>Rs. {product.price}</Text> </Text>
                            <TouchableOpacity style={styles.button} onPress={async () => {
                                const cartIndex = cart.findIndex(cartItem => cartItem.username == auth.loginUserInfo.username);
                                if (cartIndex == -1) {
                                    const newCart = [...cart, new Cart(
                                        auth.loginUserInfo.username,
                                        product.price,
                                        [new CartItem(product.id, product.name, product.detail, product.price, product.uri, item.name, 1, product.price)]
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
                                    [...cart[cartIndex].items, new CartItem(product.id, product.name, product.detail, product.price, product.uri, item.name, 1, product.price)]
                                ))

                                setCart(newCart);
                                const newData = {
                                    ...allData,
                                    cart: newCart
                                }
                                await checkAndWriteFile(newData);
                                setAllData(newData)
                            }}>
                                <Text style={{ color: colors.primary, fontFamily: 'bold' }}>Add to cart</Text>
                            </TouchableOpacity>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>
        </View >
    );
};



const styles = StyleSheet.create({
    titleStyle: {
        padding: 16,
        fontSize: 16,
        color: colors.secondary,
        backgroundColor: '#307ecc',
    },
    cardStyle: {
        backgroundColor: colors.secondary,
        paddingVertical: 10,
        marginTop: 0
    },
    Acard: {
        marginVertical: 10,
        marginHorizontal: 9,
        backgroundColor: colors.secondary,
        paddingHorizontal: 8,
        paddingTop: 2,
        elevation: 5,
        width: 160,
        borderRadius: 15,
        paddingBottom: 8,
    },
    card: {
        marginVertical: 10,
        marginLeft: 15,
        backgroundColor: colors.secondary,
        paddingHorizontal: 8,
        paddingTop: 2,
        elevation: 5,
        width: 150,
        borderRadius: 15,
        paddingBottom: 8
    },
    productImage: {
        width: '100%',
        height: 120,
        marginVertical: 10
    },
    button: {
        backgroundColor: colors.secondary,
        height: 30,
        borderRadius: 5,
        borderWidth: 0.8,
        marginTop: 5,
        borderColor: "gray",
        justifyContent: 'center',
        fontFamily: 'Inter_800ExtraBold',
        alignItems: 'center'
    },
    button2: {
        backgroundColor: colors.secondary,
        height: 20,
        width: 60,
        borderRadius: 5,
        fontFamily: 'Inter_800ExtraBold',
        borderWidth: 0.4,
        marginTop: 5,
        borderColor: "green",
        alignSelf: 'flex-end',
        justifyContent: 'center',
        alignItems: 'center'
    },
    cardHeadingStyle: {
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    cardHeadingTextStyle: {
        color: '#606070',
        fontSize: 16,
        fontWeight: 'bold',
    },
    childViewTextStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
})





