import React, { useEffect, useState } from 'react'
import Search from '../../../components/user/home/Search'
import ProductCard from '../../../components/user/home/ProductCards';
import { View, StyleSheet } from 'react-native';
import { items } from '../../../data/items'

export default function Home() {
    const [search, setSearch] = useState('');
    const [filteredDataSource, setFilteredDataSource] = useState(items);
    const [masterDataSource, setMasterDataSource] = useState(items);


    const searchFilterFunction = (text) => {
        // Check if searched text is not blank
        if (text) {
            // [{name, items: [{ id, name, detail, uri, price },{ id, name, detail, uri, price }], lastId }]
            // [{ id: 1, name: 'akif'}]
            const newData = masterDataSource.map(function (item) {
                const arr = item.items.filter(i => {
                    const itemData = i.name
                        ? i.name.toUpperCase()
                        : ''.toUpperCase();
                    const textData = text.toUpperCase();
                    return itemData.indexOf(textData) > -1;
                })
                return {
                    ...item,
                    items: arr,
                }

            });
            const searchedData = newData.filter(item => item.items.length > 0)
            setFilteredDataSource(searchedData);
            setSearch(text);
        } else {
            // Inserted text is blank
            // Update FilteredDataSource with masterDataSource
            setFilteredDataSource(masterDataSource);
            setSearch(text);
        }
    };
  
    return (
        <View style={styles.screen}>
            <Search search={search} searchFilterFunction={searchFilterFunction} />
            <ProductCard data={filteredDataSource} />
        </View>
    )

}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
