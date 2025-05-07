import { ADD_TO_CART, EMPTY_CART, PRODUCT_LIST, REMOVE_CART } from "./constant";

export const cartData = (data = [], action) => {
  console.log("Reducer Call");
  switch (action.type) {
    case ADD_TO_CART:
      return [action.data, ...data];
    case REMOVE_CART:
      if (data.length) {
        data.length = data.length - 1;
      }
      return [...data];

    case EMPTY_CART:
      return [];
      case PRODUCT_LIST:
        return [action.data, ...data];
    default:
      return [];
  }
};
