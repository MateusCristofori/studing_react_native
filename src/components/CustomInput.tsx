import React from "react";
import { StyleSheet, TextInput, TextInputProps } from "react-native";

export default function CustomInput(props: TextInputProps) {
  return (
    <TextInput {...props} placeholderTextColor="#727272" style={[styles.input, props.style]} />
  );
}

const styles = StyleSheet.create({
  input: {
    borderRadius: 8,
    paddingHorizontal: 8,
    borderWidth: 1,
    width: "75%",
    height: 50,
    marginBottom: 16,
    alignSelf: "center",
    justifyContent: "center",
  },
});
