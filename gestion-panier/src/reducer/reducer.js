import { actions } from "../actions/index";

export function reducer(state, action) {
  switch (action.type) {
    case actions.SET_ARTICLES: {
      return { ...state, articles: action.articles };
    }
    case actions.SET_CART: {
      return { ...state, cart: action.cart };
    }
    case actions.PATCH_ARTICLE_CART: {
      return {
        ...state,
        cart: {
          ...state.cart,
          [action.id]: { ...state.cart[action.id], quantity: action.quantity },
        },
      };
    }
    case actions.DELETE_ARTICLE_CART: {
      let newCart = { ...state.cart };
      delete newCart[action.id];
      return {
        ...state,
        cart: newCart,
      };
    }
    case actions.NEW_ARTICLE_CART: {
      return {
        ...state,
        cart: {
          ...state.cart,
          [action.id]: {
            id: action.id,
            quantity: action.quantity,
            prix: action.prix,
          },
        },
      };
    }
    case actions.OFF_LOADING: {
      return {
        ...state,
        loading: false,
      };
    }
    case actions.ON_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case actions.DELETE_CART: {
      return {
        ...state,
        cart: {},
      };
    }
    default:
      throw new Error();
  }
}
