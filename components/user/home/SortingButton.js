import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../../../constants/colors';
import { useEcommerceContext } from '../../../contexts/ContextProvider';
import sorting from '../../../functions/sorting';

const SortingButton = props => {
    const [isAsc, setIsAsc] = useState('no');
    const { items, setItems } = useEcommerceContext();

    const handlePress = kind => {
        setIsAsc(kind);

        const copyItems = { ...items };

        sorting(copyItems.categories, kind)

        setItems(copyItems)

    }

    return (
        <>
            <TouchableOpacity style={{ ...styles.sortingButton, backgroundColor: isAsc == 'A' ? colors.primary : colors.secondary }} onPress={handlePress.bind(null, 'A')}>
                <Text numberOfLines={1} adjustsFontSizeToFit={true} style={{ ...styles.text, color: isAsc == 'A' ? 'white' : 'black' }}>A</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ ...styles.sortingButton, marginRight: 10, backgroundColor: isAsc == 'D' ? colors.primary : colors.secondary }} onPress={handlePress.bind(null, 'D')}>
                <Text numberOfLines={1} adjustsFontSizeToFit={true} style={{ ...styles.text, color: isAsc == 'D' ? 'white' : 'black' }}>D</Text>
            </TouchableOpacity>
        </>
    );
}

export default SortingButton;

const styles = StyleSheet.create({
    sortingButton: {
        width: 30,
        height: 30,
        borderRadius: 7,
        borderWidth: 0.2,
        borderColor: 'grey',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 4,
        // marginRight: 
        marginTop: 6
    },
    text: {
        fontSize: 16,
        fontFamily: 'bold',
        color: 'black'
    }
})
