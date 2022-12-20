import { Product } from "types";

export const ADD_PRODUCT = "ADD_PRODUCT";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";

type ShopReducerAction =
  | {
      type: "ADD_PRODUCT";
      payload: Product;
    }
  | {
      type: "REMOVE_PRODUCT";
      payload: number;
    };

/**
 * 商品追加アクション
 * @param product 追加する商品
 * @param state 商品を追加する前のカートの状態
 * @returns 商品を追加したカートの状態
 */
const addProductToCart = (product: Product, state: Product[]) => {
  return [...state, product];
};

/**
 * 商品削除アクション
 * @param productId 削除する商品のid
 * @param state 商品を削除する前のカートの状態
 * @returns 商品を削除したカートの状態
 */
const removeProductFromCart = (productId: number, state: Product[]) => {
  const removeItemIndex = state.findIndex((item) => item.id === productId);
  state.splice(removeItemIndex, 1);
  return [...state];
};

/**
 * ショッピングカートのReducer
 * @param state 現在の状態
 * @param action アクション
 * @returns 処理後のカートの状態
 */
export const shopReducer = (state: Product[], action: ShopReducerAction) => {
  switch (action.type) {
    case "ADD_PRODUCT": {
      return addProductToCart(action.payload, state);
    }
    case "REMOVE_PRODUCT": {
      return removeProductFromCart(action.payload, state);
    }
    default: {
      return state;
    }
  }
};
