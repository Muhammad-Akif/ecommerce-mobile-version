import React, { useState, useEffect } from 'react';
import Search from '../../../components/user/home/Search'
import { Text, StyleSheet, View, FlatList } from 'react-native';
import { items } from '../../../data/items'
import { Card } from '../../../components/Card'

const App = () => {
    const [search, setSearch] = useState('');
    const [filteredDataSource, setFilteredDataSource] = useState(items);
    const [masterDataSource, setMasterDataSource] = useState(items);


    const searchFilterFunction = (text) => {
        // Check if searched text is not blank
        if (text) {
            // Inserted text is not blank
            // Filter the masterDataSource
            // Update FilteredDataSource
            const newData = masterDataSource.filter(function (item) {
                const itemData = item.items.name
                    ? item.items.name.toUpperCase()
                    : ''.toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;
            });
            setFilteredDataSource(newData);
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
            <Text style={styles.itemStyle} onPress={() => getItem(item)}>
                {console.log( 'item ==> ', item)}
                {/* <Card isAdmin={true} item={item} /> */}
                {/* {item.id}
                {'.'}
                {item.title.toUpperCase()} */}
            </Text>
        );
    };

    const ItemSeparatorView = () => {
        return (
            // Flat List Item Separator
            <View
                style={{
                    height: 0.5,
                    width: '100%',
                    backgroundColor: '#C8C8C8',
                }}
            />
        );
    };

    const getItem = (item) => {
        // Function for click on an item
        alert('Id : ' + item.id + ' Title : ' + item.title);
    };

    return (
        <View style={styles.container}>
            <Search search={search} searchFilterFunction={searchFilterFunction} />
            <FlatList
                columnWrapperStyle={{ justifyContent: 'space-between' }}
                data={filteredDataSource}
                numColumns={2}
                keyExtractor={(item, index) => index.toString()}
                // ItemSeparatorComponent={ItemSeparatorView}
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
        width: '45%',
        padding: 10,
    },
});

export default App;


