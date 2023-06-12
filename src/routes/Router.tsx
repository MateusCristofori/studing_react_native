import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { View, Text } from "react-native";
import useAuth from "../context/Auth";
import AppStack from "./AppStack";
import AuthStack from "./AuthStack";

export default function Router() {
  const { authData, isLoading } = useAuth();

  if (!isLoading) {
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Carregando aplicativo...</Text>
    </View>;
  }

  return (
    <NavigationContainer>
      {authData ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
