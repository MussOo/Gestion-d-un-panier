import { useContext } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Context } from "../context/store";
import ArticleList from "./ArticleList";
import Footer from "./Footer";
export default function CartView({ navigation }) {
  const { state, dispatch } = useContext(Context);

  const cartArticles = state.articles.filter((article) => {
    return state.cart[article.id];
  });
  return (
    <View style={styles.container}>
      <ArticleList articles={cartArticles} cart={state.cart} />
      <Footer navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 10,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid black",
    width: "100%",
    alignItems: "center",
  },
});
