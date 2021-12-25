import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, Inter_900Black, Inter_800ExtraBold } from '@expo-google-fonts/inter';
import Constants from 'expo-constants';
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');

export default function OnBoarding(props) {
    let [fontsLoaded] = useFonts({
        Inter_900Black,
        Inter_800ExtraBold
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <View style={styles.screen}>
                <View>
                    <View style={styles.circle} />
                    <View>
                        <Text style={styles.text} numberOfLines={1} adjustsFontSizeToFit={true}>Find Your</Text>
                    </View>
                    <View style={{ top: -25 }}>
                        <Text style={styles.text} numberOfLines={1} adjustsFontSizeToFit={true}>Gadget</Text>
                    </View>
                </View>
                <LinearGradient
                    colors={['rgb(255,76,59)', 'rgb(255,72,18)', 'rgb(255,74,46)']}
                    style={{ position: 'absolute', width, height: 300, alignItems: 'center', bottom: 57, left: 0, right: 0 }}
                />
                <View>
                    <TouchableOpacity style={styles.button} >
                        <Text style={{ color: 'rgb(255,75,58)' }}>
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
        backgroundColor: 'blue',
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
