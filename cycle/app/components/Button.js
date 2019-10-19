import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import colors from "../config/colors";

class Button extends React.Component {
  render() {

    const { 
      label, 
      onPress, 
      textStyle, 
      touchableOpacityStyle, 
      image,
      ...otherProps 
    } = this.props;

    return (
      <TouchableOpacity style={[styles.container, touchableOpacityStyle]} onPress={onPress}>
        { image && null }
        <Text style={[styles.text, textStyle]}>{label}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.DODGER_BLUE,
    marginBottom: 12,
    paddingVertical: 12,
    borderRadius: 4,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "rgba(255,255,255,0.7)"
  },
  text: {
    color: colors.WHITE,
    textAlign: "center",
    height: 20
  }
});

export default Button;