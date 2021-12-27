import React, { useState } from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native';
import Button from '../../../components/UI/Button';
import colors from '../../../constants/colors';

const Home = props => {
    const [selected, setSelected] = useState('name');
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [isNameValid, setisNameValid] = useState(true);
    const [isPriceValid, setisPriceValid] = useState(true);
    const [isCategoryValid, setisCategoryValid] = useState(true);

    return (
        <View style={styles.screen}>

            <View style={{ height: 64, justifyContent: 'center' }}>
                <Text style={{ fontSize: 40, fontFamily: 'text-bold' }} numberOfLines={1} adjustsFontSizeToFit={true}>
                    Add Items
                </Text>
            </View>

            <TextInput
                placeholder='Name'
                value={name}
                onChangeText={setName}
                style={{ color: 'black', borderBottomWidth: 1, borderColor: isNameValid ? selected == 'name' ? colors.primary : 'grey' : 'red', paddingBottom: 0, paddingLeft: 0, }}
                placeholderTextColor={isNameValid ? selected == 'name' ? colors.primary : 'grey' : 'red'}
                autoFocus={true}
                onFocus={setSelected.bind(null, 'name')}
                onBlur={setSelected.bind(null, 'no')}
            />
            <View style={{ marginVertical: 10, marginBottom: !isNameValid ? 15 : 6 }}>
                <Text style={{ color: 'red', fontSize: 12, letterSpacing: -0.2 }}>
                    {
                        !isNameValid && "Invalid email address."
                    }
                </Text>
            </View>
            <TextInput
                placeholder='Price'
                value={price}
                onChangeText={setPrice}
                style={{ color: 'black', borderBottomWidth: 1, borderColor: isPriceValid ? selected == 'price' ? colors.primary : 'grey' : 'red', paddingBottom: 0, paddingLeft: 0, }}
                placeholderTextColor={isPriceValid ? selected == 'price' ? colors.primary : 'grey' : 'red'}
                onFocus={setSelected.bind(null, 'price')}
                onBlur={setSelected.bind(null, 'no')}
            />
            <View style={{ marginVertical: 10, marginBottom: 20 }}>
                <Text style={{ color: isPriceValid ? 'grey' : 'red', fontSize: 12, letterSpacing: -0.2 }}>
                    Your price will be in dollars.
                </Text>
            </View>
            <TextInput
                placeholder='Category'
                style={{ color: 'black', borderBottomWidth: 1, borderColor: isCategoryValid ? selected == 'category' ? colors.primary : 'grey' : 'red', paddingBottom: 0, paddingLeft: 0, }}
                placeholderTextColor={isCategoryValid ? selected == 'category' ? colors.primary : 'grey' : 'red'}
                onFocus={setSelected.bind(null, 'category')}
                onBlur={setSelected.bind(null, 'no')}
            />
            <View style={{ marginVertical: 10, marginBottom: 28 }}>
                <Text style={{ color: isCategoryValid ? 'grey' : 'red', fontSize: 12, letterSpacing: -0.2 }}>
                    You will force to select from existing category.
                </Text>
            </View>

            <Button normalText title={'Add Item'} />
        </View>
    );
}

export default Home;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        marginTop: 2,
        paddingHorizontal: 20,
        backgroundColor: colors.secondary
    }
});
