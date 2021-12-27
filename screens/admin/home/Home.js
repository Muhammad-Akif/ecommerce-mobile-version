import React from 'react'
import { View, StyleSheet } from 'react-native';
import colors from '../../../constants/colors';

export default function Home() {

    return (
        <View style={styles.screen}>

        </View>
    )

}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: colors.secondary,
    }
});