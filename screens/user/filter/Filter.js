import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
// import Button from '../../../componsents/UI/Button';
import FilterSwitch from '../../../components/user/filter/FilterSwitch';
import colors from '../../../constants/colors';
import { useEcommerceContext } from '../../../contexts/ContextProvider';

const Filters = props => {
    const { items, setItems, savedItems, setSavedItems } = useEcommerceContext();

    const [filter, setFilter] = useState([]);
    const catNames = savedItems.categories.map(cat => cat.name)

    useEffect(() => {
        setSavedItems({
            ...items
        })
    }, [])

    const setFilters = (name) => {
        const index = filter.findIndex(cat => cat == name);
        console.log(index)
        if (index == -1) {
            setFilter([...filter, name])

            const filteredCategory = items.categories.filter(cat => cat.name != name);
            setItems({
                lastId: 16,
                categories: filteredCategory
            })

        } else {
            setFilter(filter.filter(names => names != name))

            const categoryIndex = savedItems.categories.findIndex(cat => cat.name == name);
            setItems({
                lastId: 16,
                categories: [...items.categories, { ...savedItems.categories[categoryIndex] }]
            })
        }

    }
    console.log(filter)
    return (
        <View style={styles.screen}>
            <ScrollView contentContainerStyle={{ alignItems: 'center', width: '100%' }}>
                <Text style={styles.title}>Availabe Filters / Restrictions</Text>
                {
                    catNames.map(name => (
                        <FilterSwitch
                            label={`Hide ${name} Food`}
                            state={filter.includes(name)}
                            onChange={setFilters.bind(null, name)} />
                    ))
                }
            </ScrollView>
            {/* <Button title={'Apply Filters'} style={{ marginBottom: 20, marginHorizontal: 10 }} /> */}
        </View>
    );
}

export default Filters;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: colors.offWhite
    },
    title: {
        fontFamily: 'extra-bold',
        fontSize: 22,
        margin: 20,
        textAlign: 'center'
    }
});
