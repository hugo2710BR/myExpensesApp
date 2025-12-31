import { useEffect, useRef } from "react";
import { Animated, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { replace } from "../app/flows/rootNavigation";

export default function Splash() {
  const scaleAnim = useRef(new Animated.Value(0.85)).current;

  useEffect(() => {
    Animated.timing(scaleAnim, {
      toValue: 1,
      duration: 1700,
      useNativeDriver: true,
    }).start();

    const timer = setTimeout(() => {
      replace("Login"); // ou Home se estiver logado
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <LinearGradient colors={["#0172B2", "#001645"]} style={styles.container}>
      <Animated.Image
        source={require("../../assets/logo.png")}
        resizeMode="contain"
        style={[
          styles.logo,
          {
            transform: [{ scale: scaleAnim }],
          },
        ]}
      />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 180,
    height: undefined,
    aspectRatio: 1,
  },
});
