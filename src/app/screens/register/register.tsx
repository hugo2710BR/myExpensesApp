import React, { useState } from "react";
import { View, TextInput, Button, Alert, Text, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../services/firebase";
import { createHousehold } from "../../../hooks/createHouseHold.hook";
import { useRegisterScreenHelper } from "./register.hook";

export default function Register() {

  const {email, householdName, onClickToGoToLogin, onClickToRegister, password, setEmail, setHouseholdName, setPassword} = useRegisterScreenHelper()
  
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Email:</Text>
      <TextInput
        placeholder="Digite seu email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <Text style={styles.label}>Senha:</Text>
      <TextInput
        placeholder="Digite sua senha"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={styles.input}
      />

      <Text style={styles.label}>Nome do Household:</Text>
      <TextInput
        placeholder="Ex: Família Silva"
        value={householdName}
        onChangeText={setHouseholdName}
        style={styles.input}
      />

      <Button title="Cadastrar" onPress={onClickToRegister} />
      <View style={{ marginTop: 16 }}>
        <Button title="Já tenho conta / Logar" onPress={onClickToGoToLogin} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // ocupa a tela inteira
    padding: 20,
    backgroundColor: "#c4c2ffff",
    justifyContent: "center",
  },
  label: {
    marginBottom: 4,
    fontWeight: "bold",
  },
  input: {
    borderWidth: 1,
    borderColor: "#aaa",
    padding: 8,
    marginBottom: 12,
    borderRadius: 6,
    backgroundColor: "#fff",
  },
});
