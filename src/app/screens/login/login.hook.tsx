import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../../../services/firebase";
import { Alert } from "react-native";
import { replace } from "../../flows/rootNavigation";

export const useLoginScreenHelper = () => {
    const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");

    
      const handleLogin = async () => {
        try {
          await signInWithEmailAndPassword(auth, email, password);
          Alert.alert("Sucesso!", "Logado com sucesso!");
          // Aqui navega para a tela principal da app
          replace('Home')
        } catch (error: any) {
          Alert.alert("Erro", error.message);
        }
      };
    return {onClickToLogin: handleLogin, password, email, setEmail, setPassword}
}