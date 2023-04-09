import { StyleSheet, Text, View, Button, Image } from "react-native";

export default function Quantity({ quantity, onUpdate, Loading }) {
  return (
    <View style={styles.container}>
      <Button
        title="-"
        onPress={() => onUpdate(quantity - 1)}
        disabled={quantity === 0 || Loading}
      />
      <Text>{Loading ? "...loading" : quantity}</Text>
      <Button
        title="+"
        onPress={() => onUpdate(quantity + 1)}
        disabled={Loading}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    border: "1px solid black",
    width: "20%",
    alignItems: "center",
  },
  Loading: {
    width: 35,
    height: 35,
  },
});
