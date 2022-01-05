import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native';
import Button from '../../../components/UI/Button';
import colors from '../../../constants/colors';
import { useEcommerceContext } from '../../../contexts/ContextProvider';
import checkAndWriteFile from '../../../functions/checkAndWriteFile';
import generateID from '../../../functions/generateId';
import Item from '../../../models/item'
import { Picker } from '@react-native-picker/picker'


const AddModifyItems = props => {
    // is Edit
    const isEdit = props.route.params.isEdit;
    const categoryParameter = props.route.params.category;
    const product = props.route.params.product;

    const [name, setName] = useState(isEdit ? product.name : '')
    const [detail, setDetail] = useState(isEdit ? product.detail : '')
    const [price, setPrice] = useState(isEdit ? product.price.toString() : '')
    const [imageUri, setImageUri] = useState(isEdit ? product.uri.toString() : '')
    const [isUsernameValid, setIsUsernameValid] = useState(true)
    const [category, setCategory] = useState();

    const { allData, setAllData, items, setItems } = useEcommerceContext();

    useEffect(() => {
        props.navigation.setOptions({
            headerTitle: isEdit ? 'Edit Item' : 'Add Item'
        })
    }, [])

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
            const copyCategories = [...items.categories];

            const indexOfCategory = copyCategories.findIndex(cat => cat.name == category);

            copyCategories[indexOfCategory].items.push(new Item(UID, name, detail, parseFloat(price), imageUri, []));

            const copyItems = { ...items, categories: copyCategories };

            setItems(copyItems);

            const newAllData = {
                ...allData,
                items: copyItems
            }

            setAllData(newAllData);

            await checkAndWriteFile(newAllData);
            props.navigation.goBack();

        }
        else {
            setIsUsernameValid(false)
        }

    }

    const editItemHandler = async () => {
        const UID = generateID()

        const copyCategories = [...items.categories];

        const indexOfCategory = copyCategories.findIndex(cat => cat.name == categoryParameter);

        const itemIndex = copyCategories[indexOfCategory].items.findIndex(item => item.id == product.id);

        copyCategories[indexOfCategory].items.splice(itemIndex, 1, new Item(UID, name, detail, parseFloat(price), imageUri, []));

        const copyItems = { ...items, categories: copyCategories };

        setItems(copyItems);

        const newAllData = {
            ...allData,
            items: copyItems
        }

        setAllData(newAllData);

        await checkAndWriteFile(newAllData);
        props.navigation.goBack();
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
                        isEdit ? (
                            <Picker.Item label={categoryParameter} value={categoryParameter} />
                        ) : (
                            items.categories.map((item, index) => (
                                <Picker.Item label={item.name} value={item.name} key={index} />
                            ))
                        )
                    }
                </Picker>
                {
                    isEdit ?
                        <Button title="Modify" onPress={editItemHandler} />
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