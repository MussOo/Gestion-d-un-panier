import React, { useState, useContext, useEffect } from "react";
import { Context } from "../context/store";
import { PatchCart, DeleteCart, Addcart } from "../services/api";

export default function UseQuantity(inCart, article) {
  const { state, dispatch } = useContext(Context);
  const [quantity, setQuantity] = useState();
  const [Loading, SetLoading] = useState(state.Loading);

  useEffect(() => {
    setQuantity(inCart ? inCart.quantity : 0);
  }, [inCart]);

  const sQuantity = (quantity) => {
    SetLoading(true);
    if (quantity > 0 && inCart) {
      PatchCart(quantity, inCart.id)
        .then((res) => {
          dispatch({
            type: "PATCH_ARTICLE_CART",
            id: inCart.id,
            quantity: quantity,
          });
          SetLoading(false);
        })
        .catch((err) => {
          console.log(err);
          SetLoading(true);
        });
    } else if (quantity > 0 && !inCart) {
      Addcart(article.id, article.prix, quantity)
        .then((res) => {
          dispatch({
            type: "NEW_ARTICLE_CART",
            id: article.id,
            prix: article.prix,
            quantity: quantity,
          });
          SetLoading(false);
        })
        .catch((err) => {
          console.log(err);
          SetLoading(true);
        });
    } else if (quantity - 1 < 0 && inCart) {
      DeleteCart(inCart.id)
        .then((res) => {
          dispatch({ type: "DELETE_ARTICLE_CART", id: inCart.id });
          SetLoading(false);
        })
        .catch((err) => {
          console.log(err);
          SetLoading(true);
        });
    }
  };

  return { quantity, sQuantity, Loading };
}
