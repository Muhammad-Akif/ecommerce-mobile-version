import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native';
import Button from '../../../components/UI/Button';
import colors from '../../../constants/colors';
import Item from '../../../models/item'

const AddModifyItems = props => {
    const [name, setName] = useState('')
    const [details, setDetails] = useState('')
    const [price, setPrice] = useState(0)
    const [imageUri, setImageUri] = useState('')
    const [isUsernameValid, setIsUsernameValid] = useState(true)
    const isEdit = props.route.params.isEdit;

    useEffect(() => {
        props.navigation.setOptions({
            headerTitle: isEdit ? 'Edit Item' : 'Add Item'
        })
    }, [])

    const generateID = () => {
        return Math.random().toString(36).slice(2)
    }

    const addItemHandler = () => {
        const UID = generateID()
        const newItem = new Item(UID,)

    }

    const editItemHandler = () => {
        const UID = generateID()

    }

    return (
        <View style={styles.container}>
            <View style={{ flex: 1, paddingTop: 18, marginTop: 2, paddingHorizontal: 20, backgroundColor: 'white' }}>
               
                <TextInput
                    placeholder='Item Name'
                    style={{ color: 'black', borderBottomWidth: 1, borderColor: isUsernameValid ? name == 'username' ? colors.primary : 'grey' : 'red', paddingBottom: 0, paddingLeft: 0, }}
                    placeholderTextColor={isUsernameValid ? name == 'username' ? colors.primary : 'grey' : 'red'}
                    onFocus={setName.bind(null, 'username')}
                    onBlur={setName.bind(null, 'no')}
                />
                <View style={{ marginVertical: 10, marginBottom: 20 }}>
                    <Text style={{ color: isUsernameValid ? 'grey' : 'red', fontSize: 12, letterSpacing: -0.2 }}>
                        {
                            isUsernameValid ? "Your username will be public. Can't change later." : "Must start with letter and have minimum 6 characters."
                        }
                    </Text>
                </View>
                <TextInput
                    placeholder='Item Details'
                    style={{ color: 'black', borderBottomWidth: 1, borderColor: isUsernameValid ? details == 'username' ? colors.primary : 'grey' : 'red', paddingBottom: 0, paddingLeft: 0, }}
                    placeholderTextColor={isUsernameValid ? details == 'username' ? colors.primary : 'grey' : 'red'}
                    onFocus={setDetails.bind(null, 'username')}
                    onBlur={setDetails.bind(null, 'no')}
                />
                <View style={{ marginVertical: 10, marginBottom: 20 }}>
                    <Text style={{ color: isUsernameValid ? 'grey' : 'red', fontSize: 12, letterSpacing: -0.2 }}>
                        {
                            isUsernameValid ? "Your username will be public. Can't change later." : "Must start with letter and have minimum 6 characters."
                        }
                    </Text>
                </View>
                <TextInput
                    placeholder='Image url'
                    style={{ color: 'black', borderBottomWidth: 1, borderColor: isUsernameValid ? imageUri == 'username' ? colors.primary : 'grey' : 'red', paddingBottom: 0, paddingLeft: 0, }}
                    placeholderTextColor={isUsernameValid ? imageUri == 'username' ? colors.primary : 'grey' : 'red'}
                    onFocus={setImageUri.bind(null, 'username')}
                    onBlur={setImageUri.bind(null, 'no')}
                />
                <View style={{ marginVertical: 10, marginBottom: 20 }}>
                    <Text style={{ color: isUsernameValid ? 'grey' : 'red', fontSize: 12, letterSpacing: -0.2 }}>
                        {
                            isUsernameValid ? "Your username will be public. Can't change later." : "Must start with letter and have minimum 6 characters."
                        }
                    </Text>
                </View>
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