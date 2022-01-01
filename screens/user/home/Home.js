import React, { useEffect, useState } from 'react'
import Search from '../../../components/user/home/Search'
import ProductCard from '../../../components/user/home/ProductCards';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import colors from '../../../constants/colors';
import items from '../../../data/items'

export default function Home() {
    const [search, setSearch] = useState('')

    const [data, setData] = useState([]);
    const [isDataFetched, setIsDataFetched] = useState(items);

    return (
        <View style={styles.screen}>
            <Search search={search} />
            {
                isDataFetched ? (
                    <ProductCard data={items} />
                ) : (
                    <View style={styles.center}>
                        <ActivityIndicator size={30} color={colors.primary} />
                    </View>
                )
            }
        </View>
    )

}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#fff',
    },
    text: {
        fontSize: 60,
        fontFamily: 'Inter_800ExtraBold',
        color: 'white'
    },
    button: {
        backgroundColor: 'white',
        height: 50,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
