import React, { useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import logo from "../assets/logo.png";
import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";
import useAuth from "../context/Auth";

export default function SignInScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useAuth();

  const logIn = async () => {
    await signIn(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <View style={styles.container}>
      <Image source={logo} style={{ width: 150, height: 100 }} />
      <CustomInput
        placeholder="E-mail"
        style={{ marginTop: 15 }}
        value={email}
        onChangeText={setEmail}
      />
      <CustomInput
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
      />
      <CustomButton title="Entrar no App" onPress={() => logIn()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
