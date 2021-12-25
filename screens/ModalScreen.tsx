import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { Platform, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function ModalScreen() {
  useEffect(() => {
    fetch("https://edamam-food-and-grocery-database.p.rapidapi.com/parser?ingr=apple", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "edamam-food-and-grocery-database.p.rapidapi.com",
        "x-rapidapi-key": "9a454e9993mshb17ac85352f8c7fp1d0607jsnc6ef1c23345a"
      }
    })
      .then(response => {
        console.log(response.json());
      })
      .catch(err => {
        console.error(err);
      });
  })
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Modal</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/ModalScreen.tsx" />

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
