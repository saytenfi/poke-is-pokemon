import * as actionTypes from './shopping-types';
// import { posts } from '../../data/airbnbs';

const INITIAL_STATE = {
  // products: posts, //{id,title.descr.price,img}
  cart: [], //{id,title.descr.price,img}
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      // get the item's data from the array
      // check if Item is in the cart already
      // const item = state.products.find(
      // (prod) => prod.title === action.payload.title
      // );
      const inCart = state.cart.find((item) =>
        item.title === action.payload.title ? true : false
      );
      return {
        ...state,
        cart: inCart ? state.cart : [...state.cart, action.payload.title],
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item[0] !== action.payload.title),
      };
    default:
      return state;
  }
};

export default shopReducer;
