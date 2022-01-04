import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import FilterSwitch from '../../../components/user/filter/FilterSwitch';
import colors from '../../../constants/colors';
import { useEcommerceContext } from '../../../contexts/ContextProvider';

const Filters = props => {

    const [filter, setFilter] = useState([]);

    const { items, setItems } = useEcommerceContext();

    const setFilters = (name, bool) => {
        const index = filter.findIndex(cat => cat == name);

        if (index == -1) {
            setFilter([...filter, name])
        } else {
            setFilter(
                filter.filter(names => names != name)
            )
        }

    }

    const catNames = items.categories.map(cat => cat.name);

    return (
        <View style={styles.screen}>
            <ScrollView contentContainerStyle={{ alignItems: 'center', width: '100%' }}>
                <Text style={styles.title}>Availabe Filters / Restrictions</Text>
                {
                    catNames.map(name => (
                        <FilterSwitch
                            label={`Only ${name} Food`}
                            state={filter.includes(name)}
                            onChange={setFilters.bind(null, name)} />
                    ))
                }
            </ScrollView>
        </View>
    );
}

export default Filters;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        // alignItems: 'center',
        backgroundColor: colors.offWhite
    },
    title: {
        fontFamily: 'extra-bold',
        fontSize: 22,
        margin: 20,
        textAlign: 'center'
    }
});
