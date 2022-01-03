import React, { useEffect, useState } from 'react'
import Search from '../../../components/user/home/Search'
import ProductCard from '../../../components/user/home/ProductCards';
import { View, StyleSheet } from 'react-native';
import colors from '../../../constants/colors';
import { useEcommerceContext } from '../../../contexts/ContextProvider';

export default function Home(props) {
    const { items } = useEcommerceContext();

    const [search, setSearch] = useState('');
    const [filteredDataSource, setFilteredDataSource] = useState(items.categories);
    const [masterDataSource, setMasterDataSource] = useState(items.categories);

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

    return (
        <View style={styles.screen}>
            <Search search={search} searchFilterFunction={searchFilterFunction} />
            <ProductCard data={filteredDataSource} navigation={props.navigation} />
        </View>
    )

}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: colors.secondary,
    },
});
