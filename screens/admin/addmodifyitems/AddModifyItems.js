import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'

const AddModifyItems = props => {
    const isEdit = props.route.params.isEdit;

    useEffect(() => {
        props.navigation.setOptions({
            headerTitle: isEdit ? 'Edit Item' : 'Add Item'
        })
    }, [])
    return (
        <View style={styles.container}>
            <Text>
                lets work!
            </Text>
        </View>
    )
}

export default AddModifyItems;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    }
})
