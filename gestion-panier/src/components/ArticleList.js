import { useEffect, useState } from "react";
import { StyleSheet, ScrollView } from "react-native";
import Article from "./Article";

export default function ArticleList({ articles, cart }) {
  const [Articles, setArticles] = useState([]);
  useEffect(() => {
    const art = articles?.map((art, index) => (
      <Article key={index} article={art} inCart={cart[art.id]} />
    ));
    setArticles(art);
  }, [articles, cart]);

  return <ScrollView style={styles.scroll}>{Articles}</ScrollView>;
}

const styles = StyleSheet.create({
  container: {
    border: "1px solid black",
    width: "100%",
    alignItems: "center",
  },
  scroll: {
    flex: 1,
    width: "100%",
  },
});
