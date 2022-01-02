import React, { useState, useEffect } from 'react';
import Search from '../../../components/user/home/Search'
import { TouchableOpacity, Text, StyleSheet, View, FlatList } from 'react-native';
import { items } from '../../../data/items'
import colors from '../../../constants/colors';
import { Card } from '../../../components/Card';
import AddIcon  from 'react-native-vector-icons/AntDesign'

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
            <View style={{ paddingBottom: '12%' }}>
                <Card isAdmin={true} item={item} />
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <Search search={search} searchFilterFunction={searchFilterFunction} />
            <FlatList
                columnWrapperStyle={{ flexWrap: 'wrap' }}
                data={filteredDataSource}
                numColumns={2}
                keyExtractor={(item, index) => index.toString()}
                renderItem={ItemView}
            />
            <TouchableOpacity
                style={styles.floatingButton}
                // onPress={() => navigate('HomeScreen')}
                >
                <Text style={styles.btnText}>
                    <AddIcon name="plus" style={{ fontSize:28}}/>
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1
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
        bottom: 10,                                                    
        right: 10, 
    }
});

export default Home;


