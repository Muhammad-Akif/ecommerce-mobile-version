import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import * as Google from "expo-google-app-auth";

export default class GoogleSignin extends Component {
    _handleGoogleLogin = async () => {
        try {
            const { type, user } = await Google.logInAsync({
                androidClientId: `1063086127018-ios3ojhcij7qce2cv4tb328euiee32c4.apps.googleusercontent.com`,
            });

            if (type === "success") {
                console.log("Success ==> ", user);
            }
        }
        catch (error) {
            console.log("Reject ==> ", error);
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this._handleGoogleLogin} style={styles.button}>
                    <Text style={{ color: 'white', fontWeight: 'bold' }}>
                        Google
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 6,
        width: '47%',
        backgroundColor: '#3f80e8',
        height: 36,
        justifyContent: 'center',
        alignItems: 'center'
    }
});