import { AuthDataAPI } from "../context/Auth";

async function signIn(email: string, password: string): Promise<AuthDataAPI> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (password === "12345") {
        resolve({
          email,
          token: "fake-token",
        });
      }
      reject(new Error("Credenciais inválidas"));
    }, 500);
  });
}

// * Ao invés de exportar a função de signIn diretamente, vamos exportar uma constante que recebe a função como valor a fim de melhorar o contexto da aplicação.
// * Vamos ter um maior controle e entendimento sobre o que está acontecendo no contexto da aplicação.
// ! Precisamos exportar como sendo um objeto! Só assim vamos conseguir acessar a função atráves da constante de exportação (AuthService).
export const AuthService = { signIn };
