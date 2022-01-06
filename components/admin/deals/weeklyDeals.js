import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import colors from '../../../constants/colors';
import AddIcon from 'react-native-vector-icons/AntDesign'
import DeleteIcon from 'react-native-vector-icons/AntDesign'
import { useEcommerceContext } from '../../../contexts/ContextProvider'
import checkAndWriteFile from '../../../functions/checkAndWriteFile'
import Cart from '../../../models/cart';
import CartItem from '../../../models/cartItem';


const weeklyDeals = props => {
    const { allData, setAllData, weeklyDeals, setWeeklyDeals, cart, setCart, auth } = useEcommerceContext();

    const handleDeletePress = async (id) => {
        const newWeeklyDeals = weeklyDeals.filter((weeklyDeal) => weeklyDeal.id != id)
        const newAllData = {
            ...allData,
            weeklyDeals: newWeeklyDeals
        }
        setWeeklyDeals(newWeeklyDeals)
        setAllData(newAllData);
        await checkAndWriteFile(newAllData);
    }
    return (
        <View style={styles.screen}>

            <View style={{ marginTop: '4%', paddingHorizontal: 100, height: '10%' }}>
                <Text style={{ fontSize: 35, fontWeight: 'bold' }} numberOfLines={1} adjustsFontSizeToFit={true}>
                    My offers
                </Text>
            </View>
            <ScrollView style={{ width: '100%' }}>
                {
                    weeklyDeals.map((deal, index) => (

                        <View key={index} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <View key={deal.id + index} style={styles.Acard}>
                                <TouchableOpacity
                                    style={styles.button2}
                                >
                                    <Text style={{ color: 'green', fontSize: 12 }}>{deal.off}% OFF</Text>
                                </TouchableOpacity>
                                <Image source={{ uri: deal.uri }} style={styles.productImage} />
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={{ color: '#494949', fontWeight: '200', fontFamily: 'text-bold', fontSize: 16.5 }} adjustsFontSizeToFit={true} numberOfLines={1}>
                                        {deal.name}
                                    </Text>
                                </View>
                                <View style={styles.childViewTextStyle}>
                                    <Text style={{ color: 'grey', fontFamily: 'italic', fontSize: 15 }}>
                                        {deal.detail}
                                    </Text>
                                </View>
                                <Text style={{ color: "green", fontWeight: '600' }}>Quantity: {deal.quantity}</Text>
                                <Text style={{ color: colors.primary, fontWeight: '200', paddingVertical: 5 }}>${((parseFloat(deal.price)) * (100 - Number(deal.off))) / 100}     <Text style={{ textDecorationLine: 'line-through', color: '#000' }}>${deal.price}</Text> </Text>
                                {
                                    !props.user ? (
                                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                            <TouchableOpacity style={styles.button}
                                                onPress={handleDeletePress.bind(null, deal.id)}
                                            >
                                                <Text adjustsFontSizeToFit={true} style={{ color: "red", fontFamily: 'bold', margin: 5 }}>
                                                    <DeleteIcon name='delete' style={{ fontSize: 40 }} />
                                                </Text>
                                            </TouchableOpacity>
                                        </View>
                                    )
                                        :
                                        (
                                            <View style={{ display: 'flex', flexDirection: 'row', paddingBottom: 5, justifyContent: 'center', alignItems: 'center' }}>
                                                <TouchableOpacity style={styles.button} onPress={async () => {
                                                    const cartIndex = cart.findIndex(cartItem => cartItem.username == auth.loginUserInfo.username);
                                                    if (cartIndex == -1) {
                                                        const newCart = [...cart, new Cart(
                                                            auth.loginUserInfo.username,
                                                            deal.price,
                                                            [new CartItem(deal.id, deal.name, deal.detail, ((parseFloat(deal.price)) * (100 - Number(deal.off))) / 100, deal.uri, 'no category', parseInt(deal.quantity), ((parseFloat(deal.price)) * (100 - Number(deal.off))) / 100)]
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
                                                    const index = cart[cartIndex].items.findIndex(cartItem => cartItem.id == deal.id);
                                                    if (index != -1) return;

                                                    const newCart = [...cart]

                                                    newCart.splice(cartIndex, 1, new Cart(
                                                        auth.loginUserInfo.username,
                                                        deal.price,
                                                        [...cart[cartIndex].items, new CartItem(deal.id, deal.name, deal.detail, ((parseFloat(deal.price)) * (100 - Number(deal.off))) / 100, deal.uri, 'no category', parseInt(deal.quantity), ((parseFloat(deal.price)) * (100 - Number(deal.off))) / 100)]
                                                    ))

                                                    setCart(newCart);
                                                    const newData = {
                                                        ...allData,
                                                        cart: newCart
                                                    }
                                                    await checkAndWriteFile(newData);
                                                    setAllData(newData)
                                                }}>
                                                    <Text style={{ color: colors.primary, fontFamily: 'bold', margin: 5 }}>Add to cart</Text>
                                                </TouchableOpacity>
                                            </View>
                                        )
                                }
                            </View>
                        </View>
                    ))
                }
                {
                    weeklyDeals.length == 0 && (
                        <View style={{ width: '100%', alignItems: 'center', marginTop: '50%' }}>
                            <Text style={{ fontFamily: 'italic', fontSize: 18 }}>
                                No Offers created Yet!
                            </Text>
                        </View>
                    )
                }
            </ScrollView>
            {
                !props.user && (
                    <TouchableOpacity
                        style={styles.floatingButton}
                        onPress={() => props.navigation.navigate('createDeals')}
                    >
                        <Text style={styles.btnText}>
                            <AddIcon name="plus" style={{ fontSize: 28 }} />
                        </Text>
                    </TouchableOpacity>
                )
            }
        </View >
    );
}

export default weeklyDeals;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: colors.offWhite,
        height: '100%',
        width: '100%',
    },
    btnText: {
        color: colors.primary,
        // paddingBottom: 3,
    },
    floatingButton: {
        width: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        borderRadius: 25,
        elevation: 8,
        backgroundColor: "#fff",
        position: 'absolute',
        bottom: 30,
        right: 12,
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
        width: '80%',
        borderRadius: 15,
        paddingBottom: 8,
    },
    productImage: {
        width: '100%',
        height: 140,
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
    childViewTextStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
})