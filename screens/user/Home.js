import React, { useEffect, useState } from 'react'
import Search from '../../components/user/home/Search'
import ProductCard from '../../components/user/home/ProductCards';
import { View, StyleSheet } from 'react-native';

export default function Home() {

    const [data, setData] = useState({})

    useEffect(async () => {
        const responce = await fetch(`https://edamam-food-and-grocery-database.p.rapidapi.com/parser?ingr=apple`, {
            method: 'GET',
            headers: {
                "x-rapidapi-host": "edamam-food-and-grocery-database.p.rapidapi.com",
                "x-rapidapi-key": "c21f427b09msh296727ad4bf3af7p1dfe3djsned4f6f14e075"
            }
        })
        const results = await responce.json();
        setData(results);
    }, [])

    return (
        <View style={styles.screen}>
            <Search />
            <ProductCard data={data} />
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
    }
});