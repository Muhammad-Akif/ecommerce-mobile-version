import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useDispatch } from 'react-redux';
import Button from '../../components/UI/Button';
import colors from '../../constants/colors';
import { authenticate } from '../../store/actions';

const LoginModal = props => {
    const dispatch = useDispatch();
    const fromAdmin = props?.route?.params?.fromAdmin;
    const [selected, setSelected] = useState('no');
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
                        style={{ color: 'black', borderBottomWidth: 1, borderColor: selected == 'password' ? colors.primary : 'grey', paddingBottom: 0, paddingLeft: 0, fontSize: 16 }}
                        placeholderTextColor={selected == 'password' ? colors.primary : 'grey'}
                        onFocus={() => {
                            setSelected('password')
                        }}
                        onBlur={onBlur}
                    />
                </View>

                <Button normalText title={'Continue'} style={{ marginBottom: 20, borderRadius: 8 }} onPress={() => {
                    props.navigation.popToTop();
                    props.navigation.replace('MainNavigator')
                    dispatch(authenticate('', '', fromAdmin ? false : true))
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
