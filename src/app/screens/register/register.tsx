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
      <Text style={styles.label}>Nome:</Text>
      <TextInput
        placeholder="Digite o seu Nome"
        value={name}
        onChangeText={setName}
        style={styles.input}
        keyboardType="ascii-capable"
        autoCapitalize="words"
      />
      <Text style={styles.label}>Email:</Text>
      <TextInput
        placeholder="Digite o seu email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <Text style={styles.label}>Senha:</Text>
      <TextInput
        placeholder="Digite a sua password"
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
      <View
        style={{
          width: "100%",
          alignItems: "center",
        }}
      >
        <View style={styles.button}>
          <Button color={"black"} title="Entrar" onPress={onClickToRegister} />
        </View>
        <View style={styles.button}>
          <Button
            color={"black"}
            title="Já tenho conta"
            onPress={onClickToGoToLogin}
          />
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
  label: {
    marginBottom: 4,
    fontWeight: "bold",
    color: "#fff",
  },
  input: {
    borderWidth: 1,
    borderColor: "#aaa",
    padding: 8,
    marginBottom: 12,
    borderRadius: 6,
    backgroundColor: "#fff",
  },
  button: {
    width: "50%",
    marginTop: 16,
    paddingVertical: 8,
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
