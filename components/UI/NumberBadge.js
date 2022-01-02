import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from '../../constants/colors';

const NumberBadge = props => {
    return (
        <View style={styles.numberBadge}>
            <Text style={styles.text} adjustsFontSizeToFit={true} numberOfLines={1}>
                {props.text}
            </Text>
        </View>
    );
}

export default NumberBadge;

const styles = StyleSheet.create({
    numberBadge: {
        backgroundColor: '#00008b',
        top: 10,
        right: 8,
        width: 14,
        height: 14,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7,
        position: 'absolute'
    },
    text: {
        fontSize: 10,
        fontFamily: 'bold',
        color: colors.secondary
    }
})
