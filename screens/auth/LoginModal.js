import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Button from '../../components/UI/Button';
import colors from '../../constants/colors';
import { useAuthContext } from '../../contexts/ContextProvider';
import checkAndReadFile from '../../functions/checkAndReadFile';

const LoginModal = props => {
    const { setAuth } = useAuthContext();
    const fromAdmin = props?.route?.params?.fromAdmin;
    const [selected, setSelected] = useState('no');
    const [usernameOrEmail, setUsernameOrEmail] = useState('');
    const [password, setPassword] = useState('');
    const onBlur = () => {
        setSelected('no');
    }
    return (
        <View style={{ flex: 1 }}>
            <View style={{ height: 70, backgroundColor: colors.offWhite, alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
                <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', width: 70, height: 70, top: 4 }} onPress={() => props.navigation.goBack()}>
                    <Icon name={'ios-arrow-up-outline'} size={20} color={'#969292'} />
                    <Text style={{ color: '#a6a1a1', fontSize: 14.5, letterSpacing: -0.3 }}>
                        Go back
                    </Text>
                </TouchableOpacity>
            </View>
            <ScrollView contentContainerStyle={{ flex: 1, justifyContent: 'flex-end', marginHorizontal: 20 }}>
                <Image style={{ width: '50%' }} resizeMode={'contain'} />
                <View style={{ marginBottom: 10 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'black' }}>
                        {
                            fromAdmin ? 'Welcome Admin' : 'Welcome back'
                        }
                    </Text>
                </View>
                <View style={{ marginBottom: 30 }}>
                    <Text style={{ letterSpacing: -0.2, fontSize: 14, color: 'grey' }} adjustsFontSizeToFit={true} numberOfLines={1}>
                        {
                            fromAdmin ? 'Sign in back in order to handle different e-commerce items.' : 'Sign in to e-commerce to pick up exactly where you left off.'
                        }
                    </Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
                    <View style={{ borderRadius: 6, width: '47%', backgroundColor: '#002e78', height: 36, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: 'white', fontWeight: 'bold' }}>
                            Facebook
                        </Text>
                    </View>
                    <View style={{ borderRadius: 6, width: '47%', backgroundColor: '#3f80e8', height: 36, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: 'white', fontWeight: 'bold' }}>
                            Google
                        </Text>
                    </View>
                </View>

                <View style={{ alignItems: 'center', marginBottom: 20 }}>
                    <Text style={{ letterSpacing: -0.2, fontSize: 14, color: 'grey' }}>
                        or sign in with email
                    </Text>
                </View>

                <View style={{ marginBottom: 40 }}>
                    <TextInput
                        placeholder='Email or username'
                        value={usernameOrEmail}
                        onChangeText={setUsernameOrEmail}
                        style={{ color: 'black', borderBottomWidth: 1, borderColor: selected == 'email' ? colors.primary : 'grey', paddingBottom: 0, paddingLeft: 0, fontSize: 16 }}
                        placeholderTextColor={selected == 'email' ? colors.primary : 'grey'}
                        onFocus={() => {
                            setSelected('email')
                        }}
                        onBlur={onBlur}
                    />
                </View>

                <View style={{ marginBottom: 30 }}>
                    <TextInput
                        placeholder='Password'
                        value={password}
                        onChangeText={setPassword}
                        style={{ color: 'black', borderBottomWidth: 1, borderColor: selected == 'password' ? colors.primary : 'grey', paddingBottom: 0, paddingLeft: 0, fontSize: 16 }}
                        placeholderTextColor={selected == 'password' ? colors.primary : 'grey'}
                        onFocus={() => {
                            setSelected('password')
                        }}
                        onBlur={onBlur}
                    />
                </View>

                <Button normalText title={'Continue'} style={{ marginBottom: 20, borderRadius: 8 }} onPress={async () => {
                    const data = await checkAndReadFile();
                    let loginEmail = ''
                    let loginUsername = ''
                    let loginPassword = ''
                    if (fromAdmin) {
                        if (!(data.auth.admin.email == usernameOrEmail || data.auth.admin.username == usernameOrEmail)) return;
                        const admin = data.auth.admin;
                        loginEmail = admin.email;
                        loginUsername = admin.username;
                        loginPassword = admin.password
                    } else {
                        const indexOfUser = data.auth.users.findIndex(user => user.email == usernameOrEmail || user.password == usernameOrEmail);
                        if (indexOfUser == -1) return;
                        const user = data.auth.users[indexOfUser];
                        loginEmail = user.email
                        loginUsername = user.username
                        loginPassword = user.password
                    }
                    props.navigation.popToTop();
                    props.navigation.replace('MainNavigator')
                    setAuth({
                        email: loginEmail,
                        username: loginUsername,
                        password: loginPassword,
                        isAdmin: fromAdmin ? true : false,
                        logout: false
                    })
                    //TODO
                }} />

                {
                    !fromAdmin ? (
                        <TouchableOpacity style={{ marginBottom: 24, alignItems: 'flex-end' }} onPress={() => props.navigation.navigate('Signup')}>
                            <Text style={{ color: colors.primary, fontWeight: 'bold' }}>
                                Create Account
                            </Text>
                        </TouchableOpacity>
                    ) : (
                        <View style={{ marginBottom: 24, alignItems: 'center', marginLeft: 8 }}>
                            <Text style={{ color: colors.primary, fontFamily: 'italic' }}>
                                Admin! we need your help...
                            </Text>
                        </View>
                    )
                }

            </ScrollView>
        </View>
    );
}

export default LoginModal;
