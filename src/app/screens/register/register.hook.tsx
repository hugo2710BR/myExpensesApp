import { Alert } from "react-native";
import { createHousehold } from "../../../hooks/createHouseHold.hook";
import { navigate } from "../../flows/rootNavigation";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../../../services/firebase";

export const useRegisterScreenHelper = () => {

    const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
      const [householdName, setHouseholdName] = useState("");
    
      // Função para registrar usuário e criar household
      const handleRegister = async () => {
        if (!householdName) {
          Alert.alert("Erro", "Digite um nome para o household");
          return;
        }
    
        try {
          // Criar usuário
          const userCredential = await createUserWithEmailAndPassword(auth, email, password);
          const userId = userCredential.user.uid;
    
          // Criar household e vincular usuário
          await createHousehold(userId, householdName);
    
          Alert.alert("Sucesso!", "Conta e household criados com sucesso!");
    
          // Navegar para Login depois do registro
          navigate("Login");
        } catch (error: any) {
          Alert.alert("Erro", error.message);
        }
      };
    
      // Função para ir para tela Login
      const handleGoToLogin = () => {
        navigate("Login");
      };
    

    return {onClickToGoToLogin : handleGoToLogin, onClickToRegister: handleRegister, email, setEmail, password, setPassword, householdName, setHouseholdName}
}