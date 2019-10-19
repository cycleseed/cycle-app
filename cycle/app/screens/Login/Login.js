import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import FormTextInput from './../../components/FormTextInput';

function Login() {
  const [email, setEmail] = useState('');
  
  return (
    <View style={styles.container}>
      <FormTextInput 
        value={email}
        onChangeText={(email) => setEmail(email)}
        placeholder={'mail'}
      />
      <Text>Hola</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  
})

export default Login;