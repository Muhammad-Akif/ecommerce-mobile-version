import React, { useEffect, useState } from 'react'
import Search from '../../../components/user/home/Search'
import ProductCard from '../../../components/user/home/ProductCards';
import { View, StyleSheet } from 'react-native';
import { items } from '../../../data/items'

export default function Home() {
    const [search, setSearch] = useState('')

    return (
        <View style={styles.screen}>
            <Search search={search} />
            <ProductCard data={items} />
        </View>
    )

}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
