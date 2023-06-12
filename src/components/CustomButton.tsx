import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

export default function CustomButton({ title, style, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity {...rest} style={[styles.button, style]}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  title: {
    position: "absolute",
    fontWeight: "bold",
    color: "#FFF",
    fontSize: 16,
    alignSelf: "center",
    top: 12,
  },
  button: {
    backgroundColor: "#4b0082",
    width: 200,
    height: 50,
    borderRadius: 5,
  },
});
