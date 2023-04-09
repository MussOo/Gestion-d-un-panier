import { StyleSheet, Text, View } from "react-native";

export default function Title() {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30 }}>Title</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    margin: 10,
    border: "1px solid black",
    width: "100%",
    alignItems: "center",
  },
});
