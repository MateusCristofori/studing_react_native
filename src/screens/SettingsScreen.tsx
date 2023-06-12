import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CustomButton from "../components/CustomButton";
import useAuth from "../context/Auth";

export default function SettingsScreen() {
  const { signOut } = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Configurações</Text>
      <CustomButton
        title="Sair do App"
        style={{ backgroundColor: "red" }}
        onPress={() => signOut()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    margin: 10,
  },
  title: {
    fontSize: 18,
  },
});
