import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import * as Facebook from 'expo-facebook';
import { useEcommerceContext } from '../../contexts/ContextProvider';
import checkAndWriteFile from '../../functions/checkAndWriteFile';
import { Ionicons } from '@expo/vector-icons';

const FacebookSignin = propss => {
    const { setAuth, auth, allData, setAllData } = useEcommerceContext();

    async function logIn(props) {
        try {
            await Facebook.initializeAsync({
                appId: '471321207933541',
            });
            const { type, token, expirationDate, permissions, declinedPermissions } =
                await Facebook.logInWithReadPermissionsAsync({
                    permissions: ['public_profile'],
                });
            if (type === 'success') {
                const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);

                propss.navigation.popToTop();
                propss.navigation.replace('DrawerCartStackNavigator')
                const newAuth = {
                    ...auth,
                    whoIsLogin: 'user',
                    loginUserInfo: {
                        email: '',
                        username: await response.json().name,
                        password: '',
                        loginFromWhere: 'f' // f | g
                    }
                };
                setAuth(newAuth)
                setAllData({
                    ...allData,
                    auth: newAuth
                })
                await checkAndWriteFile({
                    ...allData,
                    auth: newAuth
                })


            } else {
            }
        } catch ({ message }) {
            alert(`Facebook Login Error: ${message}`);
        }
    }

    return (
        <TouchableOpacity style={styles.container} onPress={logIn}>
            <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                <Text style={{ marginRight: 10 }}>
                    <Ionicons name={'logo-facebook'} size={20} color={'white'} />
                </Text>
                <Text style={{ color: 'white', fontWeight: 'bold' }}>
                    Facebook
                </Text>
            </View>
        </TouchableOpacity>
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

