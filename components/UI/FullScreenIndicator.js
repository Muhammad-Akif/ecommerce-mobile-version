import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import colors from '../../constants/colors';

const FullScreenIndicator = () => {
    return (
        <View style={styles.loading}>
            <ActivityIndicator color={colors.primary} size={'large'} />
        </View>
    );
}

export default FullScreenIndicator;

const styles = StyleSheet.create({
    loading: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.3)'
    }
})
