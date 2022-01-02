import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../../constants/colors';

const CloseButton = props => {
    return (
        <TouchableOpacity style={styles.container} onPress={props.onPress}>
            <Ionicons name={'md-close'} size={22} color={colors.secondary} />
        </TouchableOpacity>
    );
}

export default CloseButton;

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        width: 24,
        height: 24,
        backgroundColor: 'rgba(0,0,0,0.2)',
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        right: 6,
        top: -2
    }
})
