import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import colors from '../../../constants/colors';

const OffersAndDeals = props => {
    return (
        <View style={styles.screen}>
            <View style={{ marginTop: '4%', paddingHorizontal: 7, height: '7%' }}>
                <Text style={{ fontSize: 35, fontWeight: 'bold' }} numberOfLines={1} adjustsFontSizeToFit={true}>
                    My offers
                </Text>
            </View>
            <View style={{ height: '93%', justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ width: '100%', alignItems: 'center' }}>
                    <Text numberOfLines={1} adjustsFontSizeToFit={true} style={{ fontSize: 30, marginBottom: 10, fontFamily: 'bold' }}>
                        ohh snap! no offers yet
                    </Text>
                </View>
                <View style={{ width: '55%' }}>
                    <Text style={{ textAlign: 'center', color: 'grey', fontFamily: 'italic', fontSize: 16 }} numberOfLines={2} adjustsFontSizeToFit={true}>
                        You dose't have any offers {"\n"} yet please check again.
                    </Text>
                </View>
            </View>
        </View>
    );
}

export default OffersAndDeals;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: colors.offWhite,
        paddingHorizontal: 36,
        height: '100%'
    }
})