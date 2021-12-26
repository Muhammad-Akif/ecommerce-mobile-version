import React from 'react';
import { Text, View, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Button from '../../components/Button';
// import { useDispatch } from 'react-redux';
// import { authenticate } from '../redux/actions';

const SignupModel = props => {
    // const dispatch = useDispatch();
    const fromSeller = props?.route?.params?.fromSeller;
    return (
        <View style={{ flex: 1 }}>
            <View style={{ height: 55, alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
                <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', width: 70, height: 55 }} onPress={() => props.navigation.goBack()}>
                    <Icon name={'ios-arrow-up-outline'} size={20} color={'#969292'} />
                    <Text style={{ color: '#a6a1a1', fontSize: 14.5, letterSpacing: -0.3 }}>
                        Go back
                    </Text>
                </TouchableOpacity>
            </View>
            <ScrollView contentContainerStyle={{ flex: 1, justifyContent: 'flex-end', marginHorizontal: 20 }}>
                <Image />

                <View style={{ marginBottom: 4 }}>
                    <Text style={{ fontSize: 22, fontWeight: 'bold', color: 'black' }}>
                        Join Us
                    </Text>
                </View>
                <View style={{ marginBottom: 26 }}>
                    <Text style={{ color: 'grey' }}>
                        Join our growing tailor community to offer your amazing stiches, connect with customers and get payment through this trusted platform.
                    </Text>
                </View>

                <Button label={'Continue with Facebook'} style={{ marginVertical: 4, backgroundColor: '#002e78' }} textStyle={{ fontWeight: 'normal' }} />
                <Button label={'Continue with Google'} style={{ marginVertical: 4, backgroundColor: '#3f80e8' }} textStyle={{ fontWeight: 'normal' }} />
                <Button label={'Sign Up with Email'} onPress={() => props.navigation.navigate('Signup')} style={{ marginVertical: 4, backgroundColor: 'orange' }} textStyle={{ fontWeight: 'normal' }} />

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 20, marginRight: 2 }}>
                    <TouchableOpacity onPress={() => props.navigation.navigate('LoginModel')}>
                        <Text style={{ color: 'orange', fontSize: 15 }}>Sign In</Text>
                    </TouchableOpacity>
                    {
                        !fromSeller && (
                            <TouchableOpacity >
                                <Text style={{ color: 'orange', fontSize: 15 }}>Skip</Text>
                            </TouchableOpacity>
                        )
                    }
                </View>

            </ScrollView>
        </View>
    );
}

export default SignupModel;
