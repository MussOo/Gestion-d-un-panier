import { useState, useEffect, useReducer } from "react";
import { fetchArticles, fetchCart } from "../services/api";
import { reducer } from "../reducer/reducer";

export default function useArticles() {
  const initialState = { articles: [], cart: {}, Loading: false };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetchArticles().then((articles) => {
      dispatch({ type: "SET_ARTICLES", articles: articles });
    });
    fetchCart().then((cart) => {
      let d = cart.reduce((panier, article) => {
        panier[article.id] = article;
        return panier;
      }, {});
      dispatch({ type: "SET_CART", cart: d });
    });
    console.log("useEffect");
  }, [dispatch]);

  return { state, dispatch };
}
