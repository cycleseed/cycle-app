/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import LoginScreen from './screens/Login/Login'
import colors from './config/colors';

import auth from '@react-native-firebase/auth';
import QRScanner from './screens/QRScanner/QRScanner';

const App: () => React$Node = () => {

  const [initilizing, setInitilizing] = useState(true);
  const [user, setUser] = useState();
 
  function onAuthStateChanged(user) {
    console.log('USER', user);
    setUser(user);
    if (initilizing) setInitilizing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initilizing) return null;

  if (!user) {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <View style={styles.scrollView}>
            <LoginScreen />
        </View>
      </>
    );
  }

  return (
    <View style={styles.scrollView}>
      <Text>Welcome {user.email}</Text>
      <QRScanner />
    </View>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: colors.WHITE,
  }
});

export default App;
