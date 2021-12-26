import React from 'react';
import { Text, View, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Button from '../../components/Button';
import Steps from '../../components/Steps';
import Constants from 'expo-constants';

const Login = props => {
    return (
        <View style={{ flex: 1, paddingTop: Constants.statusBarHeight + 20 }}>
            <View style={{ justifyContent: 'center', marginBottom: 20 }}>
                <Image source={require('../../assets/images/rules.png')} style={{ width: 70, height: 70, marginHorizontal: 18 }} resizeMode="contain" />
            </View>
            <View style={{ flex: 1 }}>
                <ScrollView contentContainerStyle={{ justifyContent: 'flex-start', marginHorizontal: 20 }}>
                    <Image />
                    <View style={{ marginBottom: 10 }}>
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
                        title={'Register yourself'}
                        description={'Get register on this platform so then you can shop amazing offers and products.'}
                    />
                    <Steps
                        icon={'paper-plane-outline'}
                        title={'Order the product'}
                        description={"Order your favorite product online through this app with in your area."}
                    />
                    <Steps
                        icon={'cloud-done-outline'}
                        title={'Take your Order'}
                        description={"We'll deliver your order at your door steps and make payment door to door."}
                    />

                    <Button title={'Continue'} style={{ marginTop: 46 }} onPress={() => props.navigation.navigate('SignupModel', { fromSeller: true })} />

                </ScrollView>
            </View>
        </View>
    );
}

export default Login;