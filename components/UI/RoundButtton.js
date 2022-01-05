import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../../constants/colors';

const RoundButton = props => {
    return (
        <TouchableOpacity style={{ ...styles.container, ...props.style }} onPress={props.onPress}>
            <Ionicons name={props.up ? 'chevron-back' : 'chevron-forward'} size={22} color={colors.primary} />
        </TouchableOpacity>
    );
}

export default RoundButton;

const styles = StyleSheet.create({
    container: {
        width: 24,
        height: 24,
        // backgroundColor: 'rgba(0,0,0,0.2)',
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
