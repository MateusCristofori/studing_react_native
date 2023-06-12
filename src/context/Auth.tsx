import React, { createContext, useContext, useEffect, useState } from "react";
import { Alert } from "react-native";
import { AuthService } from "../services/AuthService";
import AsyncStorage from "@react-native-async-storage/async-storage";

// * São as informações que vêm da API.
export interface AuthDataAPI {
  token: string;
  email: string;
}

// * Essa inteface irá ter todas as informações que vêm da API e, também, as funções de Login e Logout.
// * Iremos ter essas funções dentro dessa interface, pois elas alteram o estado de autenticação. Então sempre que elas forem executadas, vamos alterar esse estado!
interface AuthContextData {
  authData?: AuthDataAPI;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  isLoading: boolean;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData
);

export const AuthProvider: React.FC = ({ children }: any) => {
  const [authData, setAuthData] = useState<AuthDataAPI>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadFromStorage();
  }, []);

  // * Vamos verificar se algo já existe dentro do localStorage. Caso exista, vamos atribuir essas informações ao "setAuthData".
  // * Porém, precisamos chamar essa função logo no início da construção do App. A função que reflete o "componentWillMount" é o "useEffect".
  // * Ou seja, toda vez que a aplicação for "reconstruída", o useEffect será executado e a função, por consequência, também.
  async function loadFromStorage() {
    const data = await AsyncStorage.getItem("@AuthData");
    if (data) {
      setAuthData(JSON.parse(data));
    }
    setIsLoading(false);
    return;
  }

  async function signIn(email: string, password: string) {
    try {
      const auth = await AuthService.signIn(email, password);
      // * A função de cima está fazendo todo o processo de logIn na aplicação e retorna o "token" e "email do usuário".
      // * Para termos acesso a todas essas informações na aplicação, vamos passá-la para o state "AuthData" para conseguirmos prover isso para a aplicação interna.
      setAuthData(auth);
      AsyncStorage.setItem("@AuthData", JSON.stringify(auth));
    } catch (error) {
      Alert.alert(error.message, "Tente novamente.");
    }
  }

  async function signOut(): Promise<void> {
    // * Já que no processo de LogIn vamos preencher o estado com as informações do usuário logado, o processo de Logout é justamente o inverso.
    // * Vamos simplesmente colocar como sendo undefined e todas as informações do usuário, que antes estava logado, foram apagadas.
    setAuthData(undefined);
    AsyncStorage.removeItem("@AuthData");
  }

  return (
    // * Vamos passar as informações, que queremos prover para a aplicação, dentro de "value".
    // * Todas essas informações, que existem apenas dentro das interfaces e não possuem nenhuma lógica de negócio, vão precisar ter suas lógicas declaradas dentro do componente de Provider.

    <AuthContext.Provider value={{ authData, signIn, signOut, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export default function useAuth() {
  return useContext(AuthContext);
}
