import React from 'react';
import { View, Text, Switch, Platform, StyleSheet } from 'react-native';
import colors from '../../../constants/colors';

const FilterSwitch = props => {
    return (
        <View style={styles.filterContainer}>
            <View style={{ width: '70%' }}>
                <Text style={styles.label} numberOfLines={2} adjustsFontSizeToFit={true}>{props.label}</Text>
            </View>
            <Switch
                trackColor={{
                    true: colors.primary,
                    false: colors.lightGrey
                }}
                thumbColor={Platform.OS === 'android' ? colors.primary : ''}
                value={props.state}
                onValueChange={props.onChange} />
        </View>
    )
};

export default FilterSwitch;

const styles = StyleSheet.create({
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '80%',
        marginVertical: 10
    },
    label: {
        fontFamily: 'italic',
        fontSize: 18,
        top: 1.9
    }
});
