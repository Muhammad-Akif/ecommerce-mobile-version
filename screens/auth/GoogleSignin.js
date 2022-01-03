// 1063086127018-ios3ojhcij7qce2cv4tb328euiee32c4.apps.googleusercontent.com

import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, Alert } from 'react-native';
// import { Constants, Google } from 'expo';
import * as Google from "expo-google-app-auth";

export default class GoogleSignin extends Component {
  _handleGoogleLogin = async () => {
    console.log("LoginScreen.js 6 | loggin in");
    try {
      const { type, user } = await Google.logInAsync({
        // iosClientId: `<YOUR_IOS_CLIENT_ID>`,
        androidClientId: `1063086127018-ios3ojhcij7qce2cv4tb328euiee32c4.apps.googleusercontent.com`,
      });

      if (type === "success") {
        // Then you can use the Google REST API
        console.log("LoginScreen.js 17 | success, navigating to profile");
        // navigation.navigate("Profile", { user });
      }
    } catch (error) {
      console.log("LoginScreen.js 19 | error with login", error);
    }
    }

  render() {
    return (
      <View style={styles.container}>
        <Button
          title="Login with Google"
          onPress={this._handleGoogleLogin}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  }
});