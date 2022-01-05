import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../../../constants/colors';
import AddIcon from 'react-native-vector-icons/AntDesign'
import DeleteIcon from 'react-native-vector-icons/AntDesign'


const weeklyDeals = props => {
    return (
        <View style={styles.screen}>
            <View style={{ marginTop: '4%', paddingHorizontal: 7, height: '7%' }}>
                <Text style={{ fontSize: 35, fontWeight: 'bold' }} numberOfLines={1} adjustsFontSizeToFit={true}>
                    My offers
                </Text>
            </View>
            <View style={{ height: '93%', justifyContent: 'center', alignItems: 'center' }}>
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
                        <TouchableOpacity style={styles.button} 
                        // onPress={handleDeletePress.bind(null, product.id)}
                        >
                            <Text adjustsFontSizeToFit={true} style={{ color: "red", fontFamily: 'bold', margin: 5 }}>
                                <DeleteIcon name='delete' style={{ fontSize: 40 }} />
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ width: '55%' }}>
                    <Text style={{ textAlign: 'center', color: 'grey', fontFamily: 'italic', fontSize: 16 }} numberOfLines={2} adjustsFontSizeToFit={true}>
                        You dose't have any offers {"\n"} yet please check again.
                    </Text>
                </View>
            </View>
            <TouchableOpacity
                style={styles.floatingButton}
                onPress={() => props.navigation.navigate('createDeals')}
            >
                <Text style={styles.btnText}>
                    <AddIcon name="plus" style={{ fontSize: 28 }} />
                </Text>
            </TouchableOpacity>
        </View>
    );
}

export default weeklyDeals;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: colors.offWhite,
        paddingHorizontal: 36,
        height: '100%'
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
        right: 30,
    }
})