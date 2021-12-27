import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import Steps from '../../components/UI/Steps';
import Constants from 'expo-constants';
import Card from '../../components/UI/Card';

const Login = props => {
    return (
        <View style={{ flex: 1, paddingTop: Constants.statusBarHeight + 20 }}>
            <View style={{ justifyContent: 'center', marginBottom: 20 }}>
                <Image source={require('../../assets/images/rules.png')} style={{ width: 70, height: 70, marginHorizontal: 18 }} resizeMode="contain" />
            </View>
            <View style={{ flex: 1 }}>
                <ScrollView contentContainerStyle={{ justifyContent: 'flex-start' }}>
                    <View style={{ marginHorizontal: 20 }}>
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
                    </View>

                    {/* <Button title={'Continue'} style={{ marginTop: 46 }} onPress={() => props.navigation.navigate('SignupModel', { fromSeller: true })} /> */}
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', top: -10, marginTop: 60 }}>
                        <Card style={{ width: '44.4%' }} text={'Continue as User'} image={require('../../assets/images/user.png')} onPress={() => props.navigation.navigate('Login')} />
                        <Card style={{ width: '44.4%' }} text={'Continue as Admin'} image={require('../../assets/images/admin.png')} onPress={() => props.navigation.navigate('Login', { fromAdmin: true })} />
                    </View>

                </ScrollView>
            </View>
        </View>
    );
}

export default Login;