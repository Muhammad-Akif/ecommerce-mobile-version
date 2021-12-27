import React from 'react';
import { Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
const { height } = Dimensions.get('window');

const SecondButton = props => {
    return (
        <TouchableOpacity style={{ ...styles.button, ...props.style }} onPress={props.onPress}>
            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 15, ...props.textStyle }}>
                {props.label}
            </Text>
        </TouchableOpacity>
    );
}

export default SecondButton;

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'orange',
        height: 40,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

