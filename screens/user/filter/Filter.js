import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FilterSwitch from '../../../components/user/filter/FilterSwitch';
import colors from '../../../constants/colors';

const Filters = props => {

    const [isGluttenFree, setIsGluttenFree] = useState(false);
    const [isLactoseFree, setIsLactoseFree] = useState(false);
    const [isVegan, setIsVegan] = useState(false);
    const [isVegetarian, setIsVegetarian] = useState(false);

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Availabe Filters / Restrictions</Text>
            <FilterSwitch
                label="Fats-free"
                state={isGluttenFree}
                onChange={bool => { setIsGluttenFree(bool) }} />
            <FilterSwitch
                label="Lactose-free"
                state={isLactoseFree}
                onChange={bool => { setIsLactoseFree(bool) }} />
            <FilterSwitch
                label="Vinger"
                state={isVegan}
                onChange={bool => { setIsVegan(bool) }} />
            <FilterSwitch
                label="Vegetarian"
                state={isVegetarian}
                onChange={bool => { setIsVegetarian(bool) }} />
        </View>
    );
}

export default Filters;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: colors.offWhite
    },
    title: {
        fontFamily: 'extra-bold',
        fontSize: 22,
        margin: 20,
        textAlign: 'center'
    }
});
