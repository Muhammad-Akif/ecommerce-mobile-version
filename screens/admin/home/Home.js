import React, { useState, useEffect } from 'react';
import Search from '../../../components/user/home/Search'
import { SafeAreaView, Text, StyleSheet, View, FlatList } from 'react-native';

const App = () => {
    const [search, setSearch] = useState('');
    const [filteredDataSource, setFilteredDataSource] = useState([{ id: 1, title: 'akif is a good boy' }, { id: 2, title: 'rafeh is a good boy' }, { id: 3, title: 'umer is a good boy' }, { id: 4, title: 'mohasin is a good boy' }, { id: 5, title: 'alexandr is a good boy' }]);
    const [masterDataSource, setMasterDataSource] = useState([{ id: 1, title: 'akif is a good boy' }, { id: 2, title: 'rafeh is a good boy' }, { id: 3, title: 'umer is a good boy' }, { id: 4, title: 'mohasin is a good boy' }, { id: 5, title: 'alexandr is a good boy' }]);

    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/posts')
    //         .then((response) => response.json())
    //         .then((responseJson) => {
    //             setFilteredDataSource(responseJson);
    //             setMasterDataSource(responseJson);
    //         })
    //         .catch((error) => {
    //             console.error(error);
    //         });
    // }, []);

    const searchFilterFunction = (text) => {
        // Check if searched text is not blank
        if (text) {
            // Inserted text is not blank
            // Filter the masterDataSource
            // Update FilteredDataSource
            const newData = masterDataSource.filter(function (item) {
                const itemData = item.title
                    ? item.title.toUpperCase()
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
                {item.id}
                {'.'}
                {item.title.toUpperCase()}
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
        // <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
            <Search search={search} searchFilterFunction={searchFilterFunction} />
            <FlatList
                data={filteredDataSource}
                keyExtractor={(item, index) => index.toString()}
                ItemSeparatorComponent={ItemSeparatorView}
                renderItem={ItemView}
            />
        </View>
        // </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    },
    itemStyle: {
        padding: 10,
    },
});

export default App;







// const SECTIONS = [
//     {
//         title: 'Made for you',
//         horizontal: true,
//         data: [
//             {
//                 id: '1',
//                 text: 'Item text 1',
//                 uri: 'https://picsum.photos/id/1/200',
//             },
//             {
//                 key: '2',
//                 text: 'Item text 2',
//                 uri: 'https://picsum.photos/id/10/200',
//             },

//             {
//                 key: '3',
//                 text: 'Item text 3',
//                 uri: 'https://picsum.photos/id/1002/200',
//             },
//             {
//                 key: '4',
//                 text: 'Item text 4',
//                 uri: 'https://picsum.photos/id/1006/200',
//             },
//             {
//                 key: '5',
//                 text: 'Item text 5',
//                 uri: 'https://picsum.photos/id/1008/200',
//             },
//         ],
//     },
//     {
//         title: 'Punk and hardcore',
//         data: [
//             {
//                 key: '1',
//                 text: 'Item text 1',
//                 uri: 'https://picsum.photos/id/1011/200',
//             },
//             {
//                 key: '2',
//                 text: 'Item text 2',
//                 uri: 'https://picsum.photos/id/1012/200',
//             },

//             {
//                 key: '3',
//                 text: 'Item text 3',
//                 uri: 'https://picsum.photos/id/1013/200',
//             },
//             {
//                 key: '4',
//                 text: 'Item text 4',
//                 uri: 'https://picsum.photos/id/1015/200',
//             },
//             {
//                 key: '5',
//                 text: 'Item text 5',
//                 uri: 'https://picsum.photos/id/1016/200',
//             },
//         ],
//     },
//     {
//         title: 'Based on your recent listening',
//         data: [
//             {
//                 key: '1',
//                 text: 'Item text 1',
//                 uri: 'https://picsum.photos/id/1020/200',
//             },
//             {
//                 key: '2',
//                 text: 'Item text 2',
//                 uri: 'https://picsum.photos/id/1024/200',
//             },

//             {
//                 key: '3',
//                 text: 'Item text 3',
//                 uri: 'https://picsum.photos/id/1027/200',
//             },
//             {
//                 key: '4',
//                 text: 'Item text 4',
//                 uri: 'https://picsum.photos/id/1035/200',
//             },
//             {
//                 key: '5',
//                 text: 'Item text 5',
//                 uri: 'https://picsum.photos/id/1038/200',
//             },
//         ],
//     },
// ];