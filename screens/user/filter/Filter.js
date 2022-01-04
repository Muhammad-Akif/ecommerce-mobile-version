import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
// import Button from '../../../componsents/UI/Button';
import FilterSwitch from '../../../components/user/filter/FilterSwitch';
import colors from '../../../constants/colors';
import { useEcommerceContext } from '../../../contexts/ContextProvider';

const Filters = props => {
    const { items, setItems, savedItems, setSavedItems } = useEcommerceContext();
    const catNames = items.categories.map(cat => cat.name);

    const [filter, setFilter] = useState(catNames);

    const setFilters = (name) => {
        const index = filter.findIndex(cat => cat == name);

        if (index == -1) {
            setFilter([...filter, name])

            // setSavedItems({ ...items });

        } else {

            // const filteredCategory = items.categories.filter(cat => cat.name != name);
            // console.log(filteredCategory)
            // setItems({
            //     lastId: 16,
            //     categories: filteredCategory
            // })

            setFilter(
                filter.filter(names => names != name)
            )
        }

    }

    return (
        <View style={styles.screen}>
            <ScrollView contentContainerStyle={{ alignItems: 'center', width: '100%' }}>
                <Text style={styles.title}>Availabe Filters / Restrictions</Text>
                {
                    catNames.map(name => (
                        <FilterSwitch
                            label={`Show ${name} Food`}
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
