import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Image } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, Inter_900Black, Inter_800ExtraBold, } from '@expo-google-fonts/inter';
import Constants from 'expo-constants';
import { LinearGradient } from 'expo-linear-gradient';
import colors from '../constants/colors';
import Button from '../components/UI/Button';

const { width } = Dimensions.get('window');

export default function OnBoarding(props) {
    let [fontsLoaded] = useFonts({
        Inter_900Black,
        Inter_800ExtraBold,
        'Lato-Black': require('../assets/fonts/Lato-Regular.ttf'),
        'italic': require('../assets/fonts/Lato-LightItalic.ttf'),
        'bold': require('../assets/fonts/Lato-Bold.ttf'),
        'stylish': require('../assets/fonts/DroidSerif-Bold.ttf'),
        'stylish2': require('../assets/fonts/stylish.ttf'),
        'stylish3': require('../assets/fonts/DescMenu.ttf'),
        'text-bold': require('../assets/fonts/Dosis-Bold.ttf'),
        'extra-bold': require('../assets/fonts/Dosis-ExtraBold.ttf'),
        'open-sans': require('../assets/fonts/open-sans.ttf'),
        'open-sans-bold': require('../assets/fonts/OpenSans-Bold.ttf'),
        'light': require('../assets/fonts/Lato-Light.ttf'),
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <View style={styles.screen}>
                <View style={{ flex: 1 }}>
                    <View style={styles.circle} />
                    <View>
                        <Text style={styles.text} numberOfLines={1} adjustsFontSizeToFit={true}>Find Your</Text>
                    </View>
                    <View style={{ top: -25 }}>
                        <Text style={styles.text} numberOfLines={1} adjustsFontSizeToFit={true}>Gadget</Text>
                    </View>

                    <View style={{ alignItems: 'center', top: -27, zIndex: 99 }}>
                        <Image source={require('../assets/images/ecommerce.png')} style={{ width: width, height: width / 1.1 }} resizeMode={'contain'} />
                    </View>
                </View>
                <LinearGradient
                    colors={[colors.primary, '#3d39e6', '#3d39e6', colors.primary]}
                    style={{ position: 'absolute', width, height: 180, alignItems: 'center', bottom: 55, left: 0, right: 0 }}
                />
                <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                    <Button whiteTheme style={{ height: 50, borderRadius: 20 }} title="Get Started" onPress={() => props.navigation.navigate('Auth')} />
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
        fontFamily: 'Inter_900Black',
        color: 'white'
    }
})
