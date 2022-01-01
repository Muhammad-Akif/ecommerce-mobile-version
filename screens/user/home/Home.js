import React, { useEffect, useState } from 'react'
import Search from '../../../components/user/home/Search'
import ProductCard from '../../../components/user/home/ProductCards';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import colors from '../../../constants/colors';
import checkAndCreateFolder from '../../../functions/checkAndCreateFolder';
import * as FileSystem from 'expo-file-system';
import { fileName, folderName } from '../../../constants/settings';
import checkAndReadFile from '../../../functions/checkAndReadFile';
import checkAndWriteFile from '../../../functions/checkAndWriteFile';

export default function Home() {
    const [search, setSearch] = useState('')

    const [data, setData] = useState([]);
    const [isDataFetched, setIsDataFetched] = useState(false);

    const fetchData = async () => {
        const responce = await fetch(`https://edamam-food-and-grocery-database.p.rapidapi.com/parser?ingr=apple`, {
            method: 'GET',
            headers: {
                "x-rapidapi-host": "edamam-food-and-grocery-database.p.rapidapi.com",
                "x-rapidapi-key": "c21f427b09msh296727ad4bf3af7p1dfe3djsned4f6f14e075"
            }
        })
        const results = await responce.json();
        setData(results);
        setIsDataFetched(true);
    }

    useEffect(() => {
        fetchData();
        checkAndCreateFolder();
        // checkAndWriteFile()
        checkAndReadFile()
    }, [])

    return (
        <View style={styles.screen}>
            <Search search={search} />
            {
                isDataFetched ? (
                    <ProductCard data={data} />
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
