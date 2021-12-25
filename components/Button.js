import React from 'react';
import { Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
const { height } = Dimensions.get('window');

const Button = props => {
    return (
        <TouchableOpacity style={{...styles.button, ...props.style}} onPress={props.onPress}>
            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18 }}>
                {props.label}
            </Text>
        </TouchableOpacity>
    );
}

export default Button;

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'rgb(250,74,12)',
        height: height / 11.6,
        borderRadius: 29,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

