// src/app/components/ScreenWrapper.tsx
import React from "react";
import { View, StyleSheet } from "react-native";

type Props = {
  children: React.ReactNode;
};

export default function ScreenWrapper({ children }: Props) {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // importante: ocupa a tela inteira
    justifyContent: 'center',
    padding: 16,
    backgroundColor: "#c4c2ffff",
  },
});
