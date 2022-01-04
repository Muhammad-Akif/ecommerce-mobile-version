import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from '../../constants/colors';

const Badge = props => {
    return (
        <View style={{...styles.badge, ...props.style}}>
            <Text style={styles.text} adjustsFontSizeToFit={props.favorite ? false: true} numberOfLines={1}>
                {props.text}
            </Text>
        </View>
    );
}

export default Badge;

const styles = StyleSheet.create({
    badge: {
        backgroundColor: colors.lightGrey,
        top: -1,
        width: 70,
        height: 15,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4
    },
    text: {
        fontSize: 10,
        fontFamily: 'bold',
        color: 'grey'
    }
})
