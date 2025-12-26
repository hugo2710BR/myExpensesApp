import React from "react";
import { View, TextInput, Button, Alert, Text, StyleSheet } from "react-native";
import { useLoginScreenHelper } from "./login.hook";

export default function Login() {
  const { email, password, onClickToLogin, setEmail, setPassword } =
    useLoginScreenHelper();

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Email:</Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />

      <Text style={styles.label}>Password:</Text>
      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={styles.input}
      />

      <Button title="Login" onPress={onClickToLogin} />
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
