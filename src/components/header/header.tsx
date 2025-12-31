import { JSX } from "react";
import { View, StyleSheet, Text } from "react-native";

export type HeaderProps = {
  middleContent?: string;
  startContent?: JSX.Element;
  endContent?: JSX.Element;
};

export const Header = (props: HeaderProps) => {
  const { startContent, middleContent, endContent } = props;
  return (
    <View style={styles.container}>
      {startContent && <View style={styles.startContent}>{startContent}</View>}
      <Text style={styles.middleContent}>{middleContent}</Text>
      {endContent && <View style={styles.endContent}>{endContent}</View>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    marginTop: 50,
    padding: 0,
    backgroundColor: "#ffffffff",
  },
  startContent: {
    padding: 0,
    width: "15%",
    backgroundColor: "#ff8d8dff",
  },
  middleContent: {
    paddingTop: 20,
    paddingRight: 0,
    paddingBottom: 20,
    paddingLeft: 10,
    fontSize: 18,
  },
  endContent: {
    padding: 0,
    width: "15%",
    backgroundColor: "#ff8d8dff",
  },
});
