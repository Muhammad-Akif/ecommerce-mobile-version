import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import * as Facebook from 'expo-facebook';

const FacebookSignin = () => {

    async function logIn() {
        try {
            await Facebook.initializeAsync({
                appId: '471321207933541',
            });
            const { type, token, expirationDate, permissions, declinedPermissions } =
                await Facebook.logInWithReadPermissionsAsync({
                    permissions: ['public_profile'],
                });
            if (type === 'success') {
                // Get the user's name using Facebook's Graph API
                const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
                console.log(`Hi ${(await response.json()).name}!`);
            } else {
                // type === 'cancel'
            }
        } catch ({ message }) {
            alert(`Facebook Login Error: ${message}`);
        }
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={logIn} style={styles.button}>
                <Text style={{ color: 'white', fontWeight: 'bold' }}>
                    Facebook
                </Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        borderRadius: 6,
        width: '47%',
        backgroundColor: '#002e78',
        height: 36,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default FacebookSignin

