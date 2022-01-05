import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker'
import FilterSwitch from '../../../components/user/filter/FilterSwitch';
import colors from '../../../constants/colors';
import { useEcommerceContext } from '../../../contexts/ContextProvider';

const Filters = props => {
    const { items, setItems, savedItems, setSavedItems, priceFilter, setPriceFilter } = useEcommerceContext();

    const [filter, setFilter] = useState([]);
    const catNames = savedItems.categories.map(cat => cat.name);

    const [category, setCategory] = useState();
    const [isUsernameValid, setIsUsernameValid] = useState(true)

    useEffect(() => {
        setSavedItems({
            ...items
        })
    }, [])

    const setPrice = val => {
        if (val == 'nothing') {
            setPriceFilter('nothing')
            return;
        }
        else if (val == 'price > 1000') {
            setPriceFilter('price > 1000')
        } else if (val == 'price < 500') {
            setPriceFilter('price < 500')
        } else if (val == 'price > 500') {
            setPriceFilter('price > 500')
        } else if (val == 'price < 100') {
            setPriceFilter('price < 100')
        } else if (val == 'price < 50') {
            setPriceFilter('price < 50')
        }
        setPriceFilter(val)
    }

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
                    catNames.map((name, index) => (
                        <View
                            style={{ width: '100%', alignItems: 'center' }}
                            key={index}
                        >
                            <FilterSwitch
                                label={`Hide ${name} Food`}
                                state={filter.includes(name)}
                                onChange={setFilters.bind(null, name)} />
                        </View>
                    ))
                }

                <View style={{ height: 2.2, width: '70%', backgroundColor: 'grey', marginVertical: 14, borderRadius: 10 }} />

                <View style={{ width: '80%' }}>

                    <Picker
                        style={{ marginBottom: 20, color: isUsernameValid ? colors.primary : 'grey' }}
                        selectedValue={category}
                        onValueChange={(val) => {
                            setPrice(val)
                            setCategory(val);
                        }}>

                        <Picker.Item label={'Apply Items Price Filter'} value={'nothing'} />
                        <Picker.Item label={'price > 1000'} value={'price > 1000'} />
                        <Picker.Item label={'price < 500'} value={'price < 500'} />
                        <Picker.Item label={'price > 500'} value={'price > 500'} />
                        <Picker.Item label={'price < 100'} value={'price < 100'} />
                        <Picker.Item label={'price < 50'} value={'price < 50'} />


                    </Picker>
                </View>

            </ScrollView>


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
