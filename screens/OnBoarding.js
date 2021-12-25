import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Image } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, Inter_900Black, Inter_800ExtraBold } from '@expo-google-fonts/inter';
import Constants from 'expo-constants';
import { LinearGradient } from 'expo-linear-gradient';
import colors from '../constants/colors';

const { width, height } = Dimensions.get('window');

export default function OnBoarding(props) {
    let [fontsLoaded] = useFonts({
        Inter_900Black,
        Inter_800ExtraBold,
        'Lato-Black': require('../assets/fonts/Lato-Regular.ttf'),
        'italic': require('../assets/fonts/Lato-LightItalic.ttf'),
        'bold': require('../assets/fonts/Lato-Bold.ttf')
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <View style={styles.screen}>
                <View style={{ flex: 1 }}>
                    <View>
                        <View style={styles.circle} />
                        <View>
                            <Text style={styles.text} numberOfLines={1} adjustsFontSizeToFit={true}>Find Your</Text>
                        </View>
                        <View style={{ top: -25 }}>
                            <Text style={styles.text} numberOfLines={1} adjustsFontSizeToFit={true}>Gadget</Text>
                        </View>
                    </View>
                    <View style={{ alignItems: 'center', top: -30, zIndex: 99 }}>
                        <Image source={require('../assets/images/ecommerce.png')} style={{ width: width, height: width / 1.1 }} resizeMode={'contain'} />
                    </View>
                </View>
                <LinearGradient
                    colors={[colors.primary, '#3d39e6', '#3d39e6', colors.primary]}
                    style={{ position: 'absolute', width, height: 180, alignItems: 'center', bottom: 55, left: 0, right: 0 }}
                />
                <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={{ color: colors.primary, fontSize: 17.5, fontFamily: 'bold' }}>
                            Get Started
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'space-between',
        marginTop: Constants.statusBarHeight,
        backgroundColor: colors.primary,
        padding: 42
    },
    circle: {
        width: 50,
        height: 50,
        borderRadius: 50,
        backgroundColor: 'white',
        marginBottom: 12
    },
    text: {
        fontSize: 60,
        fontFamily: 'Inter_800ExtraBold',
        color: 'white'
    },
    button: {
        backgroundColor: 'white',
        height: 50,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
