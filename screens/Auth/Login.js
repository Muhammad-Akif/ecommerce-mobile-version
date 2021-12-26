import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, Dimensions, KeyboardAvoidingView } from 'react-native';
import Button from '../../components/Button';
import colors from '../../constants/colors';
// import { useDispatch } from "react-redux";
// import { authenticate } from '../../redux/actions';
const { width } = Dimensions.get('window');

const Login = props => {
    // const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
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
                        <TextInput onChangeText={setEmail.bind(null)} style={{ width: '100%', borderBottomColor: 'rgb(121,121,121)', borderBottomWidth: 1, height: 29 }} />
                    </View>
                </View>
                <View style={{ flex: 2.3 }}>
                    <View style={{ height: 25 }}>
                        <Text style={styles.inputLableColor}>
                            Password
                        </Text>
                    </View>
                    <View>
                        <TextInput onChangeText={setPassword.bind(null)} style={{ width: '100%', borderBottomColor: 'rgb(121,121,121)', borderBottomWidth: 1, height: 29 }} />
                    </View>
                    <View style={{ marginTop: 29 }}>

                        <Text style={{ color: 'rgb(250,74,12)', fontWeight: 'bold', fontSize: 15 }}>
                            Forgot Passcode?
                        </Text>
                    </View>
                </View>
            </View>
            <View style={styles.lastRow}>
                {/* <Button label={'Login'} onPress={() => dispatch(authenticate(email, password))} /> */}
            </View>

        </KeyboardAvoidingView>

    );
}

export default Login;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: colors.secondary,
        justifyContent: 'space-between',
    },
    firstRow: {
        flex: 3.5,
        paddingHorizontal: width / 12,
        paddingTop: 50,
        justifyContent: 'flex-start'
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

