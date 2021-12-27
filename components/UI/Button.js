import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../../constants/colors';

const Button = props => { // normalText | whiteTheme
    const style = props.normalText ? { fontWeight: 'bold', fontSize: 15, fontFamily: undefined } : {}
    return (
        <TouchableOpacity style={{ ...styles.button, ...props.style, backgroundColor: props.whiteTheme ? colors.secondary : colors.primary }} onPress={props.onPress}>
            <Text style={{ ...styles.text, color: props.whiteTheme ? colors.primary : colors.secondary, ...style, ...props.textStyle }} numberOfLines={1} adjustsFontSizeToFit={true}>
                {props.title}
            </Text>
        </TouchableOpacity>
    );
}

export default Button;

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.secondary,
        height: 40,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: colors.primary,
        fontSize: 17.5,
        fontFamily: 'bold'
    },
});

