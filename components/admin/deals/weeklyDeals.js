import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../../../constants/colors';
import AddIcon from 'react-native-vector-icons/AntDesign'


const weeklyDeals = props => {
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
            <TouchableOpacity
                style={styles.floatingButton}
                onPress={() => props.navigation.navigate('createDeals')}
            >
                <Text style={styles.btnText}>
                    <AddIcon name="plus" style={{ fontSize: 28 }} />
                </Text>
            </TouchableOpacity>
        </View>
    );
}

export default weeklyDeals;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: colors.offWhite,
        paddingHorizontal: 36,
        height: '100%'
    },
    btnText: {
        color: colors.primary,
        // paddingBottom: 3,
    },
    floatingButton: {
        width: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        borderRadius: 25,
        elevation: 8,
        backgroundColor: "#fff",
        position: 'absolute',
        bottom: 30,
        right: 30,
    }
})