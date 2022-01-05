import React, { useEffect, useState } from 'react';
import Search from '../../../components/user/home/Search'
import { TouchableOpacity, Text, StyleSheet, View, FlatList } from 'react-native';
import colors from '../../../constants/colors';
import { Card } from '../../../components/Card';
import AddIcon from 'react-native-vector-icons/AntDesign'
import { useEcommerceContext } from '../../../contexts/ContextProvider';
import itemsData from '../../../data/items';

const Home = props => {
    const { items } = useEcommerceContext();


    const [search, setSearch] = useState('');
    const [filteredDataSource, setFilteredDataSource] = useState(items.categories);
    const [masterDataSource, setMasterDataSource] = useState(items.categories);

    useEffect(() => {
        setFilteredDataSource(items.categories);
        setMasterDataSource(items.categories);
    }, [items])

    const searchFilterFunction = (text) => {
        if (text) {
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
            setFilteredDataSource(masterDataSource);
            setSearch(text);
        }
    };

    const ItemView = ({ item }) => {
        return (
            // Flat List Item
            <View style={{ paddingBottom: '12%' }}>
                <Card isAdmin={true} item={item} navigation={props.navigation} />
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <Search search={search} searchFilterFunction={searchFilterFunction} />
            {
                filteredDataSource.length > 0 ? (
                    <FlatList
                        columnWrapperStyle={{ flexWrap: 'wrap' }}
                        data={filteredDataSource}
                        numColumns={2}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={ItemView}
                    />
                ) :
                    (
                        <View style={{ display: 'flex', height: '80%', justifyContent: 'center', alignItems: 'center' }}>
                            <Text>Oops! No Match Results...</Text>
                        </View>
                    )
            }
            <TouchableOpacity
                style={styles.floatingButton}
                onPress={() => props.navigation.navigate('AddModifyItems', { isEdit: false })}
            >
                <Text style={styles.btnText}>
                    <AddIcon name="plus" style={{ fontSize: 28 }} />
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


