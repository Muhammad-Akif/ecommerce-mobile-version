import React, { useState, useEffect } from 'react';
import Search from '../../../components/user/home/Search'
import { Text, StyleSheet, View, FlatList } from 'react-native';
import { items } from '../../../data/items'
import { Card } from '../../../components/Card'

const Home = () => {
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

    const ItemView = ({ item }) => {
        return (
            // Flat List Item
            <Text style={styles.itemStyle}>
                <Card isAdmin={true} item={item} />
            </Text>
        );
    };

    return (
        <View style={styles.container}>
            <Search search={search} searchFilterFunction={searchFilterFunction} />
            <FlatList
                // columnWrapperStyle={{ justifyContent: 'space-between' }}
                data={filteredDataSource}
                // numColumns={2}
                keyExtractor={(item, index) => index.toString()}
                renderItem={ItemView}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    },
    itemStyle: {
        width: '50%'
    },
});

export default Home;


