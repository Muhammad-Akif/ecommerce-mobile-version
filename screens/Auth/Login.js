import React from 'react';
import { Text, View, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Button from '../../components/Button';
import Steps from '../../components/Steps';
import Constants from 'expo-constants';

const Login = props => {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ height: 55, alignItems: 'center', justifyContent: 'center', marginTop: Constants.statusBarHeight + 10 }}>
                <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', width: 70, height: 55 }} onPress={() => props.navigation.goBack()}>
                    <Icon name={'ios-arrow-up-outline'} size={20} color={'#969292'} />
                    <Text style={{ color: '#a6a1a1', fontSize: 14.5, letterSpacing: -0.3 }}>
                        Go back
                    </Text>
                </TouchableOpacity>
            </View>
            <ScrollView contentContainerStyle={{ flex: 1, justifyContent: 'flex-start', marginTop: 35, marginHorizontal: 20 }}>
                <Image />
                <View style={{ marginVertical: 10 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'black' }}>
                        Use your search skills
                    </Text>
                </View>
                <View style={{ marginBottom: 50 }}>
                    <Text style={{ letterSpacing: -0.2, fontSize: 14, color: 'grey' }} adjustsFontSizeToFit={true} numberOfLines={1}>
                        We'll get you the products. We'll make shopping easy.
                    </Text>
                </View>

                <Steps
                    icon={'ios-document-outline'}
                    title={'Complete your Profile'}
                    description={'Tell about your stiches history and skills to global audience and start earning more.'}
                />
                <Steps
                    icon={'paper-plane-outline'}
                    title={'Deliver your stiched work'}
                    description={"We'll deliver offline after you have done with the client's order."}
                />
                <Steps
                    icon={'cloud-done-outline'}
                    title={'Get paid'}
                    description={"Get your payment through easypaisa or door to door. It's that simple."}
                />

                <Button label={'Continue'} style={{ marginTop: 40 }} onPress={() => props.navigation.navigate('SignupModel', { fromSeller: true })} />

            </ScrollView>
        </View>
    );
}

export default Login;