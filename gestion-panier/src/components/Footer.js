import React, { useContext } from "react";
import { StyleSheet, View, Button, Alert } from "react-native";
import { Context } from "../context/store";
import { DeleteCart } from "../services/api";

export default function Footer({ navigation }) {
  const { state, dispatch } = useContext(Context);
  const { cart } = state;

  function deleteCart() {
    Alert.alert("Suppression du panier");
    Object.keys(cart).forEach((key) => {
      DeleteCart(key)
        .then((res) => {
          dispatch({ type: "DELETE_CART" });
        })
        .catch((err) => {
          console.log(err);
        });
    });
  }

  function ValidCart() {
    Alert.alert("Panier validé");
    Object.keys(cart).forEach((key) => {
      DeleteCart(key)
        .then((res) => {
          dispatch({ type: "DELETE_CART" });
        })
        .catch((err) => {
          console.log(err);
        });
    });
  }
  return (
    <View style={styles.container}>
      <View style={styles.btn_pages}>
        <Button
          style={styles.btn}
          title={"PANIER"}
          onPress={() => {
            navigation.navigate("Cart");
          }}
        />
        <Button
          style={styles.btn}
          title={"LISTES D'ARTICLES"}
          onPress={() => {
            navigation.navigate("Home");
          }}
        />
      </View>
      <View>
        <Button
          style={styles.btn}
          title={"Supprimer"}
          color={"red"}
          onPress={() => deleteCart()}
        />
        <Button
          style={styles.btn}
          title={"Valider panier"}
          color={"green"}
          onPress={() => ValidCart()}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    backgroundColor: "red",
    bottom: 0,
    zIndex: 1,
    height: 60,
    width: 400,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  btn_pages: {
    flexDirection: "column",
    justifyContent: "space-between",
  },
  btn: {
    width: 1,
  },
});
