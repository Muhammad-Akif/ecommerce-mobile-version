import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import colors from '../../../constants/colors';

const ManageOrders = props => {
    return (
        <View style={styles.screen}>
            <View style={{ marginTop: '4%', paddingHorizontal: 50, height: '7%' }}>
                <Text style={{ fontSize: 35, fontWeight: 'bold' }} numberOfLines={1} adjustsFontSizeToFit={true}>
                    Manage Orders
                </Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={styles.Acard}>
                    {/* <Image source={{ uri: item.uri }} style={styles.productImage} /> */}
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ color: '#494949', fontWeight: '200', fontFamily: 'text-bold', fontSize: 16.5 }} adjustsFontSizeToFit={true} numberOfLines={1}>
                            User Name
                        </Text>
                    </View>
                    <View style={styles.childViewTextStyle}>
                        <Text style={{ color: 'grey', fontFamily: 'italic', fontSize: 15 }}>
                            Product Detail
                        </Text>
                    </View>
                    <Text style={{ color: colors.primary, fontWeight: '200' }}>50$ </Text>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => props.navigation.navigate('AddModifyItems', { isEdit: true })}
                        >
                            <Text adjustsFontSizeToFit={true} style={{ color: "green", fontFamily: 'bold', margin: 5 }}>
                                Delevered
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                            <Text adjustsFontSizeToFit={true} style={{ color: "red", fontFamily: 'bold', margin: 5 }}>
                                Picked
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.Acard}>
                    {/* <Image source={{ uri: item.uri }} style={styles.productImage} /> */}
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ color: '#494949', fontWeight: '200', fontFamily: 'text-bold', fontSize: 16.5 }} adjustsFontSizeToFit={true} numberOfLines={1}>
                            User Name
                        </Text>
                    </View>
                    <View style={styles.childViewTextStyle}>
                        <Text style={{ color: 'grey', fontFamily: 'italic', fontSize: 15 }}>
                            Product Detail
                        </Text>
                    </View>
                    <Text style={{ color: colors.primary, fontWeight: '200' }}>50$ </Text>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <TouchableOpacity style={styles.button}>
                            <Text adjustsFontSizeToFit={true} style={{ color: "green", fontFamily: 'bold', margin: 5 }}>
                                Delevered
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                            <Text adjustsFontSizeToFit={true} style={{ color: "red", fontFamily: 'bold', margin: 5 }}>
                                Picked
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}

export default ManageOrders;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: colors.offWhite,
        height: '100%'
    },
    Acard: {
        marginVertical: 20,
        marginHorizontal: 9,
        backgroundColor: colors.secondary,
        padding: 15,
        elevation: 10,
        width: 160,
        borderRadius: 15,
    },
    // productImage: {
    //     width: '100%',
    //     height: 120,
    //     marginVertical: 10
    // },
    button: {
        backgroundColor: colors.secondary,
        height: 30,
        width: "50%",
        borderRadius: 5,
        borderWidth: 0.8,
        marginHorizontal: -5,
        marginTop: 5,
        borderColor: "gray",
        justifyContent: 'center',
        alignItems: 'center'
    },
    childViewTextStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
})