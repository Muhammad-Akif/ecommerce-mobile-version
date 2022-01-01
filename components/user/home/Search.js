import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';

export default function Search({ search, searchFilterFunction }) { 

    const [focus, setFocus] = useState(false)
    return (
        <View style={focus ? styles.focusSearch : styles.search}>
            <Icon name="search" style={{ alignSelf: 'center' }} size={25} color="grey" />
            <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                clearButtonMode="always"
                value={search}
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}
                underlineColorAndroid="transparent"
                selectionColor="#5956E9"
                onChangeText={queryText => searchFilterFunction(queryText)}
                onClear={() => searchFilterFunction('')}
                placeholder="What are you Looking for?"
                style={styles.inputText}

            />
        </View>
    );
}

const styles = StyleSheet.create({
    search: {
        flexDirection: "row",
        backgroundColor: '#fff',
        padding: 5,
        marginHorizontal: 10,
        marginTop: 10,
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,
        elevation: 15,
    },
    focusSearch: {
        flexDirection: "row",
        backgroundColor: '#fff',
        padding: 4,
        marginHorizontal: 10,
        marginTop: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#5956E9",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,
        elevation: 15,
    },
    inputText: {
        backgroundColor: '#fff',
        paddingHorizontal: 10,
        width: '90%'
    },
})