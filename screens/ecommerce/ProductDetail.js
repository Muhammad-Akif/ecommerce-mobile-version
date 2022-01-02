import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Button } from 'react-native';
import colors from '../../constants/colors';

const ProductDetailScreen = props => {
    const selectedProduct = props?.route?.params?.item;
    useEffect(() => {
        props.navigation.setOptions({
            headerTitle: selectedProduct.name[0].toUpperCase() + selectedProduct.name.slice(1)
        })
    }, [])
    return (
        <ScrollView>
            <Image style={styles.image} source={{ uri: selectedProduct?.uri }} />
            <View style={styles.buttonContainer}>
                <Button color={colors.primary} title='Add to Cart' onPress={() => { }} />
            </View>
            <Text style={styles.price}>Rs {selectedProduct?.price}</Text>
            <Text style={styles.description}>{selectedProduct?.detail}</Text>
        </ScrollView>
    );
}

ProductDetailScreen.navigationOptions = (navData) => {

    const paramTitle = navData.navigation.getParam('title');

    return {
        headerTitle: paramTitle
    };
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