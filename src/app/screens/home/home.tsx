// src/app/Home.tsx
import React from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import { useHomeScreenHelper } from "./home.hook";

export default function Home() {
  const { householdName, loading, userName } = useHomeScreenHelper();

  return (
    <>
      {loading ? (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator size="large" color={"black"} />
        </View>
      ) : (
        <View style={styles.container}>
          <Text>Olá, {userName} 👋</Text>
          <Text>Household: {householdName}</Text>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // ocupa a tela inteira
    padding: 20,
    backgroundColor: "#ffffffff",
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
