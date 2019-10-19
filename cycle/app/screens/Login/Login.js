import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import FormTextInput from './../../components/FormTextInput';
import strings from './../../config/strings';
import colors from './../../config/colors';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  return (
    <View style={styles.container}>
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
  form: {
    flex: 1,
    justifyContent: "center",
    width: "80%"
  }
  
})

export default Login;