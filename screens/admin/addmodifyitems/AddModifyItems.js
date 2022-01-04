import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, StyleSheet, Picker } from 'react-native';
import Button from '../../../components/UI/Button';
import colors from '../../../constants/colors';
import { useEcommerceContext } from '../../../contexts/ContextProvider';
import checkAndWriteFile from '../../../functions/checkAndWriteFile';
import Item from '../../../models/item'

const AddModifyItems = props => {
    const [name, setName] = useState('')
    const [detail, setDetail] = useState('')
    const [price, setPrice] = useState(0)
    const [imageUri, setImageUri] = useState('')
    const [isUsernameValid, setIsUsernameValid] = useState(true)
    const [category, setCategory] = useState('');
    const [categories] = useState(['vagetables', 'Diary', 'Backery'])
    const isEdit = props.route.params.isEdit;

    const { allData, setAllData, items, setItems } = useEcommerceContext();

    useEffect(() => {
        props.navigation.setOptions({
            headerTitle: isEdit ? 'Edit Item' : 'Add Item'
        })
    }, [])

    const generateID = () => {
        return Math.random().toString(36).slice(2)
    }

    const addItemHandler = async () => {
        const UID = generateID()
        console.log('level one seller', name.length > 2, detail.length > 10, imageUri.length > 10), price.length > 1
        if (name.length > 2 && detail.length > 10 && imageUri.length > 10 && price.length > 1 && category.length > 2) {
            const newItem = {
                UID,
                name,
                detail,
                price: parseFloat(price),
                imageUri,
                category
                // []   
            }
            console.log('result --==>> ', newItem)
            // const newItem = new Item(UID, name, detail, price, imageUri, [])

            // const copyItems = { ...items };
            const copyCategories = [...items.categories];

            const indexOfCategory = copyCategories.findIndex(cat => cat.name == category);

            console.log(indexOfCategory, 'aaaaaaaaaaaaa');

            copyCategories[indexOfCategory].items.push(new Item(UID, name, detail, parseFloat(price), imageUri, []));

            const copyItems = { ...items, categories: copyCategories };

            setItems(copyItems);

            const newAllData = {
                ...allData,
                items: copyItems
            }

            setAllData(newAllData);

            await checkAndWriteFile(newAllData);

        }
        else {
            setIsUsernameValid(false)
        }

    }

    const editItemHandler = () => {
        const UID = generateID()

    }

    return (
        <View style={styles.container}>
            <View style={{ flex: 1, paddingTop: 18, marginTop: 2, paddingHorizontal: 20, backgroundColor: 'white' }}>

                <TextInput
                    placeholder='Name'
                    value={name}
                    style={{ color: 'black', borderBottomWidth: 1, borderColor: isUsernameValid ? name == 'username' ? colors.primary : 'grey' : 'red', paddingBottom: 0, paddingLeft: 0, }}
                    placeholderTextColor={isUsernameValid ? colors.primary : 'grey'}
                    onChangeText={(text) => setName(text)}
                />
                <View style={{ marginVertical: 10, marginBottom: 20 }}>
                    <Text style={{ color: isUsernameValid ? 'grey' : 'red', fontSize: 12, letterSpacing: -0.2 }}>
                        {
                            isUsernameValid ? "Your username will be public. Can't change later." : "Must have minimum 2 characters Name."
                        }
                    </Text>
                </View>
                <TextInput
                    placeholder='Detail'
                    multiline={true}
                    value={detail}
                    style={{ color: 'black', borderBottomWidth: 1, borderColor: isUsernameValid ? detail == 'username' ? colors.primary : 'grey' : 'red', paddingBottom: 0, paddingLeft: 0, }}
                    placeholderTextColor={isUsernameValid ? colors.primary : 'grey'}
                    onChangeText={(text) => setDetail(text)}
                />
                <View style={{ marginVertical: 10, marginBottom: 20 }}>
                    <Text style={{ color: isUsernameValid ? 'grey' : 'red', fontSize: 12, letterSpacing: -0.2 }}>
                        {
                            isUsernameValid ? "Complete Description about Product..." : "At least have 10 characters Description."
                        }
                    </Text>
                </View>
                <TextInput
                    placeholder='Image url'
                    value={imageUri}
                    style={{ color: 'black', borderBottomWidth: 1, borderColor: isUsernameValid ? imageUri == 'username' ? colors.primary : 'grey' : 'red', paddingBottom: 0, paddingLeft: 0, }}
                    placeholderTextColor={isUsernameValid ? colors.primary : 'grey'}
                    onChangeText={(text) => setImageUri(text)}
                />
                <View style={{ marginVertical: 10, marginBottom: 20 }}>
                    <Text style={{ color: isUsernameValid ? 'grey' : 'red', fontSize: 12, letterSpacing: -0.2 }}>
                        {
                            isUsernameValid ? "Any remote image address you like... " : "Must have minimum 10 characters Image Address."
                        }
                    </Text>
                </View>
                <TextInput
                    keyboardType='numeric'
                    placeholder='Price'
                    value={price}
                    style={{ color: 'black', borderBottomWidth: 1, borderColor: isUsernameValid ? price == 'username' ? colors.primary : 'grey' : 'red', paddingBottom: 0, paddingLeft: 0, }}
                    placeholderTextColor={isUsernameValid ? colors.primary : 'grey'}
                    onChangeText={(text) => setPrice(text)}
                />
                <View style={{ marginVertical: 10, marginBottom: 20 }}>
                    <Text style={{ color: isUsernameValid ? 'grey' : 'red', fontSize: 12, letterSpacing: -0.2 }}>
                        {
                            isUsernameValid ? "Item Price in Dollar..." : "At least have 1 digit number."
                        }
                    </Text>
                </View>
                <Picker
                    style={{ marginBottom: 20, color: isUsernameValid ? colors.primary : 'grey' }}
                    selectedValue={category}
                    onValueChange={val => setCategory(val)}
                >
                    {
                        items.categories.map(cat => <Picker.Item label={cat.name} value={cat.name} />)
                    }
                </Picker>
                {
                    isEdit ?
                        <Button title="Edit Item" onPress={editItemHandler} />
                        :
                        <Button title="Add Item" onPress={addItemHandler} />

                }
            </View>
        </View>
    );
}

export default AddModifyItems;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    }
})