import React, { useRef, useState } from 'react';
import { Text, View, TextInput, Alert, Keyboard } from 'react-native';
import Button from '../../components/UI/Button';
import CloseButton from '../../components/UI/CloseButton';
import FullScreenIndicator from '../../components/UI/FullScreenIndicator';
import colors from '../../constants/colors';
import { useEcommerceContext } from '../../contexts/ContextProvider';
import checkAndWriteFile from '../../functions/checkAndWriteFile';
import validateEmail from '../../functions/validateEmail';
import validatePassword from '../../functions/validatePassword';
import validateUsername from '../../functions/validateUsername';

const Signup = props => {
    const { auth, setAuth, allData, setAllData } = useEcommerceContext();

    const [selected, setSelected] = useState('email');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isUsernameValid, setIsUsernameValid] = useState(true);
    const [isPasswordValid, setIsPasswordValid] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    const emailRef = useRef(null);
    const usernameRef = useRef(null);
    const passwordRef = useRef(null);


    const handleSignup = async () => {
        setIsLoading(true);
        if (email.trim() && password.trim() && username.trim()) {
            let isAllTrue = true;
            if (!validateEmail(email)) {
                setIsEmailValid(false);
                isAllTrue = false;
            }
            if (!validateUsername(username) || username.length < 6) {
                setIsUsernameValid(false);
                isAllTrue = false;
            }
            if (!validatePassword(password)) {
                setIsPasswordValid(false);
                isAllTrue = false;
            }
            if (!isAllTrue) {
                setIsLoading(false);
                return;
            }
            Keyboard.dismiss();

            const newAuth = {
                ...auth,
                users: [...auth.users, { email: email.trim(), username: username.trim(), password: password.trim() }],
            }

            const newData = {
                ...allData,
                auth: newAuth
            }
            Alert.alert('Operation Success', 'You can now Login!', [{ text: 'Ok', style: 'destructive', onPress: () => props.navigation.goBack() }])

            await checkAndWriteFile(newData)
            setAllData(newData);

            setIsLoading(false);

            setAuth(newAuth)
            return;
        }
        setIsLoading(false);
    }

    const handleCloseButtonPress = type => { // email | username | password
        if (type == 'email') {
            setIsEmailValid(true);
            setEmail('');
            emailRef.current.focus();
        } else if (type == 'username') {
            setIsUsernameValid(true);
            setUsername('');
            usernameRef.current.focus();
        } else if (type == 'password') {
            setIsPasswordValid(true);
            setPassword('');
            passwordRef.current.focus();
        }
    }

    return (
        <View style={{ flex: 1, paddingTop: 18, marginTop: 2, paddingHorizontal: 20, backgroundColor: 'white' }}>
            <View>
                <TextInput
                    ref={(ref) => { emailRef.current = ref; }}
                    placeholder='Email'
                    value={email}
                    onChangeText={setEmail}
                    style={{ color: 'black', borderBottomWidth: 1, borderColor: isEmailValid ? selected == 'email' ? colors.primary : 'grey' : 'red', paddingBottom: 0, paddingLeft: 0, }}
                    placeholderTextColor={isEmailValid ? selected == 'email' ? colors.primary : 'grey' : 'red'}
                    autoFocus={true}
                    onFocus={setSelected.bind(null, 'email')}
                    onBlur={setSelected.bind(null, 'no')}
                />
                {
                    !isEmailValid && <CloseButton onPress={handleCloseButtonPress.bind(null, 'email')} />
                }
            </View>
            <View style={{ marginVertical: 10, marginBottom: !isEmailValid ? 15 : 6 }}>
                <Text style={{ color: 'red', fontSize: 12, letterSpacing: -0.2 }}>
                    {
                        !isEmailValid && "Invalid email address."
                    }
                </Text>
            </View>
            <View>

                <TextInput
                    ref={(ref) => { usernameRef.current = ref; }}
                    placeholder='Username'
                    value={username}
                    onChangeText={setUsername}
                    style={{ color: 'black', borderBottomWidth: 1, borderColor: isUsernameValid ? selected == 'username' ? colors.primary : 'grey' : 'red', paddingBottom: 0, paddingLeft: 0, }}
                    placeholderTextColor={isUsernameValid ? selected == 'username' ? colors.primary : 'grey' : 'red'}
                    onFocus={setSelected.bind(null, 'username')}
                    onBlur={setSelected.bind(null, 'no')}
                />
                {
                    !isUsernameValid && <CloseButton onPress={handleCloseButtonPress.bind(null, 'username')} />
                }
            </View>
            <View style={{ marginVertical: 10, marginBottom: 20 }}>
                <Text style={{ color: isUsernameValid ? 'grey' : 'red', fontSize: 12, letterSpacing: -0.2 }}>
                    {
                        isUsernameValid ? "Your username will be public. Can't change later." : "Must start with letter and have minimum 6 characters."
                    }
                </Text>
            </View>
            <View>

                <TextInput
                    ref={(ref) => { passwordRef.current = ref; }}
                    placeholder='Password'
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={true}
                    style={{ color: 'black', borderBottomWidth: 1, borderColor: isPasswordValid ? selected == 'password' ? colors.primary : 'grey' : 'red', paddingBottom: 0, paddingLeft: 0, }}
                    placeholderTextColor={isPasswordValid ? selected == 'password' ? colors.primary : 'grey' : 'red'}
                    onFocus={setSelected.bind(null, 'password')}
                    onBlur={setSelected.bind(null, 'no')}
                />
                {
                    !isPasswordValid && <CloseButton onPress={handleCloseButtonPress.bind(null, 'password')} />
                }
            </View>
            <View style={{ marginVertical: 10, marginBottom: 28 }}>
                <Text style={{ color: isPasswordValid ? 'grey' : 'red', fontSize: 12, letterSpacing: -0.2 }}>
                    {
                        isPasswordValid ? "Include alphanumeric, special ." : "Please include number, capital small alphabets, special character and length must be greater than 7"
                    }
                </Text>
            </View>

            <Button normalText title={'Sign Up'} onPress={handleSignup} />

            {
                isLoading && <FullScreenIndicator />
            }

        </View>
    );
}

export default Signup;
