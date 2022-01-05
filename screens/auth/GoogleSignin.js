import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import * as Google from "expo-google-app-auth";
import { useEcommerceContext } from '../../contexts/ContextProvider';
import checkAndWriteFile from '../../functions/checkAndWriteFile';
import { Ionicons } from '@expo/vector-icons';

const GoogleSignin = props => {

    const { setAuth, auth, allData, setAllData } = useEcommerceContext();

    const _handleGoogleLogin = async () => {
        try {
            const { type, user } = await Google.logInAsync({
                androidClientId: `1063086127018-ios3ojhcij7qce2cv4tb328euiee32c4.apps.googleusercontent.com`,
            });

            if (type === "success") {
                console.log("Success ==> ", user);

                props.navigation.popToTop();
                props.navigation.replace('DrawerCartStackNavigator')
                const newAuth = {
                    ...auth,
                    whoIsLogin: 'user',
                    loginUserInfo: {
                        email: user.email,
                        username: user.givenName,
                        password: '',
                        loginFromWhere: 'g' // f | g
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
            }
        }
        catch (error) {
            console.log("Reject ==> ", error);
        }
    }

    return (
        <TouchableOpacity onPress={_handleGoogleLogin} style={styles.container}>
            <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                <Text style={{ marginRight: 10 }}>
                    <Ionicons name={'logo-google'} size={20} color={'white'} />
                </Text>
                <Text style={{ color: 'white', fontWeight: 'bold' }}>
                    Google
                </Text>
            </View>
        </TouchableOpacity>
    )
}

export default GoogleSignin;

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