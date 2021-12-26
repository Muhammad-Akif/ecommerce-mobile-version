import React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Dimensions, KeyboardAvoidingView } from 'react-native';
import Button from '../../components/Button';
const { width } = Dimensions.get('window');

const Signup = props => {
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.screen}
        >
            <View style={styles.firstRow}>
                <View style={{ flex: 1 }}>
                    <View style={{ height: 25 }}>
                        <Text style={styles.inputLableColor}>
                            Email address
                        </Text>
                    </View>
                    <View>
                        <TextInput onChangeText={(val) => { }} style={{ width: '100%', borderBottomColor: 'rgb(121,121,121)', borderBottomWidth: 1, height: 29 }} />
                    </View>
                </View>
                <View style={{ flex: 2.3 }}>
                    <View style={{ height: 25 }}>
                        <Text style={styles.inputLableColor}>
                            Password
                        </Text>
                    </View>
                    <View>
                        <TextInput onChangeText={(val) => { }} style={{ width: '100%', borderBottomColor: 'rgb(121,121,121)', borderBottomWidth: 1, height: 29 }} />
                    </View>
                </View>
            </View>
            <View style={styles.lastRow}>
                <Button label={'Sign-up'} />
            </View>
        </KeyboardAvoidingView>

    );
}

export default Signup;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: 'rgb(242,242,242)',
        justifyContent: 'space-between'
    },
    firstRow: {
        flex: 3.5,
        paddingHorizontal: width / 12,
        paddingTop: 50,
        justifyContent: 'flex-start'
    },
    button: {
        backgroundColor: 'rgb(250,74,12)',
        height: 65,
        borderRadius: 29,
        justifyContent: 'center',
        alignItems: 'center'
    },
    lastRow: {
        flex: 1,
        paddingHorizontal: width / 12
    },
    inputLableColor: {
        color: 'rgb(145,145,145)',
        marginBottom: 10
    }
});
