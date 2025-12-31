import React from "react";
import { View, TextInput, Button, Image, Text, StyleSheet } from "react-native";
import { useRegisterScreenHelper } from "./register.hook";
import { LinearGradient } from "expo-linear-gradient";

export default function Register() {
  const {
    email,
    householdName,
    onClickToGoToLogin,
    onClickToRegister,
    password,
    setEmail,
    setHouseholdName,
    setPassword,
    name,
    setName,
  } = useRegisterScreenHelper();

  return (
    <LinearGradient colors={["#0172B2", "#001645"]} style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require("../../../../assets/logo.png")}
          resizeMode="contain"
          style={styles.logo}
        />
      </View>
      <View style={styles.inputsContainer}>
        <Text style={styles.label}>Nome</Text>
        <TextInput
          placeholder="Digite o seu Nome"
          value={name}
          onChangeText={setName}
          style={styles.input}
          keyboardType="ascii-capable"
          autoCapitalize="words"
        />
        <Text style={styles.label}>Email</Text>
        <TextInput
          placeholder="Digite o seu email"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <Text style={styles.label}>Senha</Text>
        <TextInput
          placeholder="Digite a sua password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          style={styles.input}
        />

        <Text style={styles.label}>Nome do Household</Text>
        <TextInput
          placeholder="Ex: Família Silva"
          value={householdName}
          onChangeText={setHouseholdName}
          style={styles.input}
        />
        <View
          style={{
            width: "100%",
            alignItems: "center",
          }}
        >
          <View style={styles.button}>
            <Button
              color={"black"}
              title="Entrar"
              onPress={onClickToRegister}
            />
          </View>
          <View style={styles.button}>
            <Button
              color={"black"}
              title="Já tenho conta"
              onPress={onClickToGoToLogin}
            />
          </View>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // ocupa a tela inteira
    padding: 20,
    justifyContent: "center",
  },
  inputsContainer: {
    backgroundColor: "#f5f5f54d",
    alignItems: "center",
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 20,
    display: "flex",
    flexDirection: "column",
  },
  label: {
    marginBottom: 4,
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  input: {
    width: "70%",
    borderColor: "#aaa",
    padding: 12,
    marginBottom: 18,
    borderRadius: 16,
    backgroundColor: "#fff",
  },
  button: {
    width: "50%",
    marginTop: 16,
    paddingVertical: 4,
    paddingHorizontal: 8,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "none",
    borderRadius: 24,
    textAlign: "center",
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 8,
  },
  logo: {
    width: 180,
    height: 180,
  },
});
