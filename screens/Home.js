import React from 'react'
import Search from '../components/home/Search'
import { View, TextInput, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { useFonts, Inter_900Black, Inter_800ExtraBold } from '@expo-google-fonts/inter';
import AppLoading from 'expo-app-loading';
// import Constants from 'expo-constants';
// import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');
export default function Home() {
    let [fontsLoaded] = useFonts({
        Inter_900Black,
        Inter_800ExtraBold
    });
    if (!fontsLoaded) {
        return <AppLoading />;
    }
    else {
        return (
            <View
                style={styles.screen}
            >
                <Search />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    screen: {
        // flex: 1,
        // justifyContent: 'space-between',
        // marginTop: Constants.statusBarHeight,
        // backgroundColor: 'blue',
        // padding: 42
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
});