import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CustomButton from "../components/CustomButton";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Página renderizada apenas para usuários autenticados.
      </Text>
      <CustomButton
        title="Ir para as configurações"
        onPress={() => navigation.navigate("Settings")}
        style={{ width: 250 }}
      />
      <Text style={styles.footer}>
        by <Text style={styles.footerText}>Mateus Cristófori</Text>
      </Text>
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
    textAlign: "center",
  },
  footer: {
    fontSize: 13,
  },
  footerText: {
    color: "#4b0082",
  },
});
