import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import colors from './../config/colors';

function FormTextInput(props) {
  const { style, ...otherProps } = props;
  return (
    <TextInput
      selectionColor={'#000'}
      style={[styles.textInput, style]}
      {...otherProps}
    />
  );
}

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    borderColor: colors.SILVER,
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginBottom: 20
  }
});

export default FormTextInput;