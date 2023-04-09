import { useContext, useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import ArticleList from "./ArticleList";
import { Context } from "../context/store";
import Footer from "./Footer";
export default function ArticleView({ navigation }) {
  const { state, dispatch } = useContext(Context);

  return (
    <View style={styles.container}>
      <ArticleList articles={state.articles} cart={state.cart} />
      <Footer navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 5,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid black",
    alignItems: "center",
  },
});
