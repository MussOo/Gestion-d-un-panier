export const actions = {
  SET_ARTICLES: "SET_ARTICLES",
  SET_CART: "SET_CART",
  TEST: "TEST",
  DELETE_ARTICLE_CART: "DELETE_ARTICLE_CART",
  NEW_ARTICLE_CART: "NEW_ARTICLE_CART",
  PATCH_ARTICLE_CART: "PATCH_ARTICLE_CART",
  OFF_LOADING: "OFF_LOADING",
  ON_LOADING: "ON_LOADING",
  DELETE_CART: "DELETE_CART",
};

export function setArticles(articles) {
  return {
    type: actions.SET_ARTICLES,
    payload: articles,
  };
}

export function setCart(cart) {
  return {
    type: actions.SET_CART,
    payload: cart,
  };
}

export function test() {
  return {
    type: actions.TEST,
  };
}

export function deleteArticleCart() {
  return {
    type: actions.DELETE_ARTICLE_CART,
  };
}

export function newArticleCart() {
  return {
    type: actions.NEW_ARTICLE_CART,
  };
}

export function patchArticleCart() {
  return {
    type: actions.PATCH_ARTICLE_CART,
  };
}

export function DeleteCart() {
  return {
    type: actions.DELETE_CART,
  };
}
