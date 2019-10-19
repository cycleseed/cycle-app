import React, { useState } from 'react';
import { StyleSheet, View, Image } from 'react-native';

import FormTextInput from './../../components/FormTextInput';
import strings from './../../config/strings';
import colors from './../../config/colors';
import logo from './../../assets/images/caremelogo.png';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <View style={styles.form}>
        <FormTextInput 
          value={email}
          onChangeText={(email) => setEmail(email)}
          placeholder={strings.EMAIL_PLACEHOLDER}
        />
        <FormTextInput 
          value={password}
          onChangeText={(password) => setPassword(password)}
          placeholder={strings.PASSWORD_PLACEHOLDER}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
    alignItems: "center",
    justifyContent: "space-around"
  },
  logo: {
    flex: 1,
    width: "100%",
    resizeMode: "contain",
    alignSelf: "center"
  }, 
  form: {
    flex: 1,
    justifyContent: "center",
    width: "80%"
  }
  
})

export default Login;