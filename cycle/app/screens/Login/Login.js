import React, { useState } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

import FormTextInput from './../../components/FormTextInput';
import Button from "./../../components/Button";
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
         <Button label={strings.LOGIN} onPress={() => console.log('login')} />
      </View>
      <View style={styles.division}>
        <View style={styles.divisionLine}></View>
        <Text style={styles.divisionText}>OR</Text>
        <View style={styles.divisionLine}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
    alignItems: "center",
    justifyContent: "center"
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
  },
  division: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  divisionLine: {
    flex: 1, 
    height: 10,
    marginHorizontal: 20,
    borderColor: 'rgba(0,0,0,.4)',
    borderBottomWidth: StyleSheet.hairlineWidth,
  }, 
  divisionText: {
    color: 'rgba(0,0,0,.4)',
  } 
})

export default Login;