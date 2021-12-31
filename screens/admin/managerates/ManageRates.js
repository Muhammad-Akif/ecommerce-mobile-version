import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import colors from '../../../constants/colors';

const ManageRates = props => {
    return (
        <View style={styles.screen}>
            <View style={{ marginTop: '4%', paddingHorizontal: 7, height: '7%' }}>
                <Text style={{ fontSize: 35, fontWeight: 'bold' }} numberOfLines={1} adjustsFontSizeToFit={true}>
                    Manage Rates
                </Text>
            </View>
            <View style={{ height: '93%', justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ width: '100%', alignItems: 'center' }}>
                    <Text numberOfLines={1} adjustsFontSizeToFit={true} style={{ fontSize: 30, marginBottom: 10, fontFamily: 'bold' }}>
                        Oh! No rates yet to Manage
                    </Text>
                </View>
                <View style={{ width: '55%' }}>
                    <Text style={{ textAlign: 'center', color: 'grey', fontFamily: 'italic', fontSize: 16 }} numberOfLines={2} adjustsFontSizeToFit={true}>
                        You dose't have any rates {"\n"} from clients still.
                    </Text>
                </View>
            </View>
        </View>
    );
}

export default ManageRates;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: colors.offWhite,
        paddingHorizontal: 36,
        height: '100%'
    }
})